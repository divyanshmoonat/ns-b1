import { forwardRef } from "react";

import "./Form.css";

const Form = (props, ref) => {
//   console.log(props, ref);
  return (
    <form onSubmit={props.onFormSubmit}>
      <input ref={ref} type={"text"} placeholder="Type something..." />
      <div>
        <input type={"submit"} />
      </div>
    </form>
  );
};
export default forwardRef(Form);
