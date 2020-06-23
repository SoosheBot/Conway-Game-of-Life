import React from "react";
import "./App.css";
// import Nav from "./components/Nav";
import Grid from "./components/Grid";
// import Simulation from './components/Simulation';


const App = () => {
  return (
    <div className="wrapper">
      {/* <div className="header">
        <Nav />
      </div> */}
      {/* <Simulation running={false}/> */}
      <Grid />
    </div>
  );
};

export default App;
