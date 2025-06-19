import { useState } from 'react'
import './App.css'

import ChildComponent from './components/ChildComponent'
import { useCallback } from 'react'

function App() {
  // State to force re-render of the parent component
  const [count, setCount] = useState(0)
  const [toggle, setToggle] = useState(false)
  console.log("Parent(App) rendering....")
  
  // Even when Parent re-renders, Child also re-render if we do not use memo() funtion
  // unless 'count' prop changes (thanks to React.memo)
  


  //calling output showing on console
  //useCallbace remind the callback function(cache)
  const handleIncreament = useCallback(   //now the parent component will be re-rendered when the handleIncrement component will be called()/ change the value of count through handleIncrement --- Now, if toggle button is clicked then the childComponent will not be re-render
    ()=>{
    setCount(count+1);
  },
    [count],
  )
  

  return (
    <>
    {toggle? "on" : "off"}
    <button onClick={()=>setToggle(!toggle)}>Toggle</button>   
    <h1>Count: {count}</h1>
    <button onClick={()=>setCount(count+1)}>Increase</button>
    <ChildComponent handleIncreament={handleIncreament}></ChildComponent>
    </>
  )
}

export default App
