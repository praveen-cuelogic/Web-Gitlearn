import React from "react";

function MemoComp(props) {
  console.log("I am memo function");
  return <>I am memo- {props.name}</>;
}

export default React.memo(MemoComp);
