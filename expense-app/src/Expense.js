import React, {Component} from 'react';

class Expense extends Component {

    static defaultProps = {
            text: "Gave 30k"
    }

    render() {
        console.log(this.props)
        return(<div>
            <p>{this.props.text}</p>
        </div>)
    }
}

export default Expense;