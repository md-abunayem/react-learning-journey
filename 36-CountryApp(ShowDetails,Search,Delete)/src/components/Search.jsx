import React from "react";
import { useEffect } from "react";
import {useState} from "react"
const Search = ({searchCountry}) => {

    const [search, setSearch] = useState("");
    const handleChange = (event)=>{
        searchCountry(event.target.value);
    }
    
    //we can use useEffect for side effect elimination(or can get real time change at input fields)

  return (
    <>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search Country"
        style={{
          padding: "10px 16px",
          width: "300px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          outline: "none",
          margin: "20px auto",
          display: "block",
          transition: "0.3s",
        }}

        onChange={handleChange}
      />
    </>
  );
};

export default Search;
