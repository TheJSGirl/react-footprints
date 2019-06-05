import React, {Component} from 'react';
import './App.css';
import Dog from './components/Dog/Dog';
import Contact from './components/Contact/Contact';
import About from './components/About/About';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'about'
    }
   
  }
  changePage(newPage) {
    this.setState({page: newPage});

  }
  renderPage() {
    if(this.state.page === 'about') return <About />
    if(this.state.page === 'dog') return <Dog />
    if(this.state.page === 'contact') return <Contact />
  }
  render() {

    return (
      <div className="App">
      <nav>
        <a onClick={() => this.changePage("about")}>About</a>&nbsp;&nbsp;
        <a onClick={() => this.changePage("dog")}>Dog</a>&nbsp;&nbsp;
        <a onClick={() => this.changePage("contact")}>Contact</a>&nbsp;&nbsp;
      </nav>
      {this.renderPage()}
    </div>
    )
  }
}

export default App;
