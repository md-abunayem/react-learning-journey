import React from "react";

const AddBlog = () => {
  return (
    <div className="add-blog-container">
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
