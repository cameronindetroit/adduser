import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
 
  const userListContent = props.users.map((user) => (
    <li key={user.id}>
      {user.name}({user.age} years old)
    </li>
  ));

  return (
    <Card className={classes.users}>
      <ul>{userListContent}</ul>
    </Card>
  );
};

export default UsersList;
