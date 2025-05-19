import React from 'react';
import {Link, Outlet} from "react-router-dom";

import style from "./Header.module.css";

const Header = () => {
  return (
    <>
    <div className={style.header}>
        <p className={style.logo}>MyApp</p>
        <ul className={style.navElement}>
            <Link to="/Home">Home</Link>
            <Link to="/Product">Product</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/SignIn">SignIn</Link>
        </ul>
    </div>
    </>

  )
}

export default Header