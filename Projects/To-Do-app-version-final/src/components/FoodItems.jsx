import Item from "./Item";

import { useState } from "react";

const FoodItems = ({ foodItems }) => {
  let [activeItems, setActiveItems] = useState([]);

  const handleBuyButton = (event, item) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
    //this foodItem is passed as argument from child component(Item.jsx) and here event and foodItem is used as paramenter......child to parent communication.....
    console.log(event);
    console.log(event.target);
    console.log(event.type);
    console.log(event.clientX);
    console.log(event.clientY);
    console.log(`${item} is bought....`);
  };
  return (
    <ul className="list-group">
      {foodItems.map((item) => (
        <Item
          foodItem={item}
          key={item}
          bought={activeItems.includes(item)}
          // if current item is exist in the array or not, if yes then it will return true and color will be applied , then it will return true --->>here, item means  current item
          handleBuyButton={(event) => handleBuyButton(event, item)}
        ></Item>
      ))}

      {/* we use () for map like method for directly return the elements without using return keyword. If we use parenthise we heve to write return keyword before the element */}
    </ul>
  );
};

export default FoodItems;
