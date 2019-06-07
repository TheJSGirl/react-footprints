import React, {Component} from 'react';
import './App.css';
import {Route, Switch, NavLink} from 'react-router-dom';

import Dog from './components/Dog/Dog';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Animal from './components/Animal/Animal';

class App extends Component {

  render() {
    return (
      <div className="App">
        <nav className="App-nav"> 
          <NavLink exact activeClassName="active-link" to="/">About</NavLink>
          <NavLink exact activeClassName="active-link" to="/contact">Contact</NavLink>
          <NavLink exact activeClassName="active-link" to="/dog">Dog</NavLink>
          {/* <NavLink exact activeClassName="active-link" to="/animal">Animal</NavLink> */}
          <NavLink exact activeClassName="active-link" to="/catanimal/:cat/doganimal/:dog">Animal</NavLink>
        </nav>
        <Switch>
          <Route exact path="/" component={() => <About name="Akriti"/>}/>
          <Route exact path="/dog/:name" render={(routeProp) => <Dog name={routeProp.match.params.name} />}/>
          <Route exact path="/contact" render={() => <Contact country="india"/>}/>
          {/* <Route exact path="/animal/:name" render={(routeProp) => <Animal  {...routeProp}/>}/> */}
          <Route exact path="/catanimal/:cat/doganimal/:dog" render={(routeProp) => <Animal  {...routeProp}/>}/>
        </Switch>
    </div>
    )
  }
}

export default App;
