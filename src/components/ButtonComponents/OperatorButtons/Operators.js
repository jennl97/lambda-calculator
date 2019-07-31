import React, {useState} from "react";

//import any components needed
import OperatorButton from "./OperatorButton";

//Import your array data to from the provided data file
import operators from "../../../data";


const Operators = (props) => {
  // STEP 2 - add the imported data to state
  let [addOperator, setOperator] = useState(props.operators);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {/* JHL - had to set a key for it to map array  src = https://reactjs.org/docs/lists-and-keys.html#keys*/}

       {
         addOperator.operators.map((oper, index) => {
            return <OperatorButton setOperator = {oper} key = {index} /> 
            })}
    </div>
  );
};

export default Operators;