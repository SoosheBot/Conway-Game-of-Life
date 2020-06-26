import React, { useState, useEffect, useRef } from "react";
import GridStyle from "./styles/GridStyle";

// Eight directions on a x,y grid that the automata can travel in
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

  //boundaries of the grid -- can refactor this, possibly to useState so we can create the option to change grid boundaries down the line
  let rows = 25;
  let cols = 25
 

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
    // Then we have nested for loops to iterate over the neighborhood cells by the size.sizerows and cols we set up initially.
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

const Grid = () => {
  //Initial grid state one (to set up double buffering)
  const [frameOne, setFrameOne] = useState(() => {
    return emptyGrid();
  });
  const frameOneRef = useRef(frameOne);
  frameOneRef.current = frameOne

  // Initial grid state two (to set up double buffering)
  const [frameTwo, setFrameTwo] = useState(() => {
    return emptyGrid();
  });

  // State to determine if the game is running or not, initial state is false because the game doesn't start off running.
  const [running, setRunning] = useState(false);

  // The state that determines which grid is active
  const [activeFrame, setActiveFrame] = useState(1);

  // The generation counter for the cells
  const [genCount, setGenCount] = useState(0);

  // Speed of the simulation initial state
  const [speed, setSpeed] = useState(300);

  // set speed reference for simulation
  const speedRef = useRef(speed);
  speedRef.current = speed;


  // Double buffer -- when the active grid is 1, we set frameOne's state into the gameRules function, and set that into frameTwo. Else, if frameTwo is active, we set it into the gameRules, and put that setup inside setframeOne's state so it is ready to be handed off. We also put the generation counter here.
  const nextGen = () => {
    setGenCount(genCount + 1);
    if (activeFrame === 1) {
      setFrameTwo(gameRules(frameOne));
      setActiveFrame(2);
    } else {
      setFrameOne(gameRules(frameTwo));
      setActiveFrame(1);
    }
  };

  // Ternary operator to set a const of grid to the activeFrame state. If the grid is active it will be active on frameOne or frameTwo
  const grid = activeFrame === 1 ? frameOne : frameTwo;

  // The simulation --
  useEffect(() => {
    let runSim = null;
    if (activeFrame && running) {
      runSim = setInterval(() => {
        nextGen();
      }, speedRef.current, frameOneRef.current);
    } else if (!running) {
      clearInterval(runSim);
      return;
    }
    return () => clearInterval(runSim);
  }, [activeFrame, running]);


  return (
    <div>
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
                className={grid[i][j] ? "grid-boxes" : ""}
                key={`${i}-${j}`}
                onClick={() => {
                  if (running) {
                    return;
                  }
                  const newGrid = Array.from(grid);
                  newGrid[i][j] = grid[i][j] ? 0 : 1;
                  if (activeFrame === 1) {
                    setFrameOne(newGrid);
                  } else {
                    setFrameTwo(newGrid);
                  }
                }}
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: grid[i][j] ? "purple" : undefined,
                  border: "dashed 1px black",
                }}
              />
            ))
          )}
        </div>
        <h3 className="gen-count">Generation Count: {genCount}</h3>
        <div className="button-box">
          <button
            onClick={() => {
              setRunning(!running);
              // if (!running) {
              //   window.cancelAnimationFrame(activeFrame)
              // } 
              
            }}
          >
            {running ? "Stop" : "Start"}
          </button>

          <button
            onClick={() => {
              setSpeed(50);
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
              if (running) {
                setRunning(!running);
              }
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
              if (activeFrame === 1) {
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
              newGrid[8][24] = 1;
              newGrid[10][24] = 1;
              newGrid[11][23] = 1;
              newGrid[11][22] = 1;
              newGrid[11][21] = 1;
              newGrid[11][20] = 1;
              newGrid[10][20] = 1;
              newGrid[9][20] = 1;
              newGrid[8][21] = 1;
              if (activeFrame === 1) {
                setFrameOne(newGrid);
              } else {
                setFrameTwo(newGrid);
              }
            }}
          >
            Lightweight Spaceship (LWSS)
          </button>
          <button
            onClick={() => {
              const clearedGrid = [];
              for (let i = 0; i < rows; i++) {
                clearedGrid.push(
                  Array.from(Array(cols), () => (Math.random() > 0.7 ? 1 : 0))
                );
              }
              if (activeFrame === 1) {
                setFrameOne(clearedGrid);
              } else {
                setFrameTwo(clearedGrid);
              }
            }}
          >
            Random
          </button>
          <div className="grid-sizes-button box">
          </div>
        </div>
        <sub className="footer">
          Check out the GitHub repo here:{" "}
          <a href="#" target="_blank">
            @SoosheBot
          </a>
        </sub>
      </GridStyle>
    </div>
  );
};

export default Grid;