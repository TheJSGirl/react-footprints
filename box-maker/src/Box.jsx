import React, {Component} from 'react'

class Box extends Component {
    static defaultProps = {
        height: 10,
        width: 15,
        color: 'red'
    }
    constructor(props) {
        super(props);
    }


    render() {
        return(
            <div style={{
                height:`${this.props.height}em`,
                width: `${this.props.width}em`,
                background: this.props.color
            }}>
                <button onClick={this.props.removeBox}>X</button>
            </div>
        )
    }
}

export default Box;