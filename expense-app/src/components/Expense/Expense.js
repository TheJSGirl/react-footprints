import React, {Component} from 'react';
import Remove from '../Delete/Delete';
import Edit from '../Edit/Edit';
import { remove, updatedTask } from '../../actions/settings';

import './Expense.css'
import { connect } from 'react-redux';


class Expense extends Component {

    static defaultProps = {
            text: "Gave 30k"
    }

    render() {
        const { text, id } = this.props.data;
        return (
            <div className="Expense">
           <p >{text}</p>

           <Remove id={id}/>
           <Edit text={text} id={id}/>
         </div>

        )
    }
}


export default connect(null, {remove, updatedTask})(Expense);
