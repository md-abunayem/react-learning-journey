import { createContext, useEffect, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

// const DEFAULT_POST_LIST = [
//   {
//     id: 1,
//     title: "Go to University",
//     body: "This is the last year of my Bachelor Degree. Hope that I can make my future bright.",
//     reactions: 99,
//     useId: "user-77",
//     tags: ["learnig", "teaching", "enjoy", "bright future"],
//   },
//   {
//     id: 2,
//     title: "Completed my degree of Bachalor",
//     body: "This time is now to do making something exceptonal. Let's go....",
//     reactions: 188,
//     useId: "user-66",
//     tags: ["completed", "exceptional", "hard-work"],
//   },
// ];


export const PostLists = createContext({
  postList: [],
  addInitaialPost:()=>{},
  addPost: () => {},
  deletePost: () => {},
});

const reducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "SET_INITIAL_POSTS") {
    newPostList = [...action.payload.posts];
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload.post, ...currentPostList];
  }
  return newPostList;
};


//PostListProvider component | container
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(reducer, []);


  const addInitaialPost = (posts) =>{
    dispatchPostList({
      type: "SET_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  }
  

  const addPost = (post) => {
    
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        post,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postId },
    });
  };

  return (
    <PostLists.Provider value={{ postList, addPost, addInitaialPost, deletePost }}>
      {children}
    </PostLists.Provider>
  );
};

export default PostListProvider;