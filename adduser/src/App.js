import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";

const App = () => {
  const [userList, setUserList] = useState([]);

  const getUserHandler = (user) => {
    setUserList((prevuserList) => {
      return [user, ...prevuserList];
    });
  };

  return (
    <div>
      <AddUser state={getUserHandler} />
      {userList.length > 0 && <UsersList users={userList} />}
    </div>
  );
};

export default App;
