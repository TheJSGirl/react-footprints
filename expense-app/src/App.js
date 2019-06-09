import React from 'react';
import './App.css';
import ExpenseList from './components/ExpenseList/ExpenseList';
// import Expense from './Expense';

function App() {
  return (
    <div className="App">
      <h1>Add Your Expenses</h1>
      <ExpenseList/>

    </div>
  );
}

export default App;
