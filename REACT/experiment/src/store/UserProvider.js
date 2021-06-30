import { useReducer } from "react";
import UserContext from "./user-context";
const UserProvider = (props) => {
  const initialState = {
    users: [],
  };

  const userReducer = (state, action) => {
    if (action.type === "ADD") {
      const usersUpdated = [...state.users, action.user];
      return { users: usersUpdated };
    }
    return initialState;
  };

  const [userState, userDispatch] = useReducer(userReducer, initialState);

  const addUser = (user) => {
    userDispatch({ type: "ADD", user: user });
  };

  const userContext = {
    users: userState.users,
    addUser: addUser,
  };

  return (
    <UserContext.Provider value={userContext}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
