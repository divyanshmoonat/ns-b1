import { useState, useReducer } from "react";
import "./ReducerExample.css";

const initialCounter = 0;

const ReducerExample = () => {
  // useReducer implementation
  const counterReducer = (counter, action) => {
    switch (action) {
      case "INCREASE":
        return counter + 1;
      case "DECREASE":
        return counter - 1;
      case "RESET":
        return initialCounter;
      default:
        return counter;
    }
  };

  // Syntax : const [] = useReducer(reducerFn,initialValue)
  const [counter, dispatch] = useReducer(counterReducer, initialCounter);

  // Use state implementation
  //   const [counter, setCounter] = useState(0);
  //   const increase = () => {
  //     setCounter(counter + 1);
  //   };
  //   const decrease = () => {
  //     setCounter(counter - 1);
  //   };

  return (
    <div>
      <h3>Counter : {counter}</h3>
      <button onClick={(e) => dispatch("DECREASE")}>Decrease</button>
      <button onClick={() => dispatch("INCREASE")}>Increase</button>
      <button onClick={() => dispatch("RESET")}>Reset</button>
    </div>
  );
};

export default ReducerExample;
