import React from "react";
import styles from "./Profile.module.css"; // Import the CSS Module
import {useLocation} from "react-router-dom";

function Profile() {
  const {state} = useLocation();
  console.log(location); 
  const user = {
    name: "Md. Abu Nayem",
    bio: "Frontend Developer | React Enthusiast",
    avatar: "src/assets/image.png",  
  };

  return (
    <>
    {state ? 
    <div className={styles.profileContainer}>
      <div className={styles.profileCard}>
        <img src={user.avatar} alt="Avatar" className={styles.avatar} />
        <h1 className={styles.name}>{user.name}</h1>
        <p className={styles.bio}>{user.bio}</p>
        <p>University: {state.university}</p>
        <p>City: {state.city}</p>
        <p>Country: {state.country}</p>
        <button className={styles.editButton}>Edit Profile</button>
      </div>
    </div> : <p>Please Log In before try to go to the profile......</p>
    }
    </>
  );
}

export default Profile;