import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

//Add inputs for name, age and a button to confirm

const AddUser = (props) => {
  const [enteredUsername, setEnteredUserName] = useState(" ");
  const [enteredAge, setEnteredAge] = useState(" ");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    const user = {
      id: Math.floor(Math.random() * 100),
      name: enteredUsername,
      age: enteredAge,
    };

    props.state(user);
    setEnteredUserName("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const modalButtonHandler = () => {
    setError(null);
  };

  
  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm= {modalButtonHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
