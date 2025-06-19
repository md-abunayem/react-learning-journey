import axios from "axios";
import { useEffect, useState } from "react";

// run db.json as server using --->>>http: npx json-server -p 3001 -w database/db.json---->>>> at different terminal from front end
//This can use as backend when learning front-end

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState("");

  //Fetch data using axios....Note that, we can also fetch data using fetch API
  const getAllUsers = async () => {
    const response = await axios.get("http://localhost:3001/users"); //url of the running port --->> can copy and paste after running the json-server to the browser and then copy the url

    setUsers(response.data);

    /*
    console.log(response.data);
    console.log(response.data);   //data at data property of response obj
    */
  };

  //render only first time 
  useEffect(() => {
    getAllUsers();
  }, []);



  //add user to the server(json-server) using axios...You can also add data manually
  const handleSubmit =async (event)=>{
    event.preventDefault();
    const newUser ={name, email};
    await axios.post("http://localhost:3001/users", newUser)
  }

  //after submittind data using the registration form refresh json-server(backend) tab at the browser and then refresh the frontend app to see new added data

  return (
    <>
    <h1>Registration</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        </div>
        <button type="submit">Add User</button>
      </form>

      {users.map((user) => {
        return (
          <div
            key={user.id}
            style={{
              border: "1px solid #ccc",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
              padding: "20px",
              width: "250px",
              backgroundColor: "#fff",
              transition: "transform 0.2s",
              margin: "10px",
            }}
          >
            <h1>Id : {user.id}</h1>
            <h4>Name : {user.name}</h4>
            <p>Email : {user.email}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
