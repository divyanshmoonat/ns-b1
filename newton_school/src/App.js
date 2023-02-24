import { useState } from "react";
import styled from "styled-components";

import "./App.css";

import Greet from "./components/Greet/Greet";
import Header from "./components/Header/Header";
import ToDoList from "./components/ToDoList/ToDoList";
import Events from "./components/Events/Events";
import Register from "./components/Register/Register";
import UpdatingState from "./components/UpdatingState/UpdatingState";
import Bindings from "./components/Bindings/Bindings";
import Dashboard from "./components/24Feb/Dashboard/Dashboard";
import ConUnConComponents from "./components/24Feb/ConUnConComponents/ConUnConComponents";

const App = () => {
  // const percent = 60;

  const Heading = styled.h1`
    color: ${(props) => (props.percent > 50 ? "green" : "red")};
    font-size: 25px;
  `;

  const Heading2 = styled.h1`
    color: blue;
  `;

  const [heading, setHeading] = useState("");
  const onHeadingChange = (value) => {
    // Update heading state variable
    setHeading(value);
  };

  return (
    <div className="App">
      <Header />
      {/* <h1 style={{ color: "aqua", fontSize: "50px" }}>My ReactJS Website</h1> */}
      {/* <Heading percent={60}>Heading from Styled Component</Heading> */}
      {/* <Heading2>{heading}</Heading2> */}
      {/* <Events
        event={{
          hardware: "mouse",
          type: "click",
        }}
        onHeadingChange={onHeadingChange}
        name={"click"}
      /> */}
      {/* <ToDoList /> */}
      {/* <Register /> */}
      {/* <UpdatingState /> */}
      {/* <Bindings /> */}
      {/* <Dashboard /> */}
      <ConUnConComponents />
    </div>
  );
};

export default App;
