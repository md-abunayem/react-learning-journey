import React from 'react'

const Todo = ({post}) => {
  return (
    <div style={{backgroundColor:"gray",borderRadius:"10px", padding:"10px",margin:"10px"}}>
        <h3>{post.title}</h3>
        <p>Completed: {post.completed}</p>
    </div>
  )
}

export default Todo