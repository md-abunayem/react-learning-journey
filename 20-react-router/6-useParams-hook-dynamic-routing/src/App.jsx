
import Header from "./layout/Header";
import { Outlet } from "react-router-dom";

function App() {

  //useParams() is used in the product details

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
}

export default App;
