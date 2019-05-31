import React from 'react';
import './App.css';
import Lottery from './Lottery';

function App() {
  return (
    <div className="App">
        <Lottery/>
        <Lottery maxNum={10} title="Mini Daily" maxBalls={15} />
    </div>
  );
}

export default App;
