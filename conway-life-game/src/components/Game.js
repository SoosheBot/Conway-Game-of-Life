import React, { useState } from "react";
import "./Game-style.css";

const ModalRules = ({ children, show, setShow }) => {
  const content = show && (
    <div className="overlay">
      <div className="modal">
        <button
          className="close-modal"
          type="button"
          onClick={() => setShow(false)}
        >
          Close
        </button>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );

  return content;
};

function Game() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1>Conway's Game of Life</h1>
      <button type="button" onClick={() => setShow(true)}>
        Show Rules
      </button>
      <ModalRules show={show} setShow={setShow}>
        <div>
          <h3>The Rules of the Game</h3>
          <ol>
            <li>
              Any live cell with fewer than two live neighbors dies of underpopulation.
            </li>
            <li>
              Any live cell with two or three live neighbors lives on to the next generation.
            </li>
            <li>
              Any live cell with more than three live neighbors dies of overcrowding.
            </li>
            <li>
              Any dead cell with exactly three live neighbors becomes a live cell due to reproduction.
            </li>
          </ol>
          <sup>
            Read more on Wikipedia: <a href="http://en.wikipedia.org/wiki/Conway's_Game_of_Life#Rules">
              Conway's Game of Life
            </a>
          </sup>
        </div>
      </ModalRules>
    </div>
  );
}

export default Game;
