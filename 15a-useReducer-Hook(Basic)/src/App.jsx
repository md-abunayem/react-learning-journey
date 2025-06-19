import { useReducer } from "react";
import { useState } from "react";


const reducer =(state, action)=>{
  switch(action.type){
    case "INCREAMENT": 
      return state+1;
    case "DECREMENT": 
      return state-1;
    case "RESET": 
      return 0;
    default:
      return state;
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, 0);


  const handleIncrement=()=>{
    dispatch({type:"INCREAMENT"})
  }
  const handleDecrement=()=>{
    dispatch({type:"DECREMENT"})
  }
  const handleReset=()=>{
    dispatch({type:"RESET"});
  }
  

  return (
      
    <>
      <h4>Count: {state}</h4>
      <button onClick={handleIncrement}>Increament</button>
      <button onClick={handleDecrement}>decrement</button>
      <button onClick={handleReset}>Reset</button>
    </>
  )
}

export default App











/*import { useReducer } from "react";
import { useState } from "react";


const reducer =(state, action)=>{
  switch(action.type){
    case "INCREAMENT": 
      return {count : state.count + 1};
    case "DECREMENT": 
      return {count : state.count - 1};
    case "RESET": 
      return {count : 0};
    default:
      return state;
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, {count: 0});


  const handleIncrement=()=>{
    dispatch({type:"INCREAMENT"})
  }
  const handleDecrement=()=>{
    dispatch({type:"DECREMENT"})
  }
  const handleReset=()=>{
    dispatch({type:"RESET"});
  }
  

  return (
      
    <>
      <h4>Count: {state.count}</h4>
      <button onClick={handleIncrement}>Increament</button>
      <button onClick={handleDecrement}>decrement</button>
      <button onClick={handleReset}>Reset</button>
    </>
  )
}

export default App
*/