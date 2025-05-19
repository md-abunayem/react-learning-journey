import Title from "./components/Title";
import FoodInput from "./components/FoodInput";
import FoodItems from "./components/FoodItems";
import EmptyMessage from "./components/EmptyMessage";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import Container from "./components/Container";

import {useState} from "react";

function App() {
  // let foodsItems = ["Dal", "Vagies", "Ghee", "Salad", "Milk"];

  // In React, state is an object that holds dynamic data for a component. When the state changes, React automatically re-renders the component to update the UI based on the new state. State is managed using the useState hook in functional components or this.state and this.setState in class components.

  // let textStateArr = useState("Food Item Entered by the User");
  //useState() returns an array with two element...1. current value of state... 2. function to set updated value 
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];

  let [foodsItems, setFoodsItems]= useState([]);  //used array destructuring


  const handleOnKeyDown = (event) => {
    // console.log(event.target.value);
    if(event.key == "Enter"){
      let newFoodItem = event.target.value;
      let newFoodItems =  [...foodsItems, newFoodItem]
      event.target.value = "";   //it will clear the input box on UI....beacause it sets the value as empty of targeted element
      setFoodsItems(newFoodItems)
    }
    // console.log(event)
  };

  return (
    <>
      <Container>
        <Title></Title>
        <FoodInput handleOnKeyDown={handleOnKeyDown}></FoodInput>
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
