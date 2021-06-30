import "./NewExpense.css";
import "./NewExpenseForm";
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {
  const handleSaveExpense = (enterEnxpense) => {
    const expenseData = {
      ...enterEnxpense,
      id: Math.random().toString(),
    };

    props.addExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <NewExpenseForm
        addExpense={handleSaveExpense}
        changeAdding={props.changeAdding}
      />
    </div>
  );
};

export default NewExpense;
