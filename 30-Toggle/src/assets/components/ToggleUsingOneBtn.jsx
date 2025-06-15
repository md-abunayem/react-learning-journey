import React, { useState } from 'react'

const ToggleUsingOneBtn = () => {
    const [toggle,setToggle]=useState(true);
  return (
    <div>
        {toggle && <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nulla, nihil sed dolores quibusdam quam quaerat, ullam asperiores saepe, at ea aliquam voluptatem dignissimos? Doloremque ipsa explicabo quos odit? Accusantium.
        </p>}
        <button onClick={()=>setToggle(!toggle)}>{toggle ? "Hide" : "Show"}</button>
    </div>
  )
}

export default ToggleUsingOneBtn;