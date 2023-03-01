import React from "react";
import Test from "../Test/Test";
import TestCB from "../TestCB/TestCB";

import "./ErrorBoundary.css";

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
    this.setState({ error: error });
  }

  componentDidMount() {
    console.log("Did mount called");
  }

  render() {
    if (this.state.error) {
      return (
        <h1>Oops!! Something went wrong, please try again after sometime</h1>
      );
    }
    return (
      <div className="error-boundary-container">
        <div>
          <Test />
        </div>
        <div>
          <TestCB />
        </div>
      </div>
    );
  }
}

export default ErrorBoundary;
