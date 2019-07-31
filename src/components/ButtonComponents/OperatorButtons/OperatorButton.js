import React from "react";

const OperatorButton = (props) => {
  let click = () => props.setOperator;
  return (
    <button className = {`opBtn`} onClick = {click}>{props.setOperator}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default OperatorButton;