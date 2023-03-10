import React from "react";
import axios from "axios";
import UserCard from "../UserCard/UserCard";
import "./UsersList.css";

class UsersListC extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      showLoader: false,
    };
  }

  async componentDidMount() {
    // setTimeout(() => {
    //   this.setState({ showLoader: false });
    // }, 10_000);
    this.setState({ showLoader: true });
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
    setTimeout(() => {
      this.setState({ showLoader: false });
    }, 3000);

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
        {this.state.showLoader && (
          <img
            className="loader"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
            alt="Loader"
          />
        )}

        <h1>Users List from Class based component</h1>
        {this.state.users.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </>
    );
  }
}

export default UsersListC;
