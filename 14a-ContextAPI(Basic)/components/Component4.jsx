import React from 'react'
import { useContext } from "react";

import { UserContext } from "./context/UserContext";


const compinent4 = () => {
  const {user, text} = useContext(UserContext);
    // console.log(user);
  return (
    <div>
      <h4>Id: {user.id}</h4>
      <p>Name: {user.name}</p>
      <p>Text: {text}</p>
    </div>
  )
}

export default compinent4