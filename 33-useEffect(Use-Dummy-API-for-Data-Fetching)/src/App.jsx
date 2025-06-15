import { useEffect } from "react";
import { useState } from "react";

import Todos from "./components/Todos";

function App() {
  const [posts, setPosts] = useState(null);
  const [isLoading,setIsLoading] = useState(true);
  const [error ,setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => {
          if(!res.ok){
            throw Error("Fetching is not successful")
          }
          return res.json();
        })
        .then((data) => {
          setPosts(data);
          setIsLoading(false);
          setError(null)  //no error is occured 
          console.log(data);
        })
        .catch((error)=>{
          setIsLoading(false);
          setError(error.message);
          
        });
  }, []);

  return (
  <>
    <h1>Todo Lists</h1>

    {error && <p style={{ color: "red" }}>{error}</p>}

    {isLoading && <p>Loading todos....</p>}

    {!isLoading && !error && posts && <Todos posts={posts} />}
  </>
);

}

export default App;
