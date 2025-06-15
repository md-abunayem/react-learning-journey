
import Todos from "./components/Todos";
import useFetch from "./components/useFetch";

function App() {
  
  const {data, isLoading, error} = useFetch("https://jsonplaceholder.typicode.com/todos");
  

  return (
  <>
    <h1>Todo Lists</h1>

    {error && <p style={{ color: "red" }}>{error}</p>}

    {isLoading && <p>Loading todos....</p>}

    {!isLoading && !error && data && <Todos posts={data} />}
  </>
);

}

export default App;
