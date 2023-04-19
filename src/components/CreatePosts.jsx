import React, { useState } from "react";
import axios from "axios";
import './CreatePosts.css'
import Header from "./Header";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const URL = "http://localhost:3001/v1/api/posts";

    try {
      const response = await axios.post(URL, { title, content, image });
      console.log(response.data);
    } catch (e) {
      setError("Error: " + e.message);
    }
  };

  return (
    <>
    
    <div className="container">
  <div className="row">
    <div className="col-md-12 text-center">
      <h3 className="animate-charcter"> Create a New Post</h3>
    </div>
  </div>
</div>
      <main>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="text-content" htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              className="form-control"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Enter a title"
              required
            />
          </div>
          <div className="form-group">
            <label className="text-content" htmlFor="content">Content:</label>
            <textarea
              id="content"
              name="content"
              className="form-control"
              value={content}
              onChange={(event) => setContent(event.target.value)}
              placeholder="Write your post here"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="form-group">
           
          </div>
          <button type="submit" className="btn btn-primary">
            
            Save
          </button>
        </form>
     
      </main>

    </>
  );
};

export default CreatePage;
