import React, {Component} from 'react';
import Ball from './Ball';
import './Lottery.css';

class Lottery extends Component {
    static defaultProps = {
        title: 'Lotto',
        maxBalls: 6,
        maxNum: 40
    }
    constructor(props) {
        super(props);
        this.state = {
            nums: Array.from({ length: this.props.maxBalls })
        };
    }

    generate = () => {
        this.setState(currSate => ({
            nums: currSate.nums.map(n => {
                return Math.floor(Math.random() * this.props.maxNum) + 1;
            })
        }))
    }

    handleClick = () => {
        this.generate();
    }

    render() {
        return (
            <section className="Lottery">
                <h1 className="Lottery-heading">{this.props.title}</h1>
                <div className="Lottery-balls"> 
                    {this.state.nums.map(b => <Ball nums={b} />)}
                </div>  
                <button className="Lottery-button" onClick={this.handleClick}>Generate</button>          
            </section>
        )
    }
}

export default Lottery;