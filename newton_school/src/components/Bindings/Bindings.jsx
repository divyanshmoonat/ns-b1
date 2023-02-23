import { useState } from "react";
import "./Bindings.css";

const Bindings = () => {
  const [name, setName] = useState("ABCD");

//   setTimeout(() => {
//     setName("XYZ");
//     console.log("Value of name updated to XYZ");
//   }, 5000);

  const onInputChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <input
        value={name}
        onChange={onInputChange}
        type={"text"}
        placeholder="Enter your name"
      />
    </div>
  );
};
export default Bindings;
