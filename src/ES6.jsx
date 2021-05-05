import React, { Component } from "react";

class ES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: "",
    };
  }

  mypromisefuncion = (e) => {
    let arrlist = [2, 3, 5, 6];
    let agevalue = e.target.value;
    this.setState({ age: agevalue });

    let allValue = [...arrlist, agevalue, this.state.age];
    console.log(allValue);

    /* let boxValue = e.target.value;
    this.setState({ age: boxValue });
    const mypromise = new Promise((resolve, reject) => {
      if (boxValue <= 27) {
        resolve("PG");
      } else {
        reject("Other");
      }
    });

    const p2 = "I am PG";

    Promise.all([mypromise, p2]).then((values) => {
      console.log(values);
    });

    mypromise
      .then((resolve) => {
        console.log(resolve);
      })
      .catch((reject) => {
        console.log(reject);
      }); */
  };

  //async function myDisplay(){}

  render() {
    return (
      <div>
        <input type="text" onChange={this.mypromisefuncion}></input>
      </div>
    );
  }
}

export default ES6;
