import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
        <nav className={"site-nav navbar"}>
          <NavLink to="/users-list">Users List</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/revenue-report">Revenue Report</NavLink>
          <NavLink to="/status-report">Status Report</NavLink>
        </nav>
      </header>
    );
  } else {
    const percent = 45;
    const aStyles = { color: percent < 50 ? "red" : "green" };
    return (
      <header>
        <nav className="site-nav">
          <div className="navbar">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              to={"/"}
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              to="/about-us"
            >
              About Us
            </NavLink>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              to="/contact-us"
            >
              Contact Us
            </NavLink>
          </div>
          <div>
            <Link to={"/login"}>Login</Link>
            {/* {isLoggedIn ? (
              <button onClick={onBtnClickHandler}>Logout</button>
            ) : (
              <button onClick={onBtnClickHandler}>Login</button>
            )} */}
          </div>
        </nav>
      </header>
    );
  }
};
export default Header;
