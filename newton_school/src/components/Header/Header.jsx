import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  // let isLoggedIn = false;
  let [isLoggedIn, setLoggedIn] = useState(false);
  const onBtnClickHandler = () => {
    console.log("Btn clicked");
    // isLoggedIn = true;
    setLoggedIn(!isLoggedIn);
  };

  if (isLoggedIn) {
    return (
      <header>
        <nav className={"site-nav"}>
          <a href="#">Dashboard</a>
          <a href="#">Revenue Report</a>
          <a href="#">Status Report</a>
        </nav>
      </header>
    );
  } else {
    const percent = 45;
    const aStyles = { color: percent < 50 ? "red" : "green" };
    return (
      <header>
        <nav className="site-nav">
          <div>
            <Link to={"/"}>Home</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/contact-us">Contact Us</Link>
          </div>
          <div>
            {isLoggedIn ? (
              <button onClick={onBtnClickHandler}>Logout</button>
            ) : (
              <button onClick={onBtnClickHandler}>Login</button>
            )}
          </div>
        </nav>
      </header>
    );
  }
};
export default Header;
