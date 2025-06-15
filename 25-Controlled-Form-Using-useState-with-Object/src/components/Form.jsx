import React from "react";
import styles from "./Form.module.css";
import { useState } from "react";

const FORM = () => {
  const [user, setUser] = useState({name:"",email:"", password:""});
  const {name,email,password} = user;

  const handleNameChange = (e) => {
    setUser({name: e.target.value, email,password});
  };

  const handleEmailChange = (e) => {
    setUser({name, email: e.target.value,password});
  };
  const handlePasswordChange = (e) => {
    setUser({name, email, password:e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let userInfo = {
      name: name,
      email: email,
      password: password,
    };
    console.log(userInfo);
  };
  //output at the console of browser

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div className={styles["div"]}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className={styles["div"]}>
          <label htmlFor="email">email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className={styles["div"]}>
          <label htmlFor="password">password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required

          />
        </div>
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default FORM;
