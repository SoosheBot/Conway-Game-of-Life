import React, { useState } from "react";
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

  return (
    <>
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
                  //can alter gridCopy make an immutable change and make a new grid for us, better than mutating state of original grid
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
      <button onClick={() =>{}}>Start</button>
      <button onClick={() =>{}}>Stop</button>
      <button onClick={() =>{}}>Clear</button>
    </>
  );
};


export default Grid;
