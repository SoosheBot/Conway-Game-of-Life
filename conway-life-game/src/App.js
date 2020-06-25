import React from "react";
import Nav from "./components/Nav";
import Grid from "./components/Grid";
import Blog from "./components/Blog";

const App = () => {
  return (
    <div className="wrapper">
      <div className="header">
        <Nav />
      </div>
      <Blog />
      <Grid />
    </div>
  );
};

export default App;
