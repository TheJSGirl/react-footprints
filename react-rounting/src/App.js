import React, {Component} from 'react';
import './App.css';
import {Route, Switch, NavLink} from 'react-router-dom';

import Dog from './components/Dog/Dog';
import Contact from './components/Contact/Contact';
import About from './components/About/About';

class App extends Component {


  render() {
    return (
      <div className="App">
        <nav className="App-nav"> 
          <NavLink exact activeLink="active-link" to="/">About</NavLink>
          <NavLink exact activeLink="active-link" to="/contact">Contact</NavLink>
          <NavLink exact activeLink="active-link" to="/dog">Dog</NavLink>
        </nav>
        <Switch>
          <Route exact path="/" component={() => <About name="Akriti"/>}/>
          <Route exact path="/dog" component={Dog}/>
          <Route exact path="/contact" render={() => <Contact country="india"/>}/>
        </Switch>
    </div>
    )
  }
}

export default App;
