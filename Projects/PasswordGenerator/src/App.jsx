import { useState, useCallback } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [specialcCharAllowed, setSpecialCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (specialcCharAllowed) {
      str += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    }
    if (numberAllowed) {
      str += "0123456789";
    }

    for (let index = 0; index < length; index++) {
      let char = Math.floor(Math.random() * str.length);
      str += str[char];
    }

    setPassword(password);
    console.log(password);
  }, [length, numberAllowed, specialcCharAllowed, password]);

  return (
    <>
      <div className="w-full max-w-md max-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-500">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="djfhgfgfh"
          readOnly
        ></input>
      </div>
    </>
  );
}

export default App;
