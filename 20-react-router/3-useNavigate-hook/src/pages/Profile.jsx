import React from "react";
import styles from "./Profile.module.css"; // Import the CSS Module

function Profile() {
  // Example user data
  const user = {
    name: "Md. Abu Nayem",
    bio: "Frontend Developer | React Enthusiast",
    avatar: "src/assets/image.png",  
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileCard}>
        <img src={user.avatar} alt="Avatar" className={styles.avatar} />
        <h1 className={styles.name}>{user.name}</h1>
        <p className={styles.bio}>{user.bio}</p>
        <button className={styles.editButton}>Edit Profile</button>
      </div>
    </div>
  );
}

export default Profile;