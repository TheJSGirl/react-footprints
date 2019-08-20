import React from 'react';
import './App.css';
import Counter from './components/counter';
import Toggler from './components/toggler';
import Clicker from './components/clicker';

function App() {
  return (
    <div className="App">
      <Counter />
      <Toggler />
      <Clicker />
    </div>
  );
}

export default App;
