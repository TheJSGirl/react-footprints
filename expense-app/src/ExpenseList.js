import React, {Component} from 'react';
import Expense from './Expense';
import ExpenseForm from './Form';

class ExpenseList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            expenses: []
        }
        this.create = this.create.bind(this);
    }

    create(newExpense) {
        this.setState({
            expenses:[...this.state.expenses, newExpense]
        });
    }

    render() {
        const expenses = this.state.expenses && this.state.expenses.map(e =><Expense text={e.text} key={e.id}/>)
        return(
            <div>
                <h2>All Expenses</h2>
                {expenses}
                <ExpenseForm  create = {this.create}/>
            </div>
        )
    }
}

export default ExpenseList;