import React, { useState } from "react";
import CollapsiblePanel from "./CollapsiblePanel";
import BlogStyle from "./styles/BlogStyle";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

//This blog is brought to you by the Letter Q, the number 9, and inspiration from the brilliant code of Nithin Hampi. See more of Nithin's work at https://github.com/nithinthampi

function Blog() {
  const text1 =
    "When I first started this project, I had a few options to choose from, like implementing the project in JavaScript and Canvas, TypeScript, etc. After looking around, I decided I needed to brush up my vanilla JavaScript, and that I could easily implement the project with a few state hooks and a npm library called immer. Immer creates the next immutable state tree by simply modifying the current tree. Sounds great, right? Unfortunately, the immer library did all of the work that a double buffer could do, so, when I was challenged to implement a double buffer from scratch, immer was no longer a viable option.";
  const text2 =
    "I briefly considered trying Canvas again, but found the logic little too painfully confusing to pick up, and at this point had basically got most of my code written out. It was just a matter of figuring out where/how to use a double buffer";
  const text3 =
    "Picture this: You have a rotating stage with two sides, and every time there's a new scene, the stage rotates from SideA to SideB, then back to SideA, then back to SideB. When the actors are all on SideA, the stage crew works frantically and seeeecretly on SideB to set up the stage for the next scene. When the stage rotates to SideB, the stage crew work frantically and seeeecretly to get SideA ready for the next scene. That's it. That's what the double buffer is. It is the stage crew working in the background to set up the next scene. This is super helpful for things like video games, where the pixels of the scene render seamlessly instead of you having to watch every pixel build up to the full image. For Conway's Game, it means the cellular automata crawls across the screen smoothly and without any weird jerkiness to the rendering. I set up the double buffer in a function that held an if/else statement. The if/else basically said 'if we're on SideA, setup state, etc for SideB, else, you're probably on SideB so set state for SideA.'";
  const text4 =
    "After setting up a game rules function (where I set up the rules of how the cells can move, and *where* they can move), I incorporated my double buffer a couple of places. 1. Into the return statement (where I mapped through the grid to display the active/alive cells when the simulation started running) and 2. Into the RANDOMbutton's onClick.";
  const text5 =
    "Speaking of simulations, everything I did above worked for creating an automaton YAY! But it only moved one generation BOO! I was happy to see it working, but I wanted to build a feature to have the automata travel automatically. In order to do that, I created a useEffect hook with a setInterval to flipflop back and forth between the two. Since it. Finally, in order to control the speed of the animation, I set up a useRef inside the useEffect, and tied different buttons to different speeds in the function's return.";
  const text6 =
    "Conway's Game of Life is is the best-known example of cellular automation. It is a zero-player game, meaning, once a player enters an initial input, the game runs itself by evolving. Cellular automata are a class of mathematical objects that has a space of cells, and a set of allowed states for each of cell.";
  const [collapse, setCollapse] = useState(true);
  const [expand, setExpand] = useState("Read All");
  const [icon, setIcon] = useState("fa fa-chevron-right");
  const collapseAll = () => {
    setCollapse(!collapse);
    setIcon((state) => {
      return state === "fa fa-chevron-right"
        ? "fa fa-chevron-down"
        : "fa fa-chevron-right";
    });
    setExpand((state) => {
      return state === "Read All" ? "Read Less" : "Read All";
    });
  };
  return (
    <BlogStyle>
      {/* Expand/Collapse All */}
      <div className="blog-button-box">
        <h3 className="blog-title">
          Building the Game of Life &nbsp;&nbsp;{" "}
          <button type="button" className="blog-button" onClick={collapseAll}>
            <i className={icon} /> {expand}
          </button>
        </h3>
        <CollapsiblePanel expand="The mission" collapse={collapse}>
          <span>{text1}</span>
        </CollapsiblePanel>
        <CollapsiblePanel expand="What happened next?" collapse={collapse}>
          <span>{text2}</span>
        </CollapsiblePanel>
        <CollapsiblePanel
          expand="What is a double buffer anyway?"
          collapse={collapse}
        >
          <span>{text3}</span>
        </CollapsiblePanel>
        <CollapsiblePanel expand="Rules of the road" collapse={collapse}>
          <span>{text4}</span>
        </CollapsiblePanel>
        <CollapsiblePanel
          expand="Let it go, let it go go go"
          collapse={collapse}
        >
          <span>{text5}</span>
        </CollapsiblePanel>
        <CollapsiblePanel expand="Field notes" collapse={collapse}>
          <span>{text6}</span>
        </CollapsiblePanel>
      </div>
    </BlogStyle>
  );
}

export default Blog;
