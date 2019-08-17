import React from 'react';
import './App.css';
import Counter from './components/counter';
import Toggler from './components/toggler';
import Form from './components/form';

function App() {
  return (
    <div className="App">
      <Counter />
      <Toggler />
      <Form />
    </div>
  );
}

export default App;
