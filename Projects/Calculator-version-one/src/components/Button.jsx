import styles from "./Button.module.css";

const Button = ({signs}) => {
  

  return (
    <>
      {signs.map((sign) => (
        <button className={styles["button"]}>{sign}</button>
      ))}
    </>
  );
};

export default Button;
