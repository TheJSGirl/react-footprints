import React, {Component} from 'react';
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

    // create(newExpense) {
    //     this.setState({
    //         expenses:[...this.state.expenses, newExpense]
    //     });
    // }

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
        const expenses = this.props.list && 
        this.props.list.map(e =><Expense data={{...e.expenses}} key={{...e.expenses.id }} id={{...e.expenses.id }}/>)
        // remove={() => this.remove(e.id)} updated={this.updatedTask}
        this.props.list.map(e => console.log("props---------", {...e.expenses}));
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

// export default ExpenseList;
export default connect(mapStateToProps)(ExpenseList);