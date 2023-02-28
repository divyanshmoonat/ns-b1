import React from "react";

import "./CBC.css";

class CBC extends React.Component {
  constructor() {
    console.log("Constructor");
    // Initialize parent class (to use this keyword)
    super();

    // Initialize the variables
    this.state = {
      counter: 0,
      name: "ABCD",
    };

    // this.onIncrementClickHandler = this.onIncrementClickHandler.bind(this);

    // this.counter = 0;

    // setTimeout(() => {
    //   console.log("Updating state value");
    //   this.setState({ counter: 10 }); // Correct way of updating state variable
    // }, 5000);
  }

  onIncrementClickHandler = () => {
    // console.log("On click handler called");
    // console.log(this);
    this.setState({ counter: this.state.counter + 1 });
  };
  //   onIncrementClickHandler() {
  //     console.log("On click handler called");
  //     console.log(this);
  //     this.setState({ counter: 1 });
  //   }

  // Call the API to fetch data in your component
  componentDidMount() {
    console.log("Component did mount");
    this.setState({ counter: 1 });
  }

  // Compare the props and state
  componentDidUpdate() {
    console.log("Component did update");
    // this.setState({ counter: 1 });
  }

  static getDerivedStateFromProps() {
    console.log("Get dervied state from props");

    return null;
    // return {
    //   counter: 5,
    // };
  }

  shouldComponentUpdate() {
    console.log("Should component update");
    // return true; // Trigger a re render
    return false; // No re render will be trigger
  }

  // To show the HTML on UI
  render() {
    console.log("Render");
    // setTimeout(() => {
    //   this.state.counter = 1; // Incorrect way of updating state variable
    //   console.log("Counter value", this.state.counter);
    // }, 5000);
    // this.setState({ counter: 1 });
    return (
      <div className="cbc">
        Counter : {this.state.counter}
        <br />
        <button onClick={this.onIncrementClickHandler}>Increment</button>
        <p>{this.state.name}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          nemo dolores mollitia incidunt, suscipit tempora ad, vel pariatur
          voluptas, qui sequi. Quam porro necessitatibus molestiae repellendus
          tenetur dolor sit consequatur.
        </p>
        My first class based component
      </div>
    );
  }
}

export default CBC;
