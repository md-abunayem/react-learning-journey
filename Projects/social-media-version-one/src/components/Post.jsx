import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { TiDelete } from "react-icons/ti";

import { PostLists } from "../store/post-list-store";

import style from "./Post.module.css";

const Post = ({ post }) => {

  const {deletePost} = useContext(PostLists);


  return (
    <>
      <div className={`card ${style.postCard}`} style={{ width: "30rem" }}>
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill" onClick = {()=>{deletePost(post.id)}}>
          <TiDelete className={style.deleteIcon}/>
            <span className="visually-hidden">unread messages</span>
          </span>
          {post.tags.map((tag) => (
            <span className={`badge text-bg-info ${style.tag}`} key={uuidv4()}>
              {`#${tag}`}
            </span>
          ))}
          <div className={`alert alert-info ${style.reactions}`} role="alert">
           This post is reacted  by {post.reactions.likes} peoples
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
