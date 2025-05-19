import Item from "./Item";

const FoodsItems = ({foodItems}) => {
    
    return (
        <ul class="list-group">
        {foodItems.map((item) => (
          <Item key={item} foodItem = {item}></Item>
        ))}
      </ul>
    )
}

export default FoodsItems;