
import Header from "./layout/Header";
import { Outlet } from "react-router-dom";

function App() {

  //Pass and receive data when routing
  //-1. design the user profile
  //-2. use state to pass data
  //-3. useLocation() : receive data while routing between signin and profile page 

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
}

export default App;
