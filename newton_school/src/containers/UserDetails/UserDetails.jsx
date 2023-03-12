import { Link, Outlet } from "react-router-dom";
import "./UserDetails.css";

const UserDetails = () => {
  return (
    <div className="user-details">
      <h1>User Details Screen</h1>
      <h2>User : Robin</h2>
      <div className="user-items-container">
        <Link to={"profile"}>Profile</Link>
        <Link to={"account"}>Account</Link>
        <div>
          <Outlet />
        </div>
        {/* <div>User Profile</div>
        <div>User Account</div> */}
      </div>
    </div>
  );
};

export default UserDetails;
