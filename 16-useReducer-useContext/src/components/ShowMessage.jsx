import { todoItemContext } from "../store/todo-item-store";
import styles from "./ShowMessage.module.css"
import { useContext } from "react";

const ShowMessage = () =>{

    const todoItems = useContext(todoItemContext);
    return <>
        {todoItems.length === 0 && <p className={styles.para}>There is no item to do. Add to do items here.</p>}
    </>
    
}


export default ShowMessage;