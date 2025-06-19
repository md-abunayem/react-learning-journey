import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NavBar from './components/NavBar';
import Blog from './components/Blog';


function App() {
  
  //output can show at browser by using-->> /,/home,/blogs,/contact after adding at the end local host link
  return (
    <>
      <BrowserRouter>
      <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/blogs' element={<Blogs/>}></Route>
          <Route path='/blogs/:title' element={<Blog/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
