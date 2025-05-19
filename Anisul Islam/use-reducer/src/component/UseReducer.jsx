import React from "react";
import { useState,useReducer } from "react";
import ModalText from "./ModalText";

//action---add,delete,remove,update
const reducer = (state,action) =>{
  //action.type, action.payload
  if(action.type === "ADD"){
      const allBooks = [...state.books, action.payload];
      return {
        ...state,
        books: allBooks,
        isModalOpen: true,
        modalText: "Book is added"
      }
  }
  if(action.type === "REMOVE"){
      const filterBooks = [...state.books].filter((book)=> book.id !==action.payload)

      return {
        ...state,
        books:filterBooks,
        isModalOpen: true,
        modalText: "Book is removed."
      }
  }
  
}



const UseReducer = () => {

  const bookData = [
    { id: 1, name: "Pather Panchal" },
    { id: 2, name: "Padma Nodir Majhi" },
    { id: 3, name: "Srikanta" },
  ];
  
  // const [books, setBooks] = useState(bookData);
  // const [modalText, setModalText]=useState("");
  // const[isModalOpen, setIsModalOpen]=useState(false);
  const [bookName, setBookName] = useState("");


  

  //dispatch can be add, delete, update, etc...
  //dispacth call action
  const [bookStates, dispatch] = useReducer(reducer,{
    books: bookData,     //initial values which we provide as initial state for useState() hook
    modalText: "",
    isModalOpen: false
  })   //useReducer(reducer function, initial states of necessary useState hooks)
  

  const handleNewBook=(event)=>{
      setBookName(event.target.value);
      
  }

  const addNewBook  =(event)=>{
    event.preventDefault();
    const newBook = {id: new Date().getTime().toString(), name:bookName};

    dispatch({type:"ADD", payload : newBook});
    setBookName("");
    

    // setBooks((currentBooks)=>{
    //     const newBook = {id: new Date().getTime().toString(), name:bookName};
    //     return [...currentBooks,newBook]
    // });
    // setIsModalOpen(true);
    // setModalText("Book is added")
  }


  const removeBook = (id) =>{

    dispatch({type:"REMOVE", payload: id})
      
  }
  return <>
        <h3>Book List</h3>
        <form onSubmit={addNewBook}>
            <input type="text" name="" id="" value={bookName} onChange={handleNewBook}/>
            <button type="submit">Add Book</button>
        </form>

        {bookStates.isModalOpen && <ModalText modalText={bookStates.modalText}></ModalText>}

        {bookStates.books.map((book)=>{
          const {id, name} = book;
          return <li key={id}>{name} <button type="button" onClick={()=>{removeBook(id)}} >Remove</button></li>
        })}
  </>;
};

export default UseReducer;
