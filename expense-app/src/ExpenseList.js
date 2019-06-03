import React, {Component} from 'react';
import Expense from './Expense';

class ExpenseList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            expenses: [
                {text: "dummy data"},
                {text: "dummy data"},
                {text: "dummy data"},
                {text: "dummy data"}
            ]
        }
    }

    render() {
        const expenses = this.state.expenses && this.state.expenses.map((e, i) =><Expense text={e.text} key={i}/>)
        return(
            <div>
                <h2>All Expenses</h2>
                {expenses}
            </div>
        )
    }
}

export default ExpenseList;