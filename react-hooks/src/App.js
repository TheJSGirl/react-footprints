import React from 'react';
import './App.css';
import Counter from './components/counter';
import Toggler from './components/toggler';
import Clicker from './components/clicker';
import ShowMovies from './components/showMovies';

function App() {
  return (
    <div className="App">
      <Counter />
      <Toggler />
      <Clicker />
      <ShowMovies />
    </div>
  );
}

export default App;
