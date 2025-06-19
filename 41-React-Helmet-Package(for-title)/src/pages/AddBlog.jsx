import React from "react";

import PageTitle from "../components/PageTitle";

const AddBlog = () => {
  return (
    <div className="add-blog-container">
      <PageTitle title="AddBlog"></PageTitle>
      <h2>Add New Blog</h2>
      <form className="blog-form">
        <div>
          <label>
            Title:
            <input type="text" required />
          </label>
        </div>

        <div>
          <label>
            Description:
            <textarea required></textarea>
          </label>
        </div>

        <button type="submit">Add Blog</button>
      </form>
    </div>
  );
};

export default AddBlog;
