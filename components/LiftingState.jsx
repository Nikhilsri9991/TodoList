import { useState } from "react";

export const LiftingState =() =>{

    const [inputValue, setinputValue] = useState(""); 
     return (
       <>
         <InputComponent
           inputValue={inputValue}
           setinputValue={setinputValue}
         />
         <DisplayComponent inputValue={inputValue} />
       </>
     );
}

const InputComponent = ({ inputValue,setinputValue }) => {
  return (
    <>
      <input
        type="text"
        placeholder="enter your name"
        value={inputValue}
        onChange={(e) => setinputValue(e.target.value)}
      ></input>
    </>
  );
};

const DisplayComponent = ({ inputValue }) => {
  return <p>The current input value is: {inputValue}</p>;
};