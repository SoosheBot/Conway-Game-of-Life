import React, { useState, useCallback, useRef } from "react";
// Immer package to produce new state from previous one
import produce from "immer";

const gridRows = 25;
const gridCols = 25;

// to find the neighbor cells
const actions = [
  [0, 1],
  [0, -1],
  [1, -1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0],
];

const createInitGrid = () => {
  const rows = [];
  for (let i = 0; i < gridRows; i++) {
    rows.push(Array.from(gridCols), () => 0);
  }
  return rows;
};

function Grid() {
  // set the initial grid state (it is initially blank)
  const [grid, setGrid] = useState(() => {
    //return the initial grid
    return createInitGrid();
  });

  // set the speed state for the simulation
  const [speed, setSpeed] = useState(100);
  // set the speed reference for the simulator, set it equal to the speed state
  const speedRef = useRef(speed);
  speedRef.current = speed;

  // set the run state for the game (default is false because it is not running)
  const [run, setRun] = useState(false);
  //set the run reference for the simulator, set it equal to the run state
  const runRef = useRef(run);
  runRef.current = run;

  // set the state of the generations, they will always start at 0
  const [generation, setGeneration] = useState(0);
  // set the generation reference and set it = the generation state
  const generationRef = useRef(generation);
  generationRef.current = generation;

  // create a function to run the game simulator
  const runSimulation = useCallback(() => {
    if (!runRef.current) {
      return;
    }

    //set the grid
    setGrid((g) => {
      // use the Immer 'produce' package... it does this, basically --> produce(currentState, producer: (draftState) => void): nextState
      return produce(g, (copyGrid) => {
        for (let i = 0; i < gridRows; i++) {
          for (let k = 0; k < gridCols; k++) {
            let neighbors = 0;
            actions.forEach(([x, y]) => {
              const newI = i + x;
              const newK = k + y;
              if (
                newI >= 0 &&
                newI < gridRows &&
                newK >= 0 &&
                newK < gridCols
              ) {
                neighbors += g[newI][newK];
              }
            });
            if (neighbors < 2 || neighbors > 3) {
              copyGrid[i][k] = 0;
            } else if (neighbors === 3 && g[i][k] === 0) {
              copyGrid[i][k] = 1;
            }
          }
        }
      });
    });
    setTimeout(() => {
      setGeneration(generationRef.current + 1);
      runSimulation();
    }, speedRef.current);
  }, []);


  return(
    
    <div className="grid-wrapper">
      
      <div className="grid-map">
      The grid
            


            </div>
            
    </div>
    
  )





}

export default Grid;
