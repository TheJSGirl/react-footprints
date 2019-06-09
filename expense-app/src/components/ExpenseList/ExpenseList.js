import React, {Component} from 'react';
import Expense from '../Expense/Expense';
import ExpenseForm from '../Form/Form';
import './ExpenseList.css';

class ExpenseList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            expenses: [],
        }
        this.create = this.create.bind(this);
    }

    create(newExpense) {
        this.setState({
            expenses:[...this.state.expenses, newExpense]
        });
    }

    remove(id) {
        this.setState({
            expenses: this.state.expenses.filter(e => e.id !== id)
        })
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
        const expenses = this.state.expenses && 
        this.state.expenses.map(e =><Expense text={e.text} key={e.id} id={e.id} 
            remove={() => this.remove(e.id)} updated={this.updatedTask}/>)
        return(
            <div className="ExpenseList">
                <h2>All Expenses</h2>
                {expenses}
                <ExpenseForm  create = {this.create}/>
            </div>
        )
    }
}

export default ExpenseList;