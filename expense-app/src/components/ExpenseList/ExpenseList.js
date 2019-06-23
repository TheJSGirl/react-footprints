import React, {Component} from 'react';
import uuid from 'uuid';
import Expense from '../Expense/Expense';
import { connect } from 'react-redux';
import ExpenseForm from '../Form/Form';
import './ExpenseList.css';

class ExpenseList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            expenses: [],
        }
        // this.create = this.create.bind(this);
        // this.updatedTask = this.updatedTask.bind(this);
    }

    // updatedTask(id, updatedText) {
    //     const updatedTexts = this.state.expenses.map((expense) => {
    //         if(expense.id === id) {
    //             return {...expense, text: updatedText}
    //         }
    //         return expense;
    //     });
    //     this.setState({ expenses: updatedTexts })
    // }
  

    render() {
        const expenses = this.props.data.expenses && 
        this.props.data.expenses.map((e) =>{
        return <Expense data={e} key={e.id}
         id={e.id}/>
         });
        return(
            <div className="ExpenseList">
                <h2>All Expenses</h2>
                {expenses}
                <ExpenseForm />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
  }


export default connect(mapStateToProps)(ExpenseList);