import React, { Component } from "react";

export default class ListMap extends Component {
  render() {
    const arr = [1, 2, 3, 4, 4, 5];
    const newArray = arr.map((val, index) => {
      return <li key={index}>{val}</li>;
    });
    return (
      <div>
        List in react
        <ul>
        {newArray}
        </ul>
      </div>
    );
  }
}
