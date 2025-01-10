export const Eventprops =() =>{

const HandleWelcomeUser =(user) =>{
alert(`Hello, ${user}`);

};  

const handleHover = () => {
  alert(`Hello Thanks for watching`);
};

   return(<>

    <WelcomUser 
    onClick ={() => HandleWelcomeUser("Nikhil")}
    onMouseEnter ={handleHover}
    
    />
   </>
   );
};

const WelcomUser =(props)=>{

    const handleGreetings =() =>{
        console.log('Hey user,Kaisan ba');
        props.onClick();

    }
    return (
      <>
        <button onClick={props.HandleWelcomeUser}>Click</button>
        <button onMouseEnter={props.handleHover}>Hover me</button>
        <button onClick={handleGreetings}>Greeting</button>
      </>
    );
}