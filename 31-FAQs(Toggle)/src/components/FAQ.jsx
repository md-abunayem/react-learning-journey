import React, { useState } from 'react'

const FAQ = ({singleData}) => {
    const [toggle,setToggle] = useState(true);
  return (
    <div style={{backgroundColor:"gray",borderRadius:"10px",padding:"10px",margin:"10px"}}>
        <div style={{display: "flex", justifyContent:"space-between"}}>
            <h3>{singleData.title}</h3>
            <button style={{height:"20px"}} onClick={()=>setToggle(!toggle)}>{toggle ? "-": "+"}</button>
        </div>
        {toggle && <p>{singleData.description}</p>}
    </div>
  )
}

export default FAQ