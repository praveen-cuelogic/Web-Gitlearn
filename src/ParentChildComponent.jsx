import React, { Component } from "react";

//https://stackoverflow.com/questions/35537229/how-to-update-parents-state-in-react

export default class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      someVar: "I am Parent",
    };
    //this.handler = this.handler.bind(this);
  }

  /*handler() {
    this.setState({
      someVar: "some value",
    });
  }*/

  handler = () => {
    this.setState({
      someVar: "some value",
    });
  };

  render() {
    return (
      <div>
        {this.state.someVar}
        <Child handler={this.handler} />
      </div>
    );
  }
}

class Child extends Component {
  render() {
    return (
      <div>
        I am child - <button onClick={this.props.handler}>Click me </button>
      </div>
    );
  }
}
