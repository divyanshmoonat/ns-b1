import { useContext } from "react";
import { MyContext } from "../../../App";

import "./ChildConsumer.css";

const ChildConsumer = () => {
  const myContext = useContext(MyContext);
  console.log(myContext);

  const onThemeChange = () => {
    if (myContext.themeName === "light") {
      myContext.updateContext("themeName", "dark");
    } else {
      myContext.updateContext("themeName", "light");
    }
  };

  return (
    <div>
      <h4>Child consumer example</h4>
      <button onClick={onThemeChange}>Change Theme</button>
    </div>
  );
};

export default ChildConsumer;
