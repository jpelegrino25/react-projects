import CartContext from "./cart-context";
import { useReducer } from "react";

const CartProvider = (props) => {
  const defaultCartState = {
    items: [],
    totalAmount: 0,
  };

  const cartReducer = (state, action) => {
    if (action.type === "ADD") {
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;

      const itemExistingId = state.items.findIndex(
        (item) => item.id === action.item.id
      );

      const cartExistingItem = state.items[itemExistingId];
      let updatedItems;

      if (cartExistingItem) {
        const updatedItem = {
          ...cartExistingItem,
          amount: cartExistingItem.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[itemExistingId] = updatedItem;
      } else {
        updatedItems = [...state.items, action.item];
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }

    if (action.type === "REMOVE") {
      const itemExistingId = state.items.findIndex(
        (item) => item.id === action.id
      );

      const cartExistingItem = state.items[itemExistingId];
      const updateTotalAmount = state.totalAmount - cartExistingItem.price;
      let updatedItems;
      if (cartExistingItem.amount === 1) {
        updatedItems = state.items.filter((item) => item.id !== action.id);
      } else {
        const updatedItem = {
          ...cartExistingItem,
          amount: cartExistingItem.amount - 1,
        };
        updatedItems = [...state.items];
        updatedItems[itemExistingId] = updatedItem;
      }

      return {
        items: updatedItems,
        totalAmount: updateTotalAmount,
      };
    }

    return defaultCartState;
  };

  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
