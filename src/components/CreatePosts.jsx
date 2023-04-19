import React, { useState } from "react";
import axios from "axios";
import "./CreatePosts.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const URL = "http://localhost:3001/v1/api/posts";

    try {
      const response = await axios.post(URL, { title, content, image });
      console.log(response.data);
      setSuccess(true);
      setError(null);
    } catch (e) {
      setError("Error: " + e.message);
      setSuccess(false);
    }
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
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
        {error && (
          <div className="alert alert-danger">
            <Alert severity="error">{error}</Alert>
          </div>
        )}
        {success && (
          <div className="alert alert-success">
            <Alert severity="success">Post Successfully Created!</Alert>
            <br />
            <Stack spacing={2} direction="row">
              <Link to="/posts">
                <Button
                  variant="contained"
                  onClick={handleClick}
                  endIcon={<ArrowForwardIcon />}
                >
                  Click here to view post
                </Button>
              </Link>
              <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message={success ? "Post successfully created!" : error}
              />
            </Stack>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="text-content" htmlFor="title">
              Title:
            </label>
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
            <label className="text-content" htmlFor="content">
              Content:
            </label>
            <textarea
              type="text"
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
          <div className="form-group"></div>
          <Button
            variant="contained"
            startIcon={<AddCircleIcon />}
            onClick={handleSubmit}
          >
            Create Post
          </Button>
        </form>
      </main>
    </>
  );
};

export default CreatePost;
