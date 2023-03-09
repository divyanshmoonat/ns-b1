import { useRef } from "react";
import Form from "./Form/Form";
import "./ForwardRefContainer";

const ForwardRefContainer = () => {
  const inputRef = useRef();

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    inputRef.current.value = "";
    inputRef.current.style.color = "blue";
    inputRef.current.focus();
  };

  return (
    <div>
      <h3>Forward Ref Container</h3>
      <Form ref={inputRef} onFormSubmit={onFormSubmit} />
    </div>
  );
};

export default ForwardRefContainer;
