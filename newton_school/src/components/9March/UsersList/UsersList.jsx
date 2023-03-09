import { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "../UserCard/UserCard";
import "./UsersList.css";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        console.log(response.data);
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

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
  }, []);

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
