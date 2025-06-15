import { useState } from 'react'


import UserForm from './components/UserForm';
import DisplayDetails from './components/DisplayDetails';

function App() {
  const [userDetails, setUserDetails] = useState(null);


  return (
    <>
    <h1>User From</h1>
    <UserForm setUserDetails={setUserDetails}></UserForm>
    <h1>User Information:</h1>
    <DisplayDetails userDetails={userDetails}></DisplayDetails>
    </>
  )
}

export default App
