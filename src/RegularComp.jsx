import React, { Component } from "react";

export default class RegularComp extends Component {
  render() {
    return (
      <div className="App">
        <h1>Regular Component</h1>
        {this.props.name}
      </div>
    );
  }
}
