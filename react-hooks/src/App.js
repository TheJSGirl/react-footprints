import React from 'react';
import './App.css';
import Counter from './components/counter';
import Toggler from './components/toggler';
import Form from './components/form';
import CustomForm from './components/customForm';
import Clicker from './components/clicker';

function App() {
  return (
    <div className="App">
      <Counter />
      <Toggler />
      <Form />
      <CustomForm />
      <Clicker />
    </div>
  );
}

export default App;
