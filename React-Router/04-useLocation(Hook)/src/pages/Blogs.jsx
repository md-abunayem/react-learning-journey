import React from 'react'
import {useNavigate, Link } from "react-router-dom";
import { useState } from 'react';


import data from "../data/data.json";
import styles from "./Blogs.module.css";


const Blogs = () => {

  const [blogs, setBlogs] = useState(data);
  const navigate = useNavigate();  //for redirecting 
  
  const truncateDescription = (description, numOfChar) =>{
    if(description.length > numOfChar){
      return description.slice(0, numOfChar) + "...";
    }else{
      return description;
    }
  }

  return (
    <div>
        <h1>Blogs</h1>
        <section>
          {
            blogs.map((blog)=>{
              const {id, title, description} = blog;
              return <article key={id}>
                <h3>{title}</h3>
                <p>{truncateDescription(description,50)}</p>
                <Link to={`/blogs/${title}`}>Learn more</Link>
              </article>
            })
          }
        </section>

        <button onClick={()=>navigate("/")}>Go to Home</button>

    </div>
  )
}

export default Blogs