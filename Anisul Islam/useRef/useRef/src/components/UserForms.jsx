import React from "react";
import { useRef } from "react";

const UserForms = () => {
  const userNameRef = useRef();
  const userPassRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const userName = userNameRef.current.value;
    const userPass = userPassRef.current.value;

    console.log(userName);
    console.log(userPass);

    userNameRef.current.value = "";
    userPassRef.current.value = "";

    /*refContainer.current is a property of the object returned by React's useRef hook. It:
    Stores Values: Holds a mutable value that persists across renders.
    Accesses DOM Elements: References DOM nodes for direct interaction (e.g., focusing an input).
    Doesn't Trigger Re-renders: Updating refContainer.current won't cause the component to re-render.
    It’s useful for managing DOM elements or values that need to persist without affecting the component's rendering.*/
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userName">User Name: </label>
          <input type="text" id="userBane" ref={userNameRef} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" name="" id="password" ref={userPassRef} />
        </div>
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default UserForms;
