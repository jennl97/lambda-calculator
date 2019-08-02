import React, {useState} from "react";

//import any components needed
import NumberButton from "./NumberButton";

//Import your array data to from the provided data file
import numbers from "../../../data";

const Numbers = () => {
  // STEP 2 - add the imported data to state
  let [addNumbers, setNumbers] = useState(numbers);
  
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component */}
       {/* JHL - had to set a key for it to map array  src = https://reactjs.org/docs/lists-and-keys.html#keys*/}
     {
      addNumbers.numbers.map((num, index) => {
          return <NumberButton setNumbers = {num} key = {index} />
           })}

    </div>
  );
};

export default Numbers;
