import React, {Component} from 'react';
import Remove from '../Delete/Delete';
import Edit from '../Edit/Edit';
import './Expense.css'

class Expense extends Component {

    static defaultProps = {
            text: "Gave 30k"
    }

    render() {
        console.log("-------------", ...this.props)
        return (
            <div className="Expense">
           <p >{this.props.text}</p>
            <Remove remove={this.props.remove}/>
           <Edit text={this.props.text} id={this.props.id} updated= {this.props.updated}/>
         </div>

        )
    }
}

export default Expense;