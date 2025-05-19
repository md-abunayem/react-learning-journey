import Display from "./components/Display";
import AppName  from "./components/AppName";
import Buttons from "./components/Buttons";
import "./App.css";



function App() {
  return (
    <>
      <AppName></AppName>
      <div className="calculator">
        <Display></Display>
        <Buttons></Buttons>
      </div>
    </>
  );
}

export default App;
