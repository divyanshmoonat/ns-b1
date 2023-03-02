import { useState, useEffect } from "react";
import "./Test.css";

const Test = () => {
  // const num1 = 10;
  // num1.split();
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("ABC");
  /**
   * Syntax : useEffect(callbackFn,dependencyArray?);
   * No array : Fn will be called on every udpate (componentDidUpdate)
   * Empty array : Fn will be called only once (componentDidMount)
   * Array with variable names: Fn will be called when a change in dependent variable is seen
   */

  // componentDidUpdate()
  // useEffect(() => {
  //   console.log("Use effect called => Component Did Update");
  // });

  // The fn will execute only when the value of counter changes
  // useEffect(() => {
  //   // console.log("Use effect called => Change of counter value");
  //   if (counter > 10) {
  //     alert("Counter value reached to 10");
  //   }
  // }, [counter]);

  // componentDidMount() => domContentLoaded
  useEffect(() => {
    // API Call
    // setTimeout(() => {
    //   setCounter(100);
    // }, 5000);
    localStorage.setItem("lastLoggedInTime", "2 Mar 2023 21:20:00");
    console.log("Use Effect => Component did mount");
    return () => {
      console.log("Unmounting Test component");
      localStorage.removeItem("lastLoggedInTime");
      // componentWillUnmount()
    };
  }, []);

  return (
    <div>
      <h2>Function based counter</h2>
      <h3>Counter : {counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <br />
      {name}
      <button onClick={() => setName("XYZ")}>Change Name</button>
    </div>
  );
};
export default Test;
