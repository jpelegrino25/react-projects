import { useState } from "react";

const UserForm = (props) => {
  const [user, setUser] = useState({ id: 0, name: "" });

  const submitAddUser = (e) => {
    e.preventDefault();
    props.addUser(user);
  };

  const onChangeHandler = (e) => {
    setUser((prevUser) => {
      return { ...prevUser, [e.target.name]: e.target.value };
    });
  };
  return (
    <>
      <form onSubmit={submitAddUser}>
        <div>
          <label>ID</label>
          <input
            type="number"
            onChange={onChangeHandler}
            value={user.id}
            name="id"
          />
        </div>

        <div>
          <label>Name</label>
          <input
            type="text"
            onChange={onChangeHandler}
            value={user.name}
            name="name"
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </>
  );
};

export default UserForm;
