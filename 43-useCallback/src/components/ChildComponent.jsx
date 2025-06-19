import React from 'react'
import {memo} from "react";

const ChildComponent = ({handleIncreament}) => {
    console.log("ChildComponent is redering...")
  return (
    <>
    <h1>ChildComponent</h1>
    <button onClick={handleIncreament}>Increase from Child Component</button>
    </>
  )
}

export default memo(ChildComponent);


//if child get any props from parent then when the props state value become changed then the child component also rerender. If the props value stay same as previus then it won't rerender.