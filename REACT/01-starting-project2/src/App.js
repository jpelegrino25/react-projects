import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-contex";

function App() {
  const ctx = useContext(AuthContext);
  return (
    <>
      <MainHeader />
      <main>
        {!ctx.isLoggIn && <Login />}
        {ctx.isLoggIn && <Home />}
      </main>
    </>
  );
}

export default App;
