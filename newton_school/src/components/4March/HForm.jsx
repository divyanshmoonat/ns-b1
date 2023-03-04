import { useState } from "react";
import useInput from "../../hooks/useInput";
import "./HForm.css";

const HForm = () => {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");

  const [name, bindName] = useInput("");
  const [email, bindEmail] = useInput("");
  const [address, bindAddress] = useInput("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, address);
    // setName("");
    // setEmail("");
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input {...bindName} type={"text"} id="name" />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input {...bindEmail} type={"text"} id="email" />
      </div>

      <div>
        <label htmlFor="address">Address</label>
        <input {...bindAddress} type={"text"} id="address" />
      </div>

      <input type={"submit"} value="Submit" />
    </form>
  );
};
export default HForm;
