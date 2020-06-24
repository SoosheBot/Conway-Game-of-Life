import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Grid from "./components/Grid";
// import ReactTextCollapse from "react-text-collapse";
import Blog from "./components/Blog";

const App = () => {
  // const TEXT_COLLAPSE = {
  //   collapse: false,
  //   collapseText: 'Read More >>',
  //   expandText: 'show less...',
  //   minHeight: 70,
  //   maxHeight: 180,
  //   textStyle: {
  //     color: 'blue',
  //     fontSize: '20px'
  //   }
  // }
  
  return (
    <div className="wrapper">
      <div className="header">
        <Nav />
      </div>
      {/* <ReactTextCollapse options={TEXT_COLLAPSE} className="body">
      <div className="body">
        <h2>Building Conway's Game of Life</h2>
        <p>When I first started this project, I had a few options to choose from, like implementing the project in JavaScript and Canvas, TypeScript, etc. After looking around, I decided I needed to brush up my vanilla JavaScript, and that I could easily implement the project with a few state hooks and a npm library called immer. Immer creates the next immutable state tree by simply modifying the current tree. Sounds great, right? Unfortunately, the immer library did all of the work that a double buffer could do, so, when I was challenged to implement a double buffer from scratch, immer was no longer a viable option.</p>
        <p>What next? I briefly considered Canvas again, but found it a little too painfully confusing to pick up, and at this point had basically got most of my code written out. It was just a matter of figuring out where/how to use a double buffer.</p>
        <h4>What is a double buffer anyway?</h4>
        <p>There are a whole pile of beautiful explanations out there that I am 100% not going to quote here. Instead, you get my version!</p>
        <p>So, picture this: You have a rotating stage with two sides, and every time there's a new scene, the stage rotates from SideA to SideB, then back to SideA, then back to SideB.</p>
        <p>When the actors are all on SideA, the stage crew works frantically and seeeecretly on SideB to set up the stage for the next scene. When the stage rotates to SideB, the stage crew work frantically and seeeecretly to get SideA ready for the next scene.</p>
        <p>That's what the double buffer is. It is the stage crew working in the background to set up the next scene. It is super helpful for things like video games, where the pixels of the scene around you render without any weird lagging one-by-one effect. For Conway's Game, it means the cellular automata crawls across the screen smoothly and without any weird jerkiness to the rendering.</p>
        <p>I set up the double buffer in a function that held an if/else statement. The if/else basically said "if we're on SideA, setup state, etc for SideB, else, you're probably on SideB so set state for SideA.</p>
        <p>After setting up a game rules function (where I set up the rules of how the cells can move, and *where* they can move), I incorporated my double buffer a couple of places. 1. Into the return statement (where I mapped through the grid to display the active/alive cells when the simulation started running) and 2. Into the <strong>RANDOM</strong> button's onClick.</p>
        <p>Speaking of simulations, everything I did above worked for creating an automaton YAY! But it only moved one generation BOO! I was happy to see it working, but I wanted to build a feature to have the automata travel automatically. In order to do that, I created a useEffect hook with a setInterval to flipflop back and forth between the two. Since it. Finally, in order to control the speed of the animation, I set up a useRef inside the useEffect, and tied different buttons to different speeds in the function's return.</p>
        </div>
        </ReactTextCollapse> */}
        <Blog />
      <div className="grid-bod"><Grid /></div>
      
    </div>
  );
};

export default App;
