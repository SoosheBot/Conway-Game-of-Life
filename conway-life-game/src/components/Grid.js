import React, { useState, useCallback, useRef } from "react";
// Immer package to produce new state from previous one
import produce from "immer";

const numRows = 50;
const numCols = 50;



const Grid = () => {
  const [grid, setGrid] = useState(() => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => 0));
    }
    return rows;
  });

  //store whether we started the game or not in state. the default is false--not running
  const [running, setRunning] = useState(false);
  //set a running ref so you aren't running the run simulation once, espec since the run state is going to change
  const runRef = useRef(running);
  runRef.current = running;

  //what useCallback does -- Pass an inline callback and an array of dependencies. useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed. 
  const runSimulation = useCallback(() => {
    // if we are not running the sim then just return otherwise do a simulation
    if (!runRef.current) {
      return;
    }

    // simulation here -- to pass in function to get current value of grid and return the new value that we can mutate (different way of doing what we did in the newGrid() below)
    setGrid((g) => {
      return 
    })
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j <numCols; j++) {

      }
    }
  setTimeout(runSimulation, 1000)
  }, []);

  return (
    <>
    {/* if the game is running we display Stop, otherwise, display Start -- set the running state above */}
    <button onClick={() =>{
      setRunning(!running)
    }}>
      {running ? "Stop" : "Start"}
    </button>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${numCols}, 20px)`
        }}
      >
        {grid.map((rows, i) =>
    rows.map((col, k) => (
      <div
      key={`${i}-${k}`}
      onClick={() => {
                //in order to not mutate state of grid we use immer
                const newGrid = produce(grid, gridCopy => {
                  //can alter gridCopy make an immutable change and make a new grid for us, better than mutating state of original grid -- with this code we can toggle the colored squares on and off
                  gridCopy[i][k] = grid[i][k] ? 0 : 1;
                });
                setGrid(newGrid);
              }}
              style={{
                width: 20,
                height: 20,
                backgroundColor: grid[i][k] ? "purple" : undefined,
                border: "solid 1px black"
              }}
            />
          ))
        )}
      </div>

      <button onClick={() =>{}}>Next Generation</button>
      
      <button onClick={() =>{}}>Stop</button>
      <button onClick={() =>{}}>Clear</button>
    </>
  );
};


export default Grid;
