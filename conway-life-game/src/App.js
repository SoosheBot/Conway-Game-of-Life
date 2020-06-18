import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Grid from './components/Grid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <Grid />
    </div>
  );
}

export default App;
