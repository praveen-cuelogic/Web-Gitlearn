import React, { Component } from "react";

class LifeCycle extends Component {
  constructor(props) {
    console.log("I am constructor");
    super(props);
    this.state = {
      method: "Lifecycle",
    };
  }

  /* static getDerivedStateFromProps(props, state) {
    console.log("I am getDerivedStateFromProps");
  } */

  componentDidMount() {
    console.log("I am componentDidMount");
    setTimeout(() => {
      this.setState({ method: "Hooks" });
    }, 3000);
  }

  /* shouldComponentUpdate() {
    console.log("I am shouldComponentUpdate");
  } */

  componentDidUpdate() {
    console.log("I am componentDidUpdate");
  }

  /* componentDidCatch() {
    console.log("I am componentDidCatch");
  }

  componentWillUnmount() {
    console.log("I am componentWillUnmount");
  } */

  render() {
    console.log("I am render");
    return (
      <div>
        <h1>React Component - {this.state.method}</h1>
      </div>
    );
  }
}

export default LifeCycle;
