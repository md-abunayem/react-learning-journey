import { createContext } from "react";

export const todoItemContext = createContext({
    todoItems: [],
    handleNewItem: ()=>{},
    handleDeleteItem: ()=>{}
})