import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import { useState } from "react";

Component2;

import { UserContext } from "./components/UserContext";

function App() {
  const [user, setUser] = useState({ name: "Nayem", id: 101 });
  const [text, setText] = useState("This the use of useContext API/Hook.");

  return (
    <>
      <UserContext.Provider value={{ user, text }}>
        <Component2></Component2>
        <Component1></Component1>
      </UserContext.Provider>
    </>
  );
}

export default App;
