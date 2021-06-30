import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
import CartItem from "./CartItem";
const Cart = (props) => {
  const ctx = useContext(CartContext);

  const removeHandler = (id) => {
    ctx.removeItem(id);
  };
  const addHandler = (item) => {
    ctx.addItem(item);
  };
  const cartItems = (
    <ul>
      {ctx.items.map((cartItem) => (
        <CartItem
          key={cartItem.id}
          {...cartItem}
          onRemove={removeHandler.bind(null, cartItem.id)}
          onAdd={addHandler.bind(null, cartItem)}
        />
      ))}
    </ul>
  );

  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;
  const hasItems = ctx.items.length > 0;
  return (
    <Modal onClose={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
