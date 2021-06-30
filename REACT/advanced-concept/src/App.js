import React from "react";
import "./App.css";
import FragmentPage from "./components/accesibility/FragmentPage";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import TagPage from "./components/accesibility/TagPage";
import CustomerPage from "./components/customer/CustomerPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/fragment" component={FragmentPage} />
        <Route path="/tags" component={TagPage} />
        <Route path="/customer" component={CustomerPage} />
      </Switch>
    </div>
  );
}

export default App;
