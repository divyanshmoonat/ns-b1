import { useState } from "react";

const Register = () => {
  /* const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); */

  const [state, setState] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const onInputChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    setState({
      ...state,
      [key]: value, // Dynamic key
    });
  };

  console.log(state);
  return (
    <div>
      <form>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input name="fullName" id="fullName" onChange={onInputChange} />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            id="email"
            type={"email"}
            onChange={onInputChange}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            id="password"
            type={"password"}
            onChange={onInputChange}
          />
        </div>

        <input type={"submit"} value={"Register"} />
      </form>
      <div>
        <h4>Form Inputs</h4>
        <div>{state.fullName}</div>
        <div>{state.email}</div>
        <div>{state.password}</div>
      </div>
    </div>
  );
};
export default Register;
