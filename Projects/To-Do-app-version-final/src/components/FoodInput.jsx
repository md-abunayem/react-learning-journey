import styles from "./FoodInput.module.css";

const FoodInput = ({handleOnKeyDown}) => {

  return <>
    <input type="text" name="" id="" placeholder="Enter Food Item here" className={styles["input-container"]} onKeyDown = {handleOnKeyDown}/>
  </>;
};

export default FoodInput;
