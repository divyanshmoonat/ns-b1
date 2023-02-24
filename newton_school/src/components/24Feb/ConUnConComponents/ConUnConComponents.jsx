import { useState, useRef } from "react";
import "./ConUnConComponents.css";

const ConUnConComponents = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const fullNameRef = useRef();
  //   fullNameRef.current;  = e.target;

  return (
    <div>
      <form>
        <h2>Controlled Components</h2>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            value={fullName}
            onChange={(e) => {
              // Validations
              return;
              setFullName(e.target.value);
            }}
            type={"text"}
            id="fullName"
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type={"email"}
            id="email"
          />
        </div>
      </form>

      <form>
        <h2>Uncontrolled Components</h2>
        <div>
          <label htmlFor="fullNameUc">Full Name</label>
          <input type={"text"} ref={fullNameRef} id="fullNameUc" />
        </div>

        <div>
          <label htmlFor="emailUc">Email</label>
          <input type={"email"} id="emailUc" />
        </div>
      </form>
    </div>
  );
};
export default ConUnConComponents;
