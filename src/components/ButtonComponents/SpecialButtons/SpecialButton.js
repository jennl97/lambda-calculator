import React from "react";

const SpecialButton = (props) => {
  let click = () => props.setSpecial;
  return (
    <button className = "specBtn" onClick = {click}>{props.setSpecial}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};


export default SpecialButton;