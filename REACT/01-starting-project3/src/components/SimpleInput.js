import { useState } from "react";

const SimpleInput = (props) => {
  const [enterName, setEnterName] = useState({ name: "" });
  const [inputTouched, setInputTouched] = useState(false);

  const inputIsValid = enterName.name.trim() !== "";
  const nameInputIsInvalid = !inputIsValid && inputTouched;

  const changeHandler = (e) => {
    setEnterName((prev) => {
      return { ...prev, name: e.target.value };
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    setInputTouched(true);
    if (!inputIsValid) {
      return;
    }
    console.log(enterName.name);
    setEnterName({ ...enterName, name: "" });
  };

  const onBlurHandler = (e) => {
    setInputTouched(true);
  };

  const inputNameClasses = nameInputIsInvalid
    ? "form-control"
    : "form-control invalid";
  return (
    <form onSubmit={onSubmitHandler}>
      <div className={inputNameClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={changeHandler}
          value={enterName.name}
          onBlur={onBlurHandler}
        />
      </div>
      {nameInputIsInvalid && (
        <p className="error-text">Name most not be empty</p>
      )}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
