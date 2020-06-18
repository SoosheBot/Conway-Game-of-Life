import React, { useState, useCallback, useRef } from "react";
// Immer package to produce new state from previous one
import produce from "immer";

// let gridRows = 60;
// let gridCols = 60;

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



const Grid = () => {
  const [rows, setRows] = useState(50);
  const [cols, setCols] = useState(50);
  const [grid, setGrid] = useState(() => {
    // return newEmptyGrid();
    const griddy = [];
    for (let i = 0; i < rows; i++) {
      griddy.push(Array.from(Array(cols), () => 0));
    }
    return griddy;
  });

  const newEmptyGrid = () => {
    const griddy = [];
    for (let i = 0; i < rows; i++) {
      griddy.push(Array.from(Array(cols), () => 0))
    }
    return griddy;
  };

  //store whether we started the game or not in state. the default is false--not running
  const [running, setRunning] = useState(false);
  //set a running ref so you aren't running the run simulation once, espec since the run state is going to change
  const runRef = useRef(running);
  runRef.current = running;

  // set a generation counter for
  const [genCount, setGenCount] = useState(0);
  const genCountRef = useRef(genCount);
  genCountRef.current = genCount;

  const [oneXGen, setOneXGen] = useState(false);
  const oneXGenRef = useRef(oneXGen);
  oneXGenRef.current = oneXGen;

  // use useCallback so the function doesn't change/not be recreated every render. the useCallback hook returns a memoized version of the callback that only changes if one of the dependencies has changed
  const runSimulation = useCallback(() => {
    // if we are not running the sim then just return otherwise do a simulation
    if (!runRef.current) {
      return;
    }

    // use setGrid to pass in function to get current value of grid and return the new value that we can mutate (different way of doing what we did in the newGrid() below)
    setGrid((g) => {
      //the simulation
      return produce(g, (newGrid) => {
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
            //now we write about what happens if neighboring cells are filled or clear
            if (neighbors < 2 || neighbors > 3) {
              newGrid[i][j] = 0;
            } else if (g[i][j] === 0 && neighbors === 3) {
              newGrid[i][j] = 1;
            }
          }
        }
      });
    });

    setTimeout(runSimulation, 100);
    setGenCount(genCountRef.current + 1);
  }, []);

  return (
    <>
      <p>Rounds: {genCount}</p>
      {/* if the game is running we display Stop, otherwise, display Start -- set the running state above */}
      <button
        onClick={() => {
          setRunning(!running);
          if (!running) {
            runRef.current = true;
            runSimulation();
          }
        }}
      >
        {running ? "Stop" : "Start"}
      </button>

      {/* clear the screen and reset the timer */}
      <button
        onClick={() => {
          setGrid(newEmptyGrid);
          setGenCount(0);
        }}
      >
        Clear
      </button>

      <button
        onClick={() => {
          console.log("Move one generation");
          // some code to advance the simulation by one, only
        }}
      >
        One Generation
      </button>

      {/* display a random number of filled cells */}
      <button
        onClick={() => {
          const rows = [];
          for (let i = 0; i < rows; i++) {
            rows.push(
              Array.from(Array(cols), () => (Math.random() > 0.7 ? 1 : 0))
            );
          }
          setGrid(rows);
        }}
      >
        Random
      </button>

      {/* map the grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, 20px)`,
        }}
      >
        {grid.map((rows, i) =>
          rows.map((col, j) => (
            <div
              key={`${i}-${j}`}
              onClick={() => {
                //in order to not mutate state of grid we use immer
                const newGrid = produce(grid, (newGrid) => {
                  //can alter newGrid make an immutable change and make a new grid for us, better than mutating state of original grid -- with this code we can toggle the colored squares on and off
                  newGrid[i][j] = grid[i][j] ? 0 : 1;
                });
                setGrid(newGrid);
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
    </>
  );
};

export default Grid;
