import React from 'react';
import { useContext } from 'react';
import { UserContext } from './UserContext';

const Component1 = () => {
  
  const {user,text} = useContext(UserContext);
 
  return (
    <>
      <p>Name: {user.name}</p>
      <p>Id:{user.id}</p>

    </>
  )
}

export default Component1;