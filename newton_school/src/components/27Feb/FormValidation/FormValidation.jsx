import { useState } from "react";

import { validateForm } from "../../../utils/validations/Register";
import "./FormValidation.css";

const FormValidation = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    // Clear the old error stored in state variable
    setErrors({});
    // 1. Validate the form data using custom validation rule
    const validationResult = validateForm(state);
    if (Object.keys(validationResult).length > 0) {
      // Error
      setErrors(validationResult);
      // 1.1 If the validtion fails, show the error messages on UI
      return;
    }
    // 2. If validation passes, call the API and pass the data
    alert("Form submission successful!");

  };

  const onInputChangeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-validation">
      <form onSubmit={onFormSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            onChange={onInputChangeHandler}
            type={"text"}
            id="name"
          />
          <div>
            <span className="error-msg">{errors.name}</span>
          </div>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            onChange={onInputChangeHandler}
            type={"text"}
            id="email"
          />
          <div>
            <span className="error-msg">{errors.email}</span>
          </div>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            onChange={onInputChangeHandler}
            type={"password"}
            id="password"
          />
          <div>
            <span className="error-msg">{errors.password}</span>
          </div>
        </div>
        <input type={"submit"} value="Register" />
      </form>
    </div>
  );
};
export default FormValidation;
