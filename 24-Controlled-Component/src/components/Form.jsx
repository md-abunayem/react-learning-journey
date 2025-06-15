import React from "react";
import styles from "./Form.module.css";
import { useState } from "react";

const FORM = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
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
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default FORM;
