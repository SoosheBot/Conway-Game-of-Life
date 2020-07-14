import React from "react";
import {
  BrowserRouter as Router,
  Route, Link,
} from "react-router-dom";
// import ConwayNav from "./components/ConwayNav";
import Grid from "./components/Grid";
// import Blog from "./components/Blog";
import Home from "./components/Home";

const App = () => {
  return ( 
    <Router>
        <Route exact path="/" component={Home}/>
        <Route path="/conway" component={Grid} />
    </Router>
  );
};

export default App;
