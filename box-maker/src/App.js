import React from 'react';
import './App.css';
import BoxForm from './BoxForm';
import Box from './Box';

function App() {
  return (
    <div className="App">
      <BoxForm/>
      <Box height={2} color="black" width={2} />
    </div>
  );
}

export default App;
