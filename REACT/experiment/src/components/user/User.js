import { useContext, useState } from "react";
import UserForm from "./UserForm";
import UserContext from "../../store/user-context";

const User = () => {
  const ctx = useContext(UserContext);

  const [showForm, setShowForm] = useState(false);

  const addUserHandler = (e) => {
    e.preventDefault();
    setShowForm(true);
  };

  const userRenders = ctx.users.map((user) => (
    <div key={user.id}>
      <h2>{user.id}</h2>
      <p>{user.name}</p>
    </div>
  ));
  return (
    <>
      {showForm && <UserForm onAdd={ctx.addUser} />}
      {!showForm && <button onClick={addUserHandler}>Add User</button>}
      <h1>User home</h1>
      {userRenders}
    </>
  );
};

export default User;
