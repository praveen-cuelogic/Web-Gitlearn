import React, { useState } from "react";

//import { Link, Router } from "react-router-dom";

export default function navRouter(props) {
  const [userName, setuserName] = useState({ name: props.meraName });

  const handleInputChange = (e) => {
    //let name = e.target.name;
    let value = e.target.value;
    setuserName({ name: value });

    console.log(userName);
  };

  return (
    <div>
      Hello React -{userName.name}
      <br />
      <input
        type="text"
        name="userName"
        value={userName.name}
        onChange={handleInputChange}
      />
    </div>
  );
}
