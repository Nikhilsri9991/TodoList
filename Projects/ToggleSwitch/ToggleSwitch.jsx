import { useState } from "react";
import "./ToggleSwitch.css";


export const ToggleSwitch = () => {
const [isOn , setIsOn] = useState(true);

const handleToggleSwitch = ()=>{
  setIsOn(!isOn);   
}

const checkIsOn = isOn ? "on" : "off";
const toggleBGcolor = {backgroundColor: isOn ? "#4caf50" : "#f44336"};
  return (
    <div
      className="toggle-switch"
      style={toggleBGcolor}
      onClick={handleToggleSwitch}
    >
      <div className={`switch ${isOn ? "on" : "off"}`}>
        <span className="switch-state">{checkIsOn}</span>
      </div>
    </div>
  );
};
