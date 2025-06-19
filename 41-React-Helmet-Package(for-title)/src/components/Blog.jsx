import React from "react";
import { useParams } from "react-router-dom";

import data from "../data/data.json";
import { useState } from "react";
import { useEffect } from "react";

const Blog = () => {
  const [description, setDescription] = useState("");

  const { title } = useParams(); // ✅ extract the route param   -->>from ....../blogs/1 ->>> 1 <--takes
  //for this component, it takes tittle from the end of the blogs(blogs/{title})

  useEffect(() => {
    const blogData = data.filter((blog) => blog.title === title); //blogData-> takes only description,
    setDescription(blogData[0].description);    //after filtering of the array(data) --it returns only one value inside blogData(it is also become array because of filter method --->>then use blogData[0].description to get the description value--Note:after filterring the filter method can return multiple value , so that the blogData becomes an arrya)
  }, []);

   // Filter the 'data' array to get all blogs matching the 'title'
  // Since filter returns an array (could have multiple matches), 
  // we take the first element with blogData[0] assuming titles are unique
  // Then we access the description property of that blog object

  return <div>
    <h2>{title}</h2>
    {description}
    </div>;
};

export default Blog;
