import React, {Component} from 'react';
import './App.css';
import './Clicker.css';

class Clicker extends Component {

    constructor(props) {
        super(props)
        this.state = {
            num : 1
        }
    }

    handleEvent = () => {
        const randomNumber = Math.floor(Math.random()*10)+1;
        this.setState({num:randomNumber});
    }

    render() {
        return (<div className="Clicker">
                    <div className="Clicker-div">
                    <h1>Number is {this.state.num} </h1> &nbsp;&nbsp;&nbsp;&nbsp;
                    {this.state.num === 7 ? <h2 className="Clicker-win">You Win!</h2> : <button className="Clicker-btn" onClick = {this.handleEvent}>Random Number</button>}
                    </div>
                </div>)
    }
    
}

export default Clicker;