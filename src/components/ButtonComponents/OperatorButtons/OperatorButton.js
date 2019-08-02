import React from "react";

const OperatorButton = (props) => {
  let click = () => props.setOperators;
  return (
   
    <div>
    <button className = "operBtn" onClick = {click}>{props.setOperators}</button>
    </div>
  )
};

export default OperatorButton;