import React, { useState } from 'react'

const Toggle = () => {
    const [toggle,setToggle]=useState(true);
  return (
    <div>
        {toggle && <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nulla, nihil sed dolores quibusdam quam quaerat, ullam asperiores saepe, at ea aliquam voluptatem dignissimos? Doloremque ipsa explicabo quos odit? Accusantium.
        </p>}
        <button onClick={()=>setToggle(true)}>Show</button>
        <button onClick={()=>setToggle(false)}>Hide</button>
    </div>
  )
}

export default Toggle