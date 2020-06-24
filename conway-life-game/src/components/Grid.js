import React, { useState, useEffect, useRef } from "react";
import GridStyle from "./styles/GridStyle";

//boundaries of the grid
const rows = 25;
const cols = 25;

// Eight neighbors, which are the cells that are horizontally, vertically, or diagonally adjacent. They all live in the neighborhood.
const neighborhood = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

// Set up an empty grid that can be used across multiple states
const emptyGrid = () => {
  const clearedGrid = [];
  for (let i = 0; i < rows; i++) {
    clearedGrid.push(Array.from(Array(cols), () => 0));
  }
  return clearedGrid;
};

// Set up the game's rules. First, we set the new grid equal to an empty grid (using the emptyGrid function we created above).
const gameRules = (g) => {
  let newGrid = emptyGrid();
  // Then we have nested for loops to iterate over the neighborhood cells by the rows and cols we set up initially.
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let neighbors = 0;
      neighborhood.forEach(([x, y]) => {
        const blocX = i + x;
        const blocY = j + y;
        if (blocX >= 0 && blocX < rows && blocY >= 0 && blocY < cols) {
          neighbors += g[blocX][blocY];
        }
      });
      // Once we have set up how the cells work on the board, we then implement the actual rules of how the cells travel across the board.
      if (neighbors < 2 || neighbors > 3) {
        newGrid[i][j] = 0;
      } else if (g[i][j] === 1 && (neighbors === 2 || neighbors === 3)) {
        newGrid[i][j] = 1;
      } else if (g[i][j] === 0 && neighbors === 3) {
        newGrid[i][j] = 1;
      }
    }
  }
  return newGrid;
};

const Grid = (props) => {
  //Initial grid state one (to set up double buffering)
  const [frameOne, setFrameOne] = useState(() => {
    return emptyGrid();
  });

  // Initial grid state two (to set up double buffering)
  const [frameTwo, setFrameTwo] = useState(() => {
    return emptyGrid();
  });

  // State to determine if the game is running or not, initial state is false because the game doesn't start off running.
  const [running, setRunning] = useState(false);

  // The state that determines which grid is active
  const [activeGrid, setActiveGrid] = useState(1);

  // The generation counter for the cells
  const [genCount, setGenCount] = useState(0);

  // Speed of the simulation initial state
  const [speed, setSpeed] = useState(300);

  // set speed reference for simulation
  const speedRef = useRef(speed);
  speedRef.current = speed;

  // Double buffer -- when the active grid is 1, we set frameOne's state into the gameRules function, and set that into frameTwo. Else, if frameTwo is active, we set it into the gameRules, and put that setup inside setframeOne's state so it is ready to be handed off. We also put the generation counter here.
  const nextGen = () => {
    if (activeGrid === 1) {
      setFrameTwo(gameRules(frameOne));
      setActiveGrid(2);
    } else {
      setFrameOne(gameRules(frameTwo));
      setActiveGrid(1);
      setGenCount(genCount + 1);
    }
  };

  // Ternary operator to set a const of grid to the activeGrid state. If the grid is active it will be active on frameOne or frameTwo
  const grid = activeGrid === 1 ? frameOne : frameTwo;

  // The simulation --
  useEffect(() => {
    let runSim = null;
    if (activeGrid && running) {
      runSim = setInterval(() => {
        nextGen();
      }, speedRef.current);
    } else if (!running) {
      clearInterval(runSim);
      return;
    }
    return () => clearInterval(runSim);
  }, [activeGrid, running]);

  return (
    <GridStyle>
      <div
        className="grid-wrapper"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, 20px)`,
        }}
      >
        {grid.map((row, i) =>
          row.map((col, j) => (
            <div
              className="grid-boxes"
              key={`${i}-${j}`}
              onClick={() => {
                const newGrid = Array.from(grid);
                newGrid[i][j] = grid[i][j] ? 0 : 1;
                if (activeGrid === 1) {
                  setFrameOne(newGrid);
                } else {
                  setFrameTwo(newGrid);
                }
              }}
              style={{
                width: 20,
                height: 20,
                backgroundColor: grid[i][j] ? "purple" : undefined,
                border: "solid 1px black",
              }}
            />
          ))
        )}
      </div>
      <h3 className="gen-count">Generation Count: {genCount}</h3>
      <div className="button-box">
      
        <button
          onClick={() => {
            const clearedGrid = [];
            for (let i = 0; i < rows; i++) {
              clearedGrid.push(
                Array.from(Array(cols), () => (Math.random() > 0.7 ? 1 : 0))
              );
            }
            if (activeGrid === 1) {
              setFrameOne(clearedGrid);
            } else {
              setFrameTwo(clearedGrid);
            }
          }}
        >
          Random
        </button>
        <button
          onClick={() => {
            setRunning(!running);
          }}
        >
          {running ? "Stop" : "Start"}
        </button>

        <button
          onClick={() => {
            setSpeed(100);
          }}
        >
          Speed Up
        </button>

        <button
          onClick={() => {
            setSpeed(1000);
          }}
        >
          Slow Down
        </button>

        <button
          onClick={() => {
            nextGen();
          }}
        >
          One Generation
        </button>

        <button
          onClick={() => {
            setFrameOne(emptyGrid());
            setFrameTwo(emptyGrid());
            setGenCount(0);
          }}
        >
          Clear
        </button>
        </div>
        <div className="pattern-button-box">
        <button
          onClick={() => {
            const newGrid = Array.from(grid);
            newGrid[1][3] = 1;
            newGrid[2][3] = 1;
            newGrid[3][3] = 1;
            newGrid[3][2] = 1;
            newGrid[2][1] = 1;
            if (activeGrid === 1) {
              setFrameOne(newGrid);
            } else {
              setFrameTwo(newGrid);
            }
          }}
        >
          Glider
        </button>
        <button
          onClick={() => {
            const newGrid = Array.from(grid);
            newGrid[1][3] = 1;
            newGrid[2][3] = 1;
            newGrid[3][3] = 1;
            newGrid[3][2] = 1;
            newGrid[2][1] = 1;
            if (activeGrid === 1) {
              setFrameOne(newGrid);
            } else {
              setFrameTwo(newGrid);
            }
          }}
        >
          Pulsar
        </button>
        
        </div>
        
      
    </GridStyle>
  );
};

export default Grid;
