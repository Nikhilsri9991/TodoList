import { useState } from "react";
export const State = () => {
  let value = 0;

const btn_style = {
        padding: "1.2rem 2.4rem",
                border: "none",
                
                fontSize: "1.6rem",
                background: "#7dcea0",   
                color: "var(--btn-color)",
                fontWeight: "bold",
                cursor: "pointer",
    } 

//   const handlebuttonClick = () => {
//     value++;
//     console.log(value);
//   };

// let arr=useState();
const [count,setCount] =useState(0);
const handlebuttonClick  = () => {
  setCount(() => count + 1);
};   
  return (
    <>

    <section className="main-div">
      <h1>{count}</h1>
      <button onClick={handlebuttonClick} style={btn_style}>Increment</button>
    </section>
    </>
  );
};
