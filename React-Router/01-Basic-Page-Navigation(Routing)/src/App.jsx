import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";

function App() {
  
  //output can show at browser by using-->> /,/home,/blogs,/contact after adding at the end local host link
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/blogs' element={<Blogs/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
