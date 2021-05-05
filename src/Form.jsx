import React, { Component } from "react";

export default class FormHandling extends Component {
  constructor(props) {
    super(props);
    this.state = { user: "PG---" };
  }

  render() {
    return (
      <div>
        <h1>Form Handling</h1>
        <p>{this.state.user}</p>
      </div>
    );
  }
}
