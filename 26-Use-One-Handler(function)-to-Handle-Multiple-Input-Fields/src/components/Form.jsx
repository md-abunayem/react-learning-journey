import React from "react";
import styles from "./Form.module.css";
import { useState } from "react";

const FORM = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const { name, email, password } = user;

    /*const user = { name: "Alice", age: 25 };
    const updatedUser = { ...user, age: 30 };

    console.log(updatedUser); // { name: "Alice", age: 30 }
    */
  const handleChange = (e) => {
    //use spread operator to update
    setUser({ ...user, [e.target.name]: e.target.value });   // [e.target.name]: e.target.value => object literals

    /*
    if (e.target.name === "name") {
      setUser({ name: e.target.value, email, password });
    } else if (e.target.name === "email") {
      setUser({ name, email: e.target.value, password });
    } else if (e.target.name === "password") {
      setUser({ name, email, password: e.target.value });
    }

    */
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default FORM;
