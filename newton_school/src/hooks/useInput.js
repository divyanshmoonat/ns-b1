import { useState } from "react";

const useInput = (initalValue) => {
  const [value, setValue] = useState(initalValue);

  const onInputChange = (e) => {
    setValue(e.target.value);
  };

  const bind = {
    value: value,
    onChange: onInputChange,
  };

  const output = [value, bind];
  return output;
};

export default useInput;
