import React, { Component } from "react";

export default class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      add1: 0,
      add2: 0,
      totalsum: "?",
    };
  }

  onChangeHandler = async (e) => {
    let value = e.target.value;
    let name = e.target.name;
    console.log(name);
    await this.setState({
      [name]: value,
    });

    /* this.setState({
      totalsum: this.state.add1 + this.state.add2,
    }); */

    this.setState((state) => {
      return { totalsum: parseInt(state.add1) + parseInt(state.add2) };
    });
  };

  render() {
    return (
      <div>
        <h1>Form Handling</h1>
        <p>
          {this.state.add1} + {this.state.add2} = {this.state.totalsum}
          {/* <button onClick={this.onClickChange}>Hit me</button> */}
          <input type="text" name="add1" onChange={this.onChangeHandler} />
          <input type="text" name="add2" onChange={this.onChangeHandler} />
        </p>
      </div>
    );
  }
}
