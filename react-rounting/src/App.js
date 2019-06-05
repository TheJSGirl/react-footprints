import React, {Component} from 'react';
import './App.css';
import {Route} from 'react-router-dom';

import Dog from './components/Dog/Dog';
import Contact from './components/Contact/Contact';
import About from './components/About/About';

class App extends Component {


  render() {
    return (
      <div className="App">
        <Route path="/dog" component={Dog}/>
        <Route path="/" component={About}/>
        <Route path="/contact" component={Contact}/>
    </div>
    )
  }
}

export default App;
