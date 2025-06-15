import React from 'react'
import {useRef} from "react";
import DisplayDetails from './DisplayDetails';

const UserForm = ({setUserDetails}) => {

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();


    const handleSubmit = (event) =>{
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        const userDetails = {
            name, email, password
        }   

        setUserDetails(userDetails);
    }

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Name: </label>
        <input type="text" name="name" id="name"  ref={nameRef}/>
        </div>
        <div>
            <label htmlFor="email">Email: </label>
        <input type="text" name="email" id="email"  ref={emailRef}/>
        </div>
        <div>
            <label htmlFor="password">password: </label>
        <input type="password" name="password" id="password"  ref={passwordRef}/>
        </div>

        <button type="submit">Submit</button>
    </form>
  )
}

export default UserForm