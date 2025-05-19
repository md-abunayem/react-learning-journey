import styles from "./ShowMessage.module.css"

import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const ShowMessage = () =>{

    const todoItems = useContext(TodoItemsContext);

    return <>
        {todoItems.length === 0 && <p className={styles.para}>There is no item to do. Add to do items here.</p>}
    </>
    
}


export default ShowMessage;