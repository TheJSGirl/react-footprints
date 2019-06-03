import React, {Component} from 'react';
import './Box.css';

class Box extends Component {
    static defaultProps = {
        height: 10,
        width: 15,
        color: 'red'
    }
  
    render() {
        return(
            <div   className="Box">
                <div style={{
                height:`${this.props.height}em`,
                width: `${this.props.width}em`,
                background: this.props.color
                }}>
                <button onClick={this.props.removeBox}>X</button>
                </div>
            </div>
        )
    }
}

export default Box;