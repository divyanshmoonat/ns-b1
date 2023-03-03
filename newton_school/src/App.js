import { useState, createContext } from "react";
import styled from "styled-components";

import "./App.css";

import Header from "./components/Header/Header";
// import Greet from "./components/Greet/Greet";
// import ToDoList from "./components/ToDoList/ToDoList";
// import Events from "./components/Events/Events";
// import Register from "./components/Register/Register";
// import UpdatingState from "./components/UpdatingState/UpdatingState";
// import Bindings from "./components/Bindings/Bindings";
// import Dashboard from "./components/24Feb/Dashboard/Dashboard";
// import ConUnConComponents from "./components/24Feb/ConUnConComponents/ConUnConComponents";
// import FormValidation from "./components/27Feb/FormValidation/FormValidation";
// import CBC from "./components/28Feb/CBC";
import ErrorBoundary from "./components/1March/ErrorBoundary/ErrorBoundary";
import Consumer from "./components/2March/Consumer/Consumer";
import Footer from "./components/Footer/Footer";
import MyContextProvider from "./contexts/MyContext";
import ReducerExample from "./components/3March/ReducerExample";

const App = () => {
  return (
    <MyContextProvider>
      <div className={`App`}>
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
        {/* <ConUnConComponents /> */}
        {/* <FormValidation /> */}
        {/* <CBC /> */}
        {/* <ErrorBoundary /> */}
        {/* <Consumer /> */}
        <ReducerExample />
        <Footer />
      </div>
    </MyContextProvider>
  );
};

export default App;
