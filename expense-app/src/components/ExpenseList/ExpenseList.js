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
        this.edit = this.edit.bind(this);
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
    edit() {
        this.setState({isEdiditng: true})
        return (
            <div>
                <form>
                    <input type="text"/>
                </form>
            </div>
        )
    }

    render() {
        const expenses = this.state.expenses && this.state.expenses.map(e =><Expense text={e.text} key={e.id} remove={() => this.remove(e.id)}/>)
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