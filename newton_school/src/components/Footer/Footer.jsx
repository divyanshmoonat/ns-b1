import { useContext } from "react";
import { MyContext } from "../../App";

import "./Footer.css";

const Footer = () => {
  const myContext = useContext(MyContext);
  // console.log(myContext);
  return (
    <div className="footer">
      <span>{myContext.appName}</span>
      <span>{myContext.themeName}</span>
      <span>{myContext.version}</span>
    </div>
  );
};
export default Footer;
