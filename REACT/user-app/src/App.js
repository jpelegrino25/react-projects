import React, { Fragment, useState } from "react";
import "./App.css";
import AddUser from "./components/User/AddUser";
import UserList from "./components/User/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  const addUser = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <>
      <AddUser onAddUser={addUser} />
      <UserList users={userList} />
    </>
  );
}

export default App;
