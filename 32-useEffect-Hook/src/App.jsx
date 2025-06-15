import { useEffect } from "react"
import { useState } from "react"


/*🔄 What is useEffect?
useEffect is a React Hook that lets you perform side effects in your function components.

📌 Side effects include:

1.Fetching data from an API
2.Updating the DOM
3.Setting up subscriptions or timers
4.Local storage operations
*/

function App() {
  const [count, setCount] = useState(0)
  const [loding, setLoading] = useState(false)

  /*
  useEffect(() => {
    console.log("useEffect");
  })   //without dependencies->render at evry rendering(Runs after every render (not recommended usually))
  */


  /*
  useEffect(() => {
    console.log("useEffect");
  },[])  //Runs once after the first render (like componentDidMount)
*/

  useEffect(() => {
    console.log("useEffect");
  },[count]);   //Runs every time any dependency changes(re-render at every change of count but not dependent on isLoading(when isLoading is changes it does not re-render))


  return (
    <>
      <div>
        {console.log("Rendering")}
        <p>Count: {count}</p>
        <button type="button" onClick={()=>setCount(count+1)}>Increase</button>
        <button onClick={()=>setLoading(!loding)}>isLoading</button>
      </div>
    </>
  )
}

export default App
