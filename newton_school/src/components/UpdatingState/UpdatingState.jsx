import { useState } from "react";

import "./UpdatingState.css";

const UpdatingState = () => {
  const [counter, setCounter] = useState(0);

  //   const [user, setUser] = useState({
  //     name: "",
  //     age: "",
  //     address: "",
  //   });
  const onBtnClickHandler = () => {
    for (let i = 0; i < 10; i++) {
      console.log("Loop is running", i);
      //   setCounter(counter + 1); // 1
      setCounter((prevCounter) => prevCounter + 1); // Handle state updates based on previous state value

    //   setUser((prevUser) => ({
    //     ...prevUser,
    //     name: prevUser.name + "NEW STRING",
    //   }));
    }
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onBtnClickHandler}>Update Counter</button>
    </div>
  );
};
export default UpdatingState;
