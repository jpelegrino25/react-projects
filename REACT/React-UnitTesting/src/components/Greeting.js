import { useState } from "react";
const Greeting = () => {
  const [show, setShow] = useState(false);
  const changeShowHandler = () => {
    setShow(true);
  };

  return (
    <>
      <h1>Hello World</h1>
      {show && <p>It's good to see you</p>}
      {!show && <p>Changd!</p>}
      <button onClick={changeShowHandler}>Update State</button>
    </>
  );
};

export default Greeting;
