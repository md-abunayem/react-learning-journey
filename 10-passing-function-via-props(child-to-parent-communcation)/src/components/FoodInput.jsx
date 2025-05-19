import styles from "./FoodInput.module.css";

const FoodInput = ({handleOnChange}) => {

  return <>
    <input type="text" name="" id="" placeholder="Enter Food Item here" className={styles["input-container"]} onChange = {handleOnChange}/>
  </>;
};

export default FoodInput;
