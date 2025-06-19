import React from 'react'
import {Link, NavLink} from 'react-router-dom';
import styles from "./NavBar.module.css";
const NavBar = () => {
  return (

    // using NavLink
    <nav className={styles.navbar}>
        <NavLink to={"/"} className={styles.link}>Home</NavLink>
        <NavLink to={"/contact"} className={styles.link}>Contact</NavLink>
        <NavLink to={"/blogs"} className={styles.link}>Blogs</NavLink>
        <NavLink to={"/user"}>User</NavLink>



        {/* //using Link */}
        {/* <Link to={"/"} className={styles.link}>Home</Link>
        <Link to={"/contact"} className={styles.link}>Contact</Link>
        <Link to={"/blogs"} className={styles.link}>Blogs</Link> */}
    </nav>
  )
}

export default NavBar