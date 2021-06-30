import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [isCartShow, setIsCartShow] = useState(false);

  const showCartHandle = () => {
    setIsCartShow(true);
  };

  const hideCartHandle = () => {
    setIsCartShow(false);
  };
  return (
    <CartProvider>
      {isCartShow && <Cart onHideCart={hideCartHandle} />}
      <Header onShowCart={showCartHandle} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
