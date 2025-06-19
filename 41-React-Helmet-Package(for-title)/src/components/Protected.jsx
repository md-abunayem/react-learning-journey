import React from 'react';
import {Navigate} from 'react-router-dom';

const Protected = ({isLogedIn, children}) => {

  if(!isLogedIn){
    return <Navigate to={"/"} replace/>
  }else{
    return children;
  }
}

export default Protected