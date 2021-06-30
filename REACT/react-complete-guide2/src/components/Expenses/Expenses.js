import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import FileterItem from "../NewExpense/FileterItem";
import FilterItem from "../NewExpense/FileterItem";
import React, { useState } from "react";
import ExpenseList from "./ExpenseList";
function Expenses(props) {
  const [yearSelected, setYearSelected] = useState("200");
  const { expenses } = props;

  const handleSelectChange = (year) => {
    setYearSelected(year);
  };

  const filterExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === yearSelected;
  });

  return (
    <Card className="expenses">
      <FilterItem selected={yearSelected} onSelectChange={handleSelectChange} />
      <li>
        <ExpenseList items={filterExpenses} />
      </li>
    </Card>
  );
}

export default Expenses;
