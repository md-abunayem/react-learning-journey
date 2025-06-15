import { useEffect } from 'react';
import { useState } from 'react'


function App() {
  const [name, setName] = useState("");
  const [validInput, setValidInput] = useState(false);

  const handleChange=(event)=>{
    setName(event.target.value);
    
  }

  useEffect(() => {
    if((name.length) <= 2){     //valid when no. of character is more then 2
      setValidInput(false);
    }else{
      setValidInput(true);
    }
  }, [name])
  

  //another better way for the logic 
  /*const handleChange = (event) => {
  const value = event.target.value;
  setName(value);
  setValidInput(value.length >= 2);
};*/

  return (
    <>
    <h2>Dynamic Styling</h2>
      <input type="text" name="name" id="name" onChange={handleChange} style={{backgroundColor: validInput? "green" : "red"}}/>
    </>
  )
}

export default App
