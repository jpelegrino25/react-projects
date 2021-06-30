import classes from "./MealsItemFrom.module.css";
import Input from "../UI/Input";
import { useRef, useState } from "react";
const MealsItemForm = (props) => {
  const cartAmoutRef = useRef();
  const [invalidAmount, setInvalidAmount] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    const enterAmount = cartAmoutRef.current.value;
    const enterAmountNumber = +enterAmount;

    if (
      enterAmount.trim().length === 0 ||
      enterAmountNumber < 1 ||
      enterAmountNumber > 5
    ) {
      setInvalidAmount(false);
      return;
    } else {
      setInvalidAmount(true);
      props.onAddItem(enterAmountNumber);
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={cartAmoutRef}
        label="Amount"
        input={{
          id: `amount_${props.id}`,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+Add</button>
      {!invalidAmount && <p>Invalid amount should be from 1 to 5</p>}
    </form>
  );
};

export default MealsItemForm;
