import React from "react";
import { useState } from "react";

function Welcome() {
  return <h1>Welcome</h1>;
}

//under the hood

function WelcomeUnderTheHood() {
  return React.createElement("h1", {}, "Welcome for under the hood process");
}

function Todo() {
  return (
    <div>
      <h1>Todo Title</h1>
      <p>Todo Desc</p>
    </div>
  );
}

function TodoUnderTheHood() {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Todo Title(Under the Hood)"),
    React.createElement("p", {}, "Todo desc")
  );
}

function App() {

  return (
    <>
      <Welcome></Welcome>
      <hr />
      <WelcomeUnderTheHood></WelcomeUnderTheHood>
      <hr />
      <Todo></Todo>
      <hr />
      <TodoUnderTheHood></TodoUnderTheHood>
    </>
  );
}

export default App;
