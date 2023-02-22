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

  const onFullNameChange = (event) => {
    // setFullName(event.target.value);
    // setState();
    // setState.fullName = ""; // Wrong
    // setState({ fullName: event.target.value }); // Wrong
    setState({
      ...state,
      fullName: event.target.value,
    });
  };
  const onEmailChange = (event) => {
    // setEmail(event.target.value);
    // setState({ email: event.target.value }); // Wrong
    setState({
      ...state,
      email: event.target.value,
    });
  };
  const onPasswordChange = (event) => {
    // setPassword(event.target.value);
    setState({
      ...state,
      password: event.target.value,
    });
  };

  console.log(state);
  return (
    <div>
      <form>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input id="fullName" onChange={onFullNameChange} />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type={"email"} onChange={onEmailChange} />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input id="password" type={"password"} onChange={onPasswordChange} />
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
