import styles from "./Item.module.css";
const Item = ({ foodItem }) => {
  // let {foodItem} = props;  //Object destructuring

  const buyFoodEventHandle = (event) => {
    console.log(event)
    console.log(event.target)
    console.log(event.type)
    console.log(event.clientX)
    console.log(event.clientY)
    console.log(`${foodItem} is bought....`);
  };
  return (
    <li className={`${styles.items} list-group-item`}>
      {foodItem}
      <button
        // className={`${styles["buy-button"]} btn btn-success`}
        // onClick={buyFoodEventHandle} //for this we can not pass any argument to the function
        className={`${styles["buy-button"]} btn btn-success`}
        onClick={(event)=> buyFoodEventHandle(event)}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;

// list-group-item items
