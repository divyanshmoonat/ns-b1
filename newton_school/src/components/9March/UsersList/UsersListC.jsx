import React from "react";
import axios from "axios";
import UserCard from "../UserCard/UserCard";

class UsersListC extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
    //   console.log(data);
      this.setState({ users: data });
    } catch (error) {
      console.error(error);
    }

    // try {
    //   const response = await axios.get(
    //     "https://jsonplaceholder.typicode.com/users"
    //   );
    //   this.setState({ users: response.data });
    // } catch (error) {
    //   console.error(error);
    // }

    // axios
    //   .get("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => {
    //     console.log(response.data);
    //     this.setState({ users: response.data });
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }

  render() {
    return (
      <>
        <h1>Users List from Class based component</h1>
        {this.state.users.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </>
    );
  }
}

export default UsersListC;
