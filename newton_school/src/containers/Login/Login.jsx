import useInput from "../../hooks/useInput";
import { useNavigate } from "react-router";
import "./Login.css";

const Login = () => {
  const [username, bindUsername] = useInput("");
  const [password, bindPassword] = useInput("");

  const navigate = useNavigate();

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    if (username === "abc@email.com" && password === "12345") {
      //   console.log("User succesfully logged in");
      navigate("/dashboard");
    } else {
      alert("Incorrect username or password");
    }
  };
  return (
    <>
      <h2>Login Form</h2>
      <form onSubmit={onFormSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input {...bindUsername} id="username" type={"text"} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input {...bindPassword} id="password" type={"password"} />
        </div>
        <input type={"submit"} />
      </form>
    </>
  );
};

export default Login;
