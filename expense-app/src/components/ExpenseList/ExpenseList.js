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
        this.updatedTask = this.updatedTask.bind(this);
    }

    updatedTask(id, updatedText) {
        const updatedTexts = this.state.expenses.map((expense) => {
            if(expense.id === id) {
                return {...expense, text: updatedText}
            }
            return expense;
        });
        this.setState({ expenses: updatedTexts })
    }
  

    render() {
        const expenses = this.props.list && 
        this.props.list.map((e) =>{
            const data ={ ...e.expenses};
        return <Expense data={data} key={data.id}
         id={data.id} updated={this.updatedTask}/>

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
    return {
        list: state.list
    };
  }


export default connect(mapStateToProps)(ExpenseList);