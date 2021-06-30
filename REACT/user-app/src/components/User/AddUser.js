import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../helpers/Wrapper";

const AddUser = (props) => {
  const [userEnter, setUserEnter] = useState("");
  const [ageEnter, setAgeEnter] = useState("");
  const [error, setError] = useState();
  const userNameRef = useRef("");
  const handleAddUser = (e) => {
    console.log(userNameRef.current.value);
    e.preventDefault();
    if (userEnter.trim().length === 0 || ageEnter.trim().length === 0) {
      setError({
        title: "Empty field",
        message: "Please fill out the form properly",
      });
      return;
    }
    if (+ageEnter < 1) {
      setError({
        title: "Valid age",
        message: "Please enter a valid age",
      });
      return;
    }
    console.log(userEnter, ageEnter);
    props.onAddUser(userEnter, ageEnter);
    setAgeEnter("");
    setUserEnter("");
  };

  const handleUserChange = (e) => {
    setUserEnter(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAgeEnter(e.target.value);
  };

  const resetModal = (e) => {
    e.preventDefault();
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={resetModal}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={handleAddUser}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            value={userEnter}
            type="text"
            onChange={handleUserChange}
            ref={userNameRef}
          />

          <label htmlFor="age">Age(Years)</label>
          <input
            id="age"
            type="text"
            value={ageEnter}
            onChange={handleAgeChange}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
