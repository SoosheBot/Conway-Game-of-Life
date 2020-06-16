# Cellular Automata and Conway's "Game of Life"
Welcome to John Conway's "Game of Life"! This is a computer science classic from 1970, a program that simulates a cellular automaton (plural automata). It has connections to all kinds of different aspects of computer science and nature.
## What is it?
This isn't a typical interactive computer game. Conway's "Game of Life" is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input from a player. One interacts with the Game of Life by creating an initial configuration (pattern) and observing how it evolves, or, for advanced “players”, by creating patterns with particular properties. 
## How does it work?
(From Wikipedia)
The universe of the Game of Life is an infinite two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, live or dead. Every cell interacts with its eight neighbours, which are the cells that are directly horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

Any live cell with fewer than two live neighbours dies (referred to as underpopulation or exposure[1]).
Any live cell with more than three live neighbours dies (referred to as overpopulation or overcrowding).
Any live cell with two or three live neighbours lives, unchanged, to the next generation.
Any dead cell with exactly three live neighbours will come to life.
The initial pattern constitutes the 'seed' of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed — births and deaths happen simultaneously, and the discrete moment at which this happens is sometimes called a tick. (In other words, each generation is a pure function of the one before.) The rules continue to be applied repeatedly to create further generations.
## Tasks
## Tools

