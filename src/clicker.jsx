import React, {Component} from 'react';
import './App.css';

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
        return (<div >
                    <h1>Number is {this.state.num} </h1>
                    {this.state.num === 7 && <h2>You Win!</h2> }
                    {this.state.num !== 7 && <button onClick = {this.handleEvent}>Random Number</button>}
                </div>)
    }
    
}

export default Clicker;