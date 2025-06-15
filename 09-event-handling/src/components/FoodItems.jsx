import Item from "./Item";

const FoodItems = ({foodItems}) => {
    
  return (
    <ul className="list-group">
      {foodItems.map((item) => (
       <Item foodItem = {item} key={item}></Item>
      ))}

      {/* we use () for map like method for directly return the elements without using return keyword. If we use parenthise we heve to write return keyword before the element */}
    </ul>
  );
};

export default FoodItems;
