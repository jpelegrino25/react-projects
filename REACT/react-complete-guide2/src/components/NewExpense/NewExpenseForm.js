import React, { useState } from "react";
import "./NewExpenseForm.css";

const NewExpenseForm = (props) => {
  const [titleEnter, setTtitleEnter] = useState("");
  const [amountEnter, setAmountEnter] = useState("");
  const [dateEnter, setDateEnter] = useState("");

  const titleChangeHandler = (e) => {
    setTtitleEnter(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setAmountEnter(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setDateEnter(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const formInput = {
      title: titleEnter,
      amount: amountEnter,
      date: new Date(dateEnter),
    };

    props.addExpense(formInput);
    console.log(formInput);
    setTtitleEnter("");
    setAmountEnter("");
    setDateEnter("");
  };

  const cancelAddExpense = () => {
    props.changeAdding(false);
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value={titleEnter} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            onChange={amountChangeHandler}
            value={amountEnter}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="1969-01-01"
            onChange={dateChangeHandler}
            value={dateEnter}
            max="2022-01-01"
          />
        </div>
      </div>
      <div></div>
      <div className="new-expense__actions">
        <button onClick={cancelAddExpense}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default NewExpenseForm;
