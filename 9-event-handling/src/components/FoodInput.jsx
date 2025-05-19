import styles from "./FoodInput.module.css";

const FoodInput = () => {

  const handleOnChange = (event) =>{
    console.log(event.target.value)
  }


  return <>
    <input type="text" name="" id="" placeholder="Enter Food Item here" className={styles["input-container"]} onChange = {handleOnChange}/>
  </>;
};

export default FoodInput;
