import React from "react";

class TestCB extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.counter !== this.state.counter ||
      prevState.name !== this.state.name
    ) {
      // Change in counter variable is observed
      console.log("Component Did Update");
    }
  }

  componentDidMount() {
    // API Call
    console.log("Component Did Mount");
  }

  render() {
    return (
      <div>
        <h2>Class based counter</h2>
        <h3>Counter : {this.state.counter}</h3>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Increment
        </button>
      </div>
    );
  }
}

export default TestCB;
