import logo from "./logo.svg";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState, useRef } from "react";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
  const [adding, setAdding] = useState(false);
  const expensesRef = useRef();
  const handlerAddExpense = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
    console.log(expense);
    console.log(expensesRef.current);
  };

  const changeAdding = (isAdding) => {
    const addingValue = !isAdding ? isAdding : true;
    setAdding(addingValue);
  };

  let elementToRender = (
    <div>
      <div>
        <button onClick={changeAdding}>Add New Expense</button>
      </div>
    </div>
  );

  if (adding) {
    elementToRender = (
      <NewExpense addExpense={handlerAddExpense} changeAdding={changeAdding} />
    );
  }

  return (
    <div className="App">
      {elementToRender}
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
