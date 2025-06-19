import {createContext,useState} from "react";

export const TodoContext = createContext();


const TodoProvider = ({children}) =>{

    const [todos, setTodos]=useState([{title:"go to gym", description:"after 1 years"}]);

    return <TodoContext.Provider value = {{todos,setTodos}}>{children}</TodoContext.Provider>
}

export default TodoProvider;