import "./UserCard.css";

const UserCard = (props) => {
  return (
    <div className="user-card">
      <img
        className="user-picture"
        src="https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png"
        alt="User Picture"
      />
      <h4>{props.name}</h4>
      <h5>{props.email}</h5>
      <h5>{props.phone}</h5>
    </div>
  );
};

export default UserCard;
