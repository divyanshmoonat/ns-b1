import { useState } from "react";
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
    return (
      <header>
        <nav className="site-nav">
          <div>
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
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
