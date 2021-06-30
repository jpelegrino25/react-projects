import React, { useContext } from "react";
import classes from "./MealsItem.module.css";
import MealsItemForm from "./MealsItemFrom";
import CartContext from "../../store/cart-context";

const MealsItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  const cxt = useContext(CartContext);

  const addItemHandler = (amount) => {
    cxt.addItem({
      amount: amount,
      id: props.id,
      name: props.name,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <div>
          <h3>{props.name}</h3>
        </div>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealsItemForm id={props.id} onAddItem={addItemHandler} />
      </div>
    </li>
  );
};

export default MealsItem;
