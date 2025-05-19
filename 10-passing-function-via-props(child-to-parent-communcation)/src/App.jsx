import Title from "./components/Title";
import FoodInput from "./components/FoodInput";
import FoodItems from "./components/FoodItems";
import EmptyMessage from "./components/EmptyMessage";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import Container from "./components/Container";

function App() {
  let foodsItems = ["Dal", "Vagies", "Ghee", "Salad", "Milk"];

  const handleOnChange = (event) =>{
    console.log(event.target.value)
  }
  
  return (
    <>
      <Container>
        <Title></Title>
        <FoodInput handleOnChange={handleOnChange}></FoodInput>
        <EmptyMessage foodItems={foodsItems}></EmptyMessage>
        <FoodItems foodItems={foodsItems}></FoodItems>
      </Container>

      <Container>
        <p>
          The above list is about healty foods. We have to eat healthy foods
          instad of unhealthy foods.This is need for all the people.
        </p>
      </Container>
    </>
  );
}

export default App;
