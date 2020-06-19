import React, { useState, useCallback, useRef } from "react";


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
  //rows and columns
  const [rows] = useState(25);
  const [cols] = useState(25);

  //grid setup
  const [grid, setGrid] = useState(() => {
    const griddy = [];
    for (let i = 0; i < rows; i++) {
      griddy.push(Array.from(Array(cols), () => 0));
    }
    return griddy;
  });

  const emptyGrid = () => {
    const griddy = [];
    for (let i = 0; i < rows; i++) {
      griddy.push(Array.from(Array(cols), () => 0));
    }
    return griddy;
  };

  // state
  const [running, setRunning] = useState(false);
  const [genCount, setGenCount] = useState(0);
  const [speed, setSpeed] = useState(100);
  const [oneGen, setOneGen] = useState(false);

  //set refs for everything you aren't running only once
  const runRef = useRef(running);
  runRef.current = running;

  const genCountRef = useRef(genCount);
  genCountRef.current = genCount;

  const speedRef = useRef(speed);
  speedRef.current = speed;

  const genRef = useRef(oneGen);
  genRef.current = oneGen;

  // use useCallback so the function doesn't change/not be recreated every render. the useCallback hook returns a memoized version of the callback that only changes if one of the dependencies has changed
  const runSimulation = useCallback(() => {
    // if we are not running the sim then just return otherwise do a simulation
    if (!runRef.current) {
      return;
    }
    // use setGrid to pass in function to get current value of grid and return the new value that we can mutate (different way of doing what we did in the newGrid() below)
    setGrid((g) => {
      //the simulation

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
            let newGrid = [];
            if (neighbors < 2 || neighbors > 3) {
              newGrid[i][j] = 0;
            } else if (g[i][j] === 0 && neighbors === 3) {
              newGrid[i][j] = 1;
            }
          }
        }
    });

    setTimeout(() => {
      setGenCount(genCountRef.current + 1)
      runSimulation()
  }, speedRef.current );
}, []);

  return (
    <>
      <p>Generations: {genCount}</p>
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
      <button
        onClick={() => {
          setGrid(emptyGrid());
          setGenCount(0);
        }}
      >
        Clear
      </button>

      <button
        onClick={() => {
          
        }}
      >
        One Generation
      </button>

      <button
        onClick={() => {
          const griddy = [];
          for (let i = 0; i < rows; i++) {
            griddy.push(
              Array.from(Array(cols), () => (Math.random() > 0.7 ? 1 : 0))
            );
          }
          setGrid(griddy);
        }}
      >
        Random
      </button>

      <button onClick={() => {
        setSpeed(1000)
      }}>Super Slow</button>
      <button onClick={() => {
        setSpeed(10)
      }}>Ultra Fast</button>

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
                //in order to not mutate state of grid we use immer
                // const newGrid = produce(grid, (newGrid) => {
                //   //can alter newGrid make an immutable change and make a new grid for us, better than mutating state of original grid -- with this code we can toggle the colored squares on and off
                //   newGrid[i][j] = grid[i][j] ? 0 : 1;
                // });
                // setGrid(newGrid);
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































