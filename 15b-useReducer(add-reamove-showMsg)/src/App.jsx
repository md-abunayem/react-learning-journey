import { useReducer } from 'react'
import { useState } from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';



const reducer=(state, action)=>{
  if (action.type === "ADD") {
    return {
      ...state,
      bookData: [...state.bookData, action.payload],
      isBookAdded: "true"
    };
  }else if (action.type === "DELETE") {
    const newBooks = state.bookData.filter((book)=>book.id !== action.payload)
    return {...state, bookData:newBooks }
  }
}

const TextToShow =()=>{
  return <p>Book is Added....</p>
}



function App() {
  const bookData = [{id:1, name: "Pankowri"}, {id:2, name:"Book2"}]

  const [book, setBook] = useState({id:Date.now(), name: ""});

  const [state,dispatch] = useReducer(reducer, {bookData, TextToShow, isBookAdded: "false"});

  const handleChange=(event)=>{
    setBook({id: Date.now(),name:event.target.value});
    console.log(book)
  }



  const addBook =(event)=>{
    event.preventDefault();
    dispatch({type:"ADD", payload: book})
  }


  const deleteBook = (id)=>{
    dispatch({type:"DELETE", payload: id});
  }

  return (
    <>
    <form onSubmit={addBook}>
      <div>
        <label htmlFor="name">Name: </label>
      <input type="text" name="name" id="name" onChange={handleChange}/>
      </div>
      {state.isBookAdded && <TextToShow></TextToShow>}
      <button type="submit">Add</button>
    </form>

    <h3>List of Books:</h3>
    <ol>
      {state.bookData.map((book)=><li key={book.id}>{book.name}
      <FontAwesomeIcon icon={faTrash} style={{color:"red", padding: "0 30px"}} onClick={()=>{deleteBook(book.id)}}/>

      </li>)}
    </ol>

    </>
  )
}

export default App
