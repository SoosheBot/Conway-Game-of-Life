import React, { useState, useCallback, useRef } from 'react';

const rows = 25;
const cols = 25;

const neighborhood = [
  [-1, -1], [-1, 0], [-1, 1],
	[ 0, -1], [ 0, 1],
	[ 1, -1], [ 1, 0], [ 1, 1],
];


const emptyGrid = () => {
  const griddy = [];
    for (let i = 0; i < rows; i++) {
      griddy.push(Array.from(Array(cols), () => 0));
    }
    return griddy;
}


const Grid = () => {
    const [grid, setGrid] = useState(() => {
      return emptyGrid()
    });
  
    
  const [running, setRunning] = useState(false);
  const [nextGen, setNextGen] = useState(false);
  const [genCount, setGenCount] = useState(0);

  const runRef = useRef(running);
  runRef.current = running;

  const genCountRef = useRef(genCount);
  genCountRef.current = genCount;


  const runSim = useCallback((rows,cols) => {
    if (!runRef.current) {
      return;
    }

    setGrid((g, newGrid) => {
        for (let i = 0; i < rows; i++) {
          for (let j = 0; j < cols; j++) {
            let neighbors = 0;
            neighborhood.forEach(([x,y]) => {
              const blocX = i + x;
              const blocY = j + y;
            if (blocX >= 0 && blocX < rows && blocY >=0 && blocY < rows) {
              neighbors += g[blocX][blocY]
            }
            })
            if (neighbors < 2 || neighbors > 3) {
              newGrid[i][j] = 0;
            } else if (g[i][j] === 0 && neighbors === 3) {
              newGrid[i][j] = 1;
            }
          }}
      
    })
    setTimeout(runSim, 100);
    setGenCount(genCountRef.current + 1)
  }, [])
  

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: `repeat(${cols}, 20px)`,
    }}
    >
      {grid.map((rows, i) =>
          rows.map((col, j) => (
            <div
              key={`${i}-${j}`}
              onClick={() => {
                const newGrid = grid
                  //can alter newGrid make an immutable change and make a new grid for us, better than mutating state of original grid -- with this code we can toggle the colored squares on and off
                  newGrid[i][j] = grid[i][j] ? 0 : 1;
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
  )
};

export default Grid;

