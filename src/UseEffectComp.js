import React, { useState, useEffect, Fragment } from "react";

function UseEffectComp() {
  const [userName, setuserName] = useState("Hello Kittoo");
  const [adminName, setadminName] = useState("Vaibhav");

  const onClickHandler = () => {
    setuserName("Mini");
  };

  const onClickAdminHandler = () => {
    setadminName("Chetan");
  };

  //this method call first with mount and re-render with update
  //all lifeCycle get here: componentDidMount, componentWillUnmount, componentDidUpdate
  useEffect(() => {
    console.log("I am here", userName);
  }, [userName === "Mini"]);

  return (
    <Fragment>
      <h1>I am userName: useState {userName}</h1>
      <button onClick={onClickHandler}>Hit Me</button>

      <br></br>
      <h1>I am adminName: useState {adminName}</h1>
      <button onClick={onClickAdminHandler}>Hit Me</button>
    </Fragment>
  );
}
export default UseEffectComp;
