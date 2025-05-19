import Button from "./Button";
import styles from "./Buttons.module.css";


const Buttons = () => {

    const signs = [
        "C",
        "1",
        "2",
        "+",
        "3",
        "4",
        "-",
        "5",
        "6",
        "*",
        "7",
        "8",
        "/",
        "9",
        "0",
        ".",
        "=",
      ];

  return (
    <>
      <div className={styles["buttons-container"]}>
        <Button signs = {signs}></Button>
      </div>
    </>
  );
};

export default Buttons;
