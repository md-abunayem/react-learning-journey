import styles from "./Button.module.css";

const Button = ({ signs, handleOnClick }) => {
  return (
    <>
      {signs.map((sign) => (
        <button
          className={styles["button"]}
          key={sign}
          onClick={(event,sign)=>handleOnClick(event,sign)}
        >
          {sign}
        </button>
      ))}
    </>
  );
};

export default Button;
