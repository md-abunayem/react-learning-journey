import styles from "./Item.module.css";
const Item = ({ foodItem, handleBuyButton }) => {
  // let {foodItem} = props;  //Object destructuring

  return (
    <li className={`${styles.items} list-group-item`}>
      {foodItem}
      <button
        // className={`${styles["buy-button"]} btn btn-success`}
        // onClick={buyFoodEventHandle} //for this we can not pass any argument to the function
        className={`${styles["buy-button"]} btn btn-success`}
        onClick={(event)=> handleBuyButton(event,foodItem)}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;

// list-group-item items
