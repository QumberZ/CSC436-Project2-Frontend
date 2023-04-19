import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import "./Posts.css";
import EditPost from "./EditPost";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import EditIcon from '@mui/icons-material/Edit';

const Posts = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [postData, setPostData] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  const fetchAPIData = async () => {
    setLoading(true);
    const URL = "http://localhost:3001/v1/api/posts";

    try {
      const response = await axios.get(URL);
      setPostData(response.data);
    } catch (e) {
      setError("Error: " + e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAPIData();
  }, []);

  const handleEditPost = (post) => {
    setEditingPost(post);
  };

  const handlePostUpdate = (updatedPost) => {
    const updatedPostData = postData.map((post) => {
      if (post.id === updatedPost.id) {
        return updatedPost;
      } else {
        return post;
      }
    });
    setPostData(updatedPostData);
    setEditingPost(null);
  };

  if (loading) {
    return (
      <>
        <p>Data Here: {JSON.stringify(postData)}</p>
        <h3 className="text-center p-4"> Loading... </h3>
      </>
    );
  }

  return (
    <>
     <div class="container">
  <div class="row">
    <div class="col-md-12 text-center">
      <h3 class="animate-charcter"> View Posts</h3>
    </div>
  </div>
</div>
      <div className="container align-center">
        {postData.map((post) => {
          const lastUpdated = moment(post.updatedAt).format(
            "MMMM Do YYYY, h:mm:ss a"
          );
          const published = moment(post.publishedAt).format(
            "MMMM Do YYYY, h:mm:ss a"
          );
          return (
            <div className="row top" key={post.id}>
              <div className="col-sm-6 py-3 top">
                <div className="card width-m py-2 top post-card">
                  <div className="card-body">
                    <h3 className="font-bold card-title top">
                      Title: {post.title}
                    </h3>
                    <p className="card-text">
                      <strong>Content: </strong>
                      {post.content} <br />
                      <strong>Published: </strong>
                      {published}
                      <br />
                      <strong>Last Updated: </strong>
                      {lastUpdated}
                      <br />
                    </p>
                    <img
                      className="size"
                      src="https://images.ctfassets.net/lzny33ho1g45/413Ws5WVIUFQi0g6WdkKAa/7d8bdb263b769f01b153298bbf1cd3b9/what-is-content-marketing-00-hero.png?w=1520&fm=jpg&q=30&fit=thumb&h=760"
                    ></img>

                    <Stack direction="row" spacing={12}>
                      <Button
                        onClick={() => handleEditPost(post)}
                        variant="contained"
                        endIcon={<EditIcon />}
                      >
                        Edit
                      </Button>
                      <Button variant="outlined" startIcon={<DeleteIcon />}>
                        Delete
                      </Button>
                    </Stack>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {editingPost && (
        <EditPost
          post={editingPost}
          onUpdate={handlePostUpdate}
          onClose={() => setEditingPost(null)}
        />
      )}
    </>
  );
};

export default Posts;
