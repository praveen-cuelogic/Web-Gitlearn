import React, { Component } from "react";
import { areAllFieldsValid } from "./util";
//import omkarFunction from "./util";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "PG",
      mobileNumber: "",
      email: "",
      userPswrd: "",
      gender: "",
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  submitHandler = (e) => {
    e.preventDefault();
    const { userName, mobileNumber, email, gender, userPswrd } = this.state;
    if (areAllFieldsValid(userName, mobileNumber, email, gender, userPswrd)) {
    } else {
      alert("Error");
    }
  };

  onChangeHandler(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value });
  }

  /* onChangeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value });
  }; */

  render() {
    return (
      <div>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h1>Login From</h1>
            <form onSubmit={this.submitHandler}>
              <input
                type="text"
                name="userName"
                value={this.state.userName}
                placeholder="UserName"
                onChange={(e) => {
                  this.onChangeHandler(e);
                }}
                className="form-control"
              />
              <br />
              <input
                type="text"
                name="mobileNumber"
                placeholder="Mobile No."
                onChange={this.onChangeHandler}
                className="form-control"
              />
              <br />
              <input
                type="email"
                name="email"
                placeholder="Email ID"
                onChange={this.onChangeHandler}
                className="form-control"
              />
              <br />
              <input
                type="password"
                name="userPswrd"
                placeholder="Password"
                onChange={this.onChangeHandler}
                className="form-control"
              />
              <br />
              <input
                type="text"
                name="gender"
                placeholder="Gender"
                onChange={this.onChangeHandler}
                className="form-control"
              />
              <br />
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
