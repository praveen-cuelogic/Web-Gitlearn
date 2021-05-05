import React, { PureComponent } from "react";
import PureComp from "./PureComp";
import RegularComp from "./RegularComp";

export default class ParentComp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "Bahubali",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Bahubali",
      });
    }, 2000);
  }

  render() {
    return (
      <div className="App">
        <h1>Parent Component</h1>
        <RegularComp name={this.state.name}></RegularComp>
        <PureComp name={this.state.name}></PureComp>
      </div>
    );
  }
}
