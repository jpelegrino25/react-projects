import { useSelector, useDispatch } from "react-redux";
import { userAction } from "../../store/index";
import UserForm from "./UserForm";

const User = () => {
  const userDispatch = useDispatch();
  const userState = useSelector((userSt) => userSt.user);

  const addUserHandler = (user) => {
    userDispatch(userAction.addUser(user));
  };

  console.log(userState);
  const userRender = userState.users.map((user) => (
    <div key={user.id}>
      <h3>{user.id}</h3>
      <p>{user.name}</p>
    </div>
  ));

  const showUserForm = () => {
    userDispatch(userAction.showUserForm(true));
  };

  return (
    <>
      {userState.isShow && <UserForm addUser={addUserHandler} />}
      {!userState.isShow && <button onClick={showUserForm}>Add User</button>}
      <h1>User Component</h1>
      {userRender}
    </>
  );
};

export default User;
