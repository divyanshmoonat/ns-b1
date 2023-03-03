import { createContext, useState } from "react";

export const MyContext = createContext();

const MyContextProvider = (props) => {
  const [state, setState] = useState({
    version: "1.0.0",
    themeName: "light",
    appName: "NewtonSchool-App",
  });

  const updateContext = (key, value) => {
    setState({
      ...state,
      [key]: value,
    });
  };
//   console.log(props);
  return (
    <MyContext.Provider value={{ ...state, updateContext }}>
      {props.children}
    </MyContext.Provider>
  );
};
export default MyContextProvider;
