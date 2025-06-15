import React from 'react'

import {useState} from "react";
import User from './User'


const Users = () => {

    const [name, setName] = useState("Nayem");
    const [id, setId] =useState("101");
    const [salary, setSalary] =useState("34343");

    const [details, setDetails] = useState({age: 23, gender: "male"
    })


  return (
    <User name={name} id={id} salary={salary} details={details}>
        
    </User>
  )
}

export default Users