import { useContext } from "react";
import { MyContext } from "../../contexts/MyContext";
import Container from "../Container/Container";

import "./Footer.css";

const Footer = () => {
  const myContext = useContext(MyContext);
  // console.log(myContext);
  return (
    <Container>
      <div className="footer">
        <span>{myContext.appName}</span>
        <span>{myContext.themeName}</span>
        <span>{myContext.version}</span>
      </div>
    </Container>
  );
};
export default Footer;
