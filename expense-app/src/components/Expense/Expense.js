import React, {Component} from 'react';
import Remove from '../Delete/Delete';
import './Expense.css'

class Expense extends Component {

    static defaultProps = {
            text: "Gave 30k"
    }

    render() {
        return(<div className="Expense">
            <p >{this.props.text}</p>
            <Remove remove={this.props.remove} />
        </div>)
    }
}

export default Expense;