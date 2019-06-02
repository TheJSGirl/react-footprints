import React, {Component} from 'react'

class Box extends Component {
    static defaultProps = {
        height: 10,
        width: 15,
        color: 'red'
    }
    render() {
        return(
            <div style={{
                height:`${this.props.height}em`,
                width: `${this.props.width}em`,
                background: this.props.color
            }}>

            </div>
        )
    }
}

export default Box;