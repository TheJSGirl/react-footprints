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
          <NavLink exact activeClassName="active-link" to="/">About</NavLink>
          <NavLink exact activeClassName="active-link" to="/contact">Contact</NavLink>
          <NavLink exact activeClassName="active-link" to="/dog">Dog</NavLink>
        </nav>
        <Switch>
          <Route exact path="/" component={() => <About name="Akriti"/>}/>
          <Route exact path="/dog/:name" render={(routeProp) => <Dog name={routeProp.match.params.name} />}/>
          <Route exact path="/contact" render={() => <Contact country="india"/>}/>
        </Switch>
    </div>
    )
  }
}

export default App;
