import { useState } from 'react'
import './App.css'

import ChildComponent from './components/ChildComponent'
import { useCallback } from 'react'
import { useMemo } from 'react'

function App() {
  // State to force re-render of the parent component
  const [count, setCount] = useState(0)
  const [toggle, setToggle] = useState(false)
  console.log("Parent(App) rendering....")
  
  // Even when Parent re-renders, Child also re-render if we do not use memo() funtion
  // unless 'count' prop changes (thanks to React.memo)
  


  //calling output showing on console
  //useCallbace remind the callback function(cache)

  /**
   * useCallback: Memoizes the handleIncrement function.
   * This prevents unnecessary re-renders of ChildComponent 
   * when 'toggle' changes (if ChildComponent is wrapped in React.memo).
   */
  const handleIncreament = useCallback(   //now the parent component will be re-rendered when the handleIncrement component will be called()/ change the value of count through handleIncrement --- Now, if toggle button is clicked then the childComponent will not be re-render
    ()=>{
    setCount(count+1);
  },
    [count],
  )


  //for useMemo()hook
  /**
   * useMemo: Used to cache the result of an expensive calculation.
   * The result is calculated only once and reused unless dependencies change.
   */
  /*
  let number = 0;   //for this loop -- the app getting performace issue to update instantly(it update the value of state(count) after sometime when we are clicking on any button)
  for(let i = 0; i <500000000; i++){
    number += 1;
  }
 */

  //For this performance issue resolve, we need to use useMemo() hook which is remember the calculated value/return value (of any function) and update data instantly from second time
  const calculatedBigNum = useMemo(()=>{
    let number = 0;
    for(let i = 0; i <500000000; i++){
    number += 1;
  }
  return number;
  } , []) // Empty dependency = runs once when the component mounts

  return (
    <>
    <h1>Number: {calculatedBigNum}</h1>
    {toggle? "on" : "off"}
    <button onClick={()=>setToggle(!toggle)}>Toggle</button>   
    <h1>Count: {count}</h1>
    <button onClick={()=>setCount(count+1)}>Increase</button>
    <ChildComponent handleIncreament={handleIncreament}></ChildComponent>
    </>
  )
}

export default App
