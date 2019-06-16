import React, {Component} from 'react';
import Remove from '../Delete/Delete';
import Edit from '../Edit/Edit';
import './Expense.css'
import { connect } from 'react-redux';


class Expense extends Component {

    static defaultProps = {
            text: "Gave 30k"
    }

    render() {
        const { text } = this.props.data[0];
        return (
            <div className="Expense">
           <p >{text}</p>
            {/* <Remove remove={this.props.remove}/>
           <Edit text={this.props.text} id={this.props.id} updated= {this.props.updated}/> */}
         </div>

        )
    }
}


export default connect(null)(Expense);
