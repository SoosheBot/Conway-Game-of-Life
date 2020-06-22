// import React, { useState, useCallback, useRef } from "react";

// const rows = 20;
// const cols = 20;

// const Grid = () => {
//   const [grid, setGrid] = useState(() => {
//     const griddy = [];
//     for (let i = 0; i < rows; i++) {
//       griddy.push(Array.from(Array(cols), () => 0));
//     }
//     return griddy;
//   });

//   return (
//     <div>
//       {grid.map((row, i) => (
//         row.map((col, j) => {
//           return (
//             <div
//               key={`${i}-${j}`}
//               onClick={() => {
//                 const newGrid = grid.slice(0);
//                 //with this code we can toggle the colored squares on and off
//                 newGrid[i][j] = grid[i][j] ? 0 : 1;
//                 setGrid(newGrid);
//               }}
//               style={{
//                 width: 20,
//                 height: 20,
//                 backgroundColor: grid[i][j] ? "purple" : undefined,
//                 border: "solid 1px black",
//               }}
//             />
//           );
//         })
//       )}
//     </div>
//   );
// };

// export default Grid;
