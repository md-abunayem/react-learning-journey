import { useState } from "react";
import Component1 from "../components/Component1";

import { UserContext } from "../components/context/UserContext";
function App() {
  const [user, setUser] = useState({ id: 101, name: "Nayem" });

  const [text, setText] = useState("Text to show");

  return (
    <UserContext.Provider value={{user, text}}>
      <Component1></Component1>
    </UserContext.Provider>
  );
}

export default App;

/*Work Flow:
  step-1: create context using createContext()
  step-2: wrap childs with context provider
  step-3: state access using useContext hool
*/
