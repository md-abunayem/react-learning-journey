import React from "react";
import { useState } from "react";

import PropTypes from 'prop-types';

console.log(PropTypes);

const User = ({ name, id, salary , details}) => {
  return (
    <>
      <h4>Name: {name}</h4>
      <p>Id: {id}</p>
      <p>Salary: {salary}</p>
      <p>Age: {details.age}</p>
      <p>Gender: {details.gender}</p>
    </>
  );
};

User.propTypes = {
    //key-value pairs
    name : PropTypes.string.isRequired,
    id : PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    
    salary:PropTypes.number,

    // details: PropTypes.object   //for object
    details: PropTypes.shape({
        age: PropTypes.number,
        gender: PropTypes.string
    })



}

User.defaultProps = {
    name : "Default Name",
    id: 0
}

export default User;
