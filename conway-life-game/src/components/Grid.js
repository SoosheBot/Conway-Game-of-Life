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
  
};

export default Grid;
