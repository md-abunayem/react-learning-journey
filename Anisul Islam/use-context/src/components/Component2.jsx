import React from 'react';
import { useContext } from 'react';
import { UserContext } from './UserContext';


const Component2 = () => {
  const {user,text} = useContext(UserContext);

  return (
    <>
    <h1>{text}</h1>
    </>
  )
}

export default Component2;