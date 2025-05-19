import Item from "./Item";

const FoodItems = ({foodItems}) => {
    
  const handleBuyButton = (event,foodItem) => {
    //this foodItem is passed as argument from child component(Item.jsx) and here event and foodItem is used as paramenter......child to parent communication..... 
    console.log(event)
    console.log(event.target)
    console.log(event.type)
    console.log(event.clientX)
    console.log(event.clientY)
    console.log(`${foodItem} is bought....`);
  };
  return (
    <ul className="list-group">
      {foodItems.map((item) => (
       <Item foodItem = {item} key={item} handleBuyButton={handleBuyButton}></Item>
      ))}

      {/* we use () for map like method for directly return the elements without using return keyword. If we use parenthise we heve to write return keyword before the element */}
    </ul>
  );
};

export default FoodItems;
