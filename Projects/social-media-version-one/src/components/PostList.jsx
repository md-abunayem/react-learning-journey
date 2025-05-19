import Post from "./Post";
import NoPosts from "./NoPosts";
import { PostLists } from "../store/post-list-store";
import LoadinSpinner from "./LoadinSpinner";
import { useContext, useState,useEffect } from "react";
import {v4 as uuidv4 } from 'uuid';


const PostList = () => {

  const {postList,addInitaialPost} = useContext(PostLists);
  const [fetching ,setFetching] = useState(false);

  useEffect(()=>{

    const controller = new AbortController();
    const signal = controller.signal;   // destructuring of controller to get signal property

    setFetching(true);
    const fetchInitialPosts = async () => {
      const response = await fetch("https://dummyjson.com/posts",{signal});
      const postsData = await response.json();
      addInitaialPost(postsData.posts);
      setFetching(false);

    };
    fetchInitialPosts();

    return ()=>{
      console.log("Cleaning up UseEffect..");
      controller.abort();
    }

  },[])

  return (
    <>
        { fetching && <LoadinSpinner></LoadinSpinner>}
        {!fetching && postList.length===0 &&<NoPosts/>}
        {!fetching && postList.map((post) => <Post key={uuidv4()} post={post}/>)}
        
    </>
  )
}

export default PostList