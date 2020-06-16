# Cellular Automata and Conway's "Game of Life"
Welcome to John Conway's "Game of Life"! This is a computer science classic from 1970, a program that simulates a cellular automaton (plural automata). It has connections to all kinds of different aspects of computer science and nature

*Visit the live project here:* https://conway-life-game.herokuapp.com/


## What is it?
This isn't a typical interactive computer game. Conway's "Game of Life" is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input from a player. One interacts with the Game of Life by creating an initial configuration (pattern) and observing how it evolves, or, for advanced “players”, by creating patterns with particular properties

## How does it work?
(From Wikipedia): 
The universe of the Game of Life is an infinite 2-D orthogonal grid of square cells, each of which is in one of two possible states, live or dead

Every cell interacts with its eight neighbours, which are the cells that are directly horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

* Any live cell with fewer than two live neighbours dies (referred to as underpopulation or exposure)
* Any live cell with more than three live neighbours dies (referred to as overpopulation or overcrowding)
* Any live cell with two or three live neighbours lives, unchanged, to the next generation
* Any dead cell with exactly three live neighbours will come to life

The initial pattern constitutes the 'seed' of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed — births and deaths happen simultaneously, and the discrete moment at which this happens is sometimes called a tick. (In other words, each generation is a pure function of the one before.) The rules continue to be applied repeatedly to create further generations.


## Tasks
### Basic project features
- [ ] Display includes a text area that shows the current generation of cells being displayed
- [ ] Display includes a grid of cells, at least 25x25, that can be toggled to be alive or dead
- [ ] Display includes working buttons that start / stop the animation and clear the grid
- [ ] Algorithm to generate new generations of cells correctly implemented
- [ ] At least 3 features from Custom Features section successfully implemented
- [ ] Application includes a section outlining the rules to Conway's "Game of Life"

### Custom features (Implement at least 3)
- [ ] Create a few sample cell configurations that users can load and run
- [ ] Add an option that creates a random cell configuration that users can run
- [ ] Add additional cell properties, like color or size, and incorporate them into your visualization
- [ ] Allow users to specify the speed of the simulation
- [ ] Provide functionality to manually step through the simulation one generation at a time, as opposed to animating automatically
- [ ] Allow users to change the dimension of the grid being displayed
- [ ] Given a specific generation, calculate the configuration of cells at that point in time, and jump to that state, bypassing animation (i.e. skip ahead n generations)

### Stretch
- [ ] Implement 2 or more additional custom features
- [x] Deploy your app to a hosting service
- [ ] Write a how-to guide or blog post that walks readers through the work you did to implement your project
- [ ] Expand your simulation into the third dimension. Google 3D Conways Life. Google for how to do 3D stuff on your platform. Web users might check out 3D-ThreeJS, and iOS might look at SceneKit.
- [ ] Explore alternate algorithms for finding the nth generation, such as Hashlife


## Tools
* NodeJS
* React
* Javascript
* Canvas
* HTML/CSS
* Heroku


## Quick Start -- React App + Heroku (Mac)
```
1. Create App: npx create-react-app $APP_NAME (replace $APP_NAME with your app's name)
2. Enter App Directory: cd $APP_NAME
3. Login to Heroku: heroku login
4. Create Heroku App: heroku create $APP_NAME --buildpack mars/create-react-app (replace $APP_NAME with your app's name)
4. Deploy: git push heroku master
5. Open: heroku open
```


