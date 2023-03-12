import { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "../UserCard/UserCard";
import "./UsersList.css";
import { Link } from "react-router-dom";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const getUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users?pageNo=" + pageNo
      );
      console.log(response.data);
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getUsers();

    // axios
    //   .get("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => {
    //     console.log(response.data);
    //     setUsers(response.data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }, [pageNo]);

  return (
    <>
      <h1>Users List component</h1>
      <div className="users-container">
        {users.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
    </>
  );
};

export default UsersList;
