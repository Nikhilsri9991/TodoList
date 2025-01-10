import "./ev.css"

export const EventHandling =()=>{

    // function handleButtonClick(){
    //     alert("Hello amigo kaise ho thik ho");
const handleButtonClick =(event)=>{
console.log(event);
// console.log(event.target);/the targettted variable/
// console.log(event.type);//click
    alert("Hola amigo kaise HO THIK HO");
    alert("TBsm");


    }

    
        const handlewelcome = () => {
          console.log("Aja manja");
        };



    return(
        <>
         {/* //function component with named functions */}
          {/* REMBEBER now we havn't called ths functon,if you call ths functon here then 
           wll run wthout even clckng,you just need
          to pass the reference and not call here  */}
          
            <button onClick={handleButtonClick}>Dabao mujhe</button>

        <br />

    {/* fat arrw function*/} 
        <br /> 
 <button onClick={ (event)=>handleButtonClick(event)}>firse dabao mujhe</button>
        {/* Inline Event function */}
        <button onClick={(event) => console.log(event)}>Dabao na</button>
        <br />

     <button onClick={handlewelcome}>firse dubara dabao mujhe</button>
        {/* pasing argument to event handler */}
        
        </>
    );
}