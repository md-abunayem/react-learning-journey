import { useState } from 'react'
import './App.css'

import ChildComponent from './components/ChildComponent'

function App() {
  // State to force re-render of the parent component
  const [count, setCount] = useState(0)
  console.log("Parent(App) rendering....")
  
  // Even when Parent re-renders, Child also re-render if we do not use memo() funtion
  // unless 'count' prop changes (thanks to React.memo)
  

  return (
    <>
    <h1>Count: {count}</h1>
    <button onClick={()=>setCount(count+1)}>Increase</button>
    <ChildComponent></ChildComponent>
    </>
  )
}

export default App
