import React, { useContext, useRef } from "react";
import { PostLists } from "../store/post-list-store";
import {v4 as uuidv4} from 'uuid';

const CreatePost = () => {
  const { addPost } = useContext(PostLists);
  const postTitleElement = useRef("");
  const postDescriptionElement = useRef("");
  const postReactionElement = useRef("");
  const postTagsElement = useRef("");
  const userIdElement = useRef("");

  const handleSubmit = (event) => {
    event.preventDefault();
    

    const post = {
      
      id: uuidv4(),
      title: postTitleElement.current.value,
      body: postDescriptionElement.current.value,
      reactions: {likes: parseInt(postReactionElement.current.value) || 0},
      userId: userIdElement.current.value,
      tags: postTagsElement.current.value.split(" ").filter(tag => tag.trim() !== ""),
    };

    postTitleElement.current.value = "";
    postDescriptionElement.current.value= "";
    postReactionElement.current.value = "";
    userIdElement.current.value="";
    postTagsElement.current.value="";

    addPost(post)
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="postTitle" className="form-label">
            Post Title
          </label>
          <input
            ref = {postTitleElement}
            type="text"
            className="form-control"
            id="postTitle"
            aria-describedby="emailHelp"
            placeholder="Enter your post title"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="postDescription" className="form-label">
            Post Description
          </label>
          <textarea
            ref = {postDescriptionElement}
            rows="5"
            type="text"
            className="form-control"
            id="postDescription"
            aria-describedby="emailHelp"
            placeholder="Enter your post discription"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="postTags" className="form-label">
            Tags
          </label>
          <input
            ref = {postTagsElement}
            type="text"
            className="form-control"
            id="postTags"
            aria-describedby="emailHelp"
            placeholder="Enter your post hash tags"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="postReactions" className="form-label">
            Post Reactions
          </label>
          <input
            ref = {postReactionElement}
            type="text"
            className="form-control"
            id="postReactions"
            aria-describedby="emailHelp"
            placeholder="Enter your post reactions"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            User ID
          </label>
          <input
            ref = {userIdElement}
            type="text"
            className="form-control"
            id="userId "
            aria-describedby="emailHelp"
            placeholder="Enter user id"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
};

export default CreatePost;
