import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NavBar from './components/NavBar';
import Blog from './components/Blog';
import User from './pages/User';
import AddBlog from './pages/AddBlog';
import Protected from './components/Protected';
import { useState } from 'react';


function App() {
  

  const [isLogedIn, setIsLogedIn] = useState(false);
  
  return (
    <>
      <BrowserRouter>
      <NavBar></NavBar>
      {isLogedIn ? <button onClick={()=>setIsLogedIn(!isLogedIn)}>Log Out</button>: <button onClick={()=>setIsLogedIn(!isLogedIn)}>Log In</button>}
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/blogs' element={<Blogs/>}></Route>
          <Route path='/blogs/:title' element={<Blog/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/add-blog' element={<Protected isLogedIn={isLogedIn}><AddBlog/></Protected>}></Route>
          <Route path='/user' element={<User/>}></Route> 
          <Route path='/user/:userId' element={<User/>}></Route>  
          {/* it is used  for query parameter */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
