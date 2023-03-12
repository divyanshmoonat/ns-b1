import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import "./UserProfile.css";

const UserProfile = () => {
  const params = useParams();
  const [searchParams] = useSearchParams();
  const [user, setUser] = useState({});
  const userId = searchParams.get("userid");
  // console.log(searchParams.get("userid"), searchParams.get("version"));
  const getUserData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users/" + userId
      );
      setUser(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="user-profile">
      <h1>This is dynamic user page for userID {userId}</h1>
      <h5>Name: {user.name}</h5>
      <h5>Email : {user.email}</h5>
      <h5>Phone : {user.phone}</h5>
      <h5>Username : {user.username}</h5>
      <h5>Website : {user.website}</h5>
      <h6>
        Address:{" "}
        {`${user.address?.suite}, ${user.address?.street}, ${user.address?.city}, ${user.address?.zipcode}`}
      </h6>
    </div>
  );
};

export default UserProfile;
