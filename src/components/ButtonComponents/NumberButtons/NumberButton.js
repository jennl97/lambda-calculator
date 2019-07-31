import React from "react";


const NumberButton = (props) => {

 /*JHL - figure out how to set clickEvents in React src=https://reactjs.org/docs/handling-events.html, https://medium.com/javascript-in-plain-english/declaring-event-handlers-d63b17e170d9*/
  let click = () => props.setNumbers;

  return (
  

   <button className = "numBtn" onClick = {click}>{props.setNumbers}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      
    </button>
  );
};

export default NumberButton;
