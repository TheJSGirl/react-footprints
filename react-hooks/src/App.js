import React from 'react';
import './App.css';
import Counter from './components/counter';
import Toggler from './components/toggler';

function App() {
  return (
    <div className="App">
      <Counter />
      <Toggler />
    </div>
  );
}

export default App;
