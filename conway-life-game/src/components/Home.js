import React from "react";
import { Link } from "react-router-dom";
import HomeStyle from "./styles/HomeStyle";

const Home = () => {
  return (
    <div className="home-wrapper">
      <HomeStyle>
        <h1>Fun and Games</h1>
        <div className="intro">
          <p>
            As an early-career dev in the full-stack program at Lambda School,
            I've been going nonstop learning how to code for the past year. 
          </p>
          <p>
            In order to keep building on the concepts I've learned (and remember them), I created a bunch of fun little games.
          </p>
          <p>
            This page started off as the home of my Conway's Game of Life, but I decided to make it a central hub of any game I'm building from here on out. I've got the most experience with JavaScript and Python, so that's what you'll be seeing the most of. I hope you enjoy!
          </p>
          <p>&mdash; @SoosheBot</p>
        </div>
        <div className="home-body">
          <h2><Link to="/conway">Conway's JavaScript-y Game of Life</Link></h2><br /><br />
          <h2><a href="https://www.github.com/" target="_blank" rel="noopener noreferrer">
          A Fast Fibonacci Python Hash
          </a></h2>
        </div>
        <sub className="footer">
          I'm a developer, whee (GitHub):{" "}
          <a href="https://www.github.com/sooshebot" target="_blank" rel="noopener noreferrer">
            @SoosheBot
          </a>
        </sub>
      </HomeStyle>
    </div>
  );
};

export default Home;
