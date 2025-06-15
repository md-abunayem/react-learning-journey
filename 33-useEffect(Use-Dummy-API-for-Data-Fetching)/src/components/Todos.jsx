import React from 'react';
import Todo from './Todo';

const Todos = ({ posts }) => {

  return (
    <>
      {posts.map((post) => (
        <Todo key={post.id} post={post} />
      ))}
    </>
  );
};

export default Todos;
