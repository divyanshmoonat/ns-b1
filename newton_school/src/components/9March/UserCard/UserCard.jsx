import { Link } from "react-router-dom";
import "./UserCard.css";

const UserCard = (props) => {
  return (
    <div className="user-card">
      <img
        className="user-picture"
        src="https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png"
        alt="User Picture"
      />
      <Link to={"/user/" + props.id}>{props.name}</Link>
      <h5>{props.email}</h5>
      <h5>{props.phone}</h5>
    </div>
  );
};

export default UserCard;
