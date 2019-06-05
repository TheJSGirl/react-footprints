import React from 'react';
import './App.css';
import Dog from './components/Dog/Dog';
import Contact from './components/Contact/Contact';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Dog />
      <Contact />
      <About />
    </div>
  );
}

export default App;
