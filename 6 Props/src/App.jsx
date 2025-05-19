// import './App.css'
import FoodItems from "./components/FoodItems";
import EmptyMessage from "./components/EmptyMessage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let foodsItems = ["Dal","Vagies","Ghee","Salad","Milk"];
  
  return (
    <>
      <h1>Healthy Foods</h1>
      <EmptyMessage foodItems = {foodsItems}></EmptyMessage>
      <FoodItems foodItems = {foodsItems}></FoodItems>
    </>
  );
}

export default App;
