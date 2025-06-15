import React from 'react';


const DisplayDetails = ({userDetails}) => {
  return (
    <>
        <h5>Name: {userDetails?.name}</h5>
        <h5>Email: {userDetails?.email}</h5>
        <h5>Password: {userDetails?.password}</h5>
    </>
  )
}

export default DisplayDetails