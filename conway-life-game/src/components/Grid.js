import React, { useState, useCallback, useRef } from "react";

const rows = 5;
const cols = 5;

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

const emptyGrid = () => {
  const griddy = [];
  for (let i = 0; i < rows; i++) {
    griddy.push(Array.from(Array(cols), () => 0));
  }
  return griddy;
};

const gameRules = (g) => {
  let newGrid = emptyGrid();//grid.slice(0)
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
      if (neighbors < 2 || neighbors > 3) {
        newGrid[i][j] = 0;
      } else if ( g[i][j] === 1 && (neighbors === 2 || neighbors === 3)) {
        newGrid[i][j] = 1;
      } else if (g[i][j] === 0 && neighbors === 3) {
        newGrid[i][j] = 1;
      }
    } 
  }
  return newGrid;
}

const Grid = () => {
  const [gridOne, setGridOne] = useState(() => {
    return emptyGrid();
  });

  const [gridTwo, setGridTwo] = useState(() => {
    return emptyGrid();
  });

  const [activeGrid, setActiveGrid] = useState(1);

  const [running, setRunning] = useState(false);
  // const [nextGen, setNextGen] = useState(false);
  const [genCount, setGenCount] = useState(0);

  const runRef = useRef(running);
  runRef.current = running;

  const genCountRef = useRef(genCount);
  genCountRef.current = genCount;

const runSim = useCallback(() => {
    if (!runRef.current) {
      return;
    }

    if (activeGrid === 1) {
      setGridTwo(gameRules(gridOne));
      setActiveGrid(2);
    } else {
      setGridOne(gameRules(gridTwo));
      setActiveGrid(1);
    }

    });



const grid =  (activeGrid === 1) ? gridOne :  gridTwo



  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, 20px)`,
        }}
      >
        {grid.map((row, i) => 
          row.map((col, j) => (
            <div
              key={`${i}-${j}`}
              onClick={() => {
                const newGrid = Array.from(grid);
                //with this code we can toggle the colored squares on and off
                newGrid[i][j] = grid[i][j] ? 0 : 1;
                if (activeGrid === 1) {
                  setGridOne(newGrid)
                } else {
                  setGridTwo(newGrid)
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
      <button
        onClick={() => {
          const griddy = [];
          for (let i = 0; i < rows; i++) {
            griddy.push(
              Array.from(Array(cols), () => (Math.random() > 0.7 ? 1 : 0))
            );
          }
          if (activeGrid === 1) {
            setGridOne(griddy)
          } else {
            setGridTwo(griddy)
          }
        }}
      >
        Random
      </button>
      <p>{genCount}</p>
      <button
                    onClick={() => {
                    setRunning(!running);
                    if (running) {
                        runRef.current = true;
                        runSim();
                    }
                    }}
                >
                    {running ? "Stop" : "Start"}
                </button>
    </>
  );
};

export default Grid;
