import React, { PureComponent } from "react";

export default class PureComp extends PureComponent {
  render() {
    return (
      <div className="App">
        <h1>Pure Component</h1>
        {this.props.name}
      </div>
    );
  }
}
