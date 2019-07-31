import React, {useState} from "react";

//import any components needed
import SpecialButton from "./SpecialButton";

//Import your array data to from the provided data file
import specials from "../../../data";

const Specials = (props) => {
  // STEP 2 - add the imported data to state
  let [addSpecial, setSpecial] = useState(props.specials);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {/* JHL - had to set a key for it to map array  src = https://reactjs.org/docs/lists-and-keys.html#keys*/}

       {
         addSpecial.specials.map((spec, index) => {
            return <SpecialButton setSpecial = {spec} key = {index} /> 
            })}
    </div>
  );
};

export default Specials;