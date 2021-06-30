import { useState } from "react";

const UserForm = (props) => {
  const [user, setUser] = useState({ id: 0, name: "" });

  const onChangerHandler = (e) => {
    e.preventDefault();
    setUser((prevUser) => {
      return { ...prevUser, [e.target.name]: e.target.value };
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.onAdd(user);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <label>ID</label>
        <input
          type="number"
          id="id"
          name="id"
          value={user.id}
          onChange={onChangerHandler}
        />
      </div>

      <div>
        <label>NAME</label>
        <input
          type="text"
          id="name"
          name="name"
          value={user.name}
          onChange={onChangerHandler}
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default UserForm;
