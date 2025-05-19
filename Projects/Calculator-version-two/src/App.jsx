import Display from "./components/Display";
import AppName  from "./components/AppName";
import Buttons from "./components/Buttons";
import "./App.css";

import {useState} from "react";



function App() {
  let [calValue, setCalValue] = useState("");

 const handleOnClick = (event) =>{

    if(event.target.innerText === "C"){
      setCalValue("");
    }else if(event.target.innerText === "="){
      setCalValue(eval(calValue));
    }else{
      setCalValue(calValue + event.target.innerText);
    }
      
 }
  return (
    <>
      <AppName></AppName>
      <div className="calculator">
        <Display displayValue={calValue}></Display>
        <Buttons handleOnClick={(event,sign)=>handleOnClick(event,sign)}></Buttons>
      </div>
    </>
  );
}

export default App;
