import Title from "./components/Title";
import FoodItems from "./components/FoodItems";
import EmptyMessage from "./components/EmptyMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'


function App() {
  let foodsItems = ["Dal","Vagies","Ghee","Salad","Milk"];
  
  return (
    <>
      <Title></Title>
      <EmptyMessage foodItems = {foodsItems}></EmptyMessage>
      <FoodItems foodItems = {foodsItems}></FoodItems>
    </>
  );
}

export default App;
