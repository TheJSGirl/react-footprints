import React, {Component} from 'react';
import './App.css';
import {Route, Switch, Link} from 'react-router-dom';

import Dog from './components/Dog/Dog';
import Contact from './components/Contact/Contact';
import About from './components/About/About';

class App extends Component {


  render() {
    return (
      <div className="App">
        <nav className="App-nav"> 
          <Link to="/">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/dog">Dog</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={About}/>
          <Route exact path="/dog" component={Dog}/>
          <Route exact path="/contact" component={Contact}/>
        </Switch>
    </div>
    )
  }
}

export default App;
