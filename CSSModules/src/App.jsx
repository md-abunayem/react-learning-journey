import ErrorMessage from "./components/ErrorMessage";
import FoodsItems from "./components/FoodsItems";
import "./App.css";

function App() {
  let foodItems = ["Dal", "Meet", "Green Vegitable", "Milk", "Salad"];
  return (
    <>
     <h1>Healthy Foods</h1>
      <ErrorMessage foodItems = {foodItems}></ErrorMessage>
      <FoodsItems foodItems = {foodItems}></FoodsItems>
    </>
  )
}

export default App
