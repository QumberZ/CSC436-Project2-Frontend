import React, { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Modal.css";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import Stack from "@mui/material/Stack";
import CancelIcon from "@mui/icons-material/Cancel";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const EditPost = ({ post, onUpdate, onClose }) => {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    handleOpen();
  }, []);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSave = async () => {
    setSaving(true);
    setError(null);

    try {
      const response = await axios.patch(
        `http://localhost:3001/v1/api/posts/${post.id}`,
        {
          title,
          content,
        }
      );
      onUpdate(response.data); // Update the post data in the parent component
      onClose(); // Close the modal
    } catch (e) {
      setError("Error: " + e.message);
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <strong className="text">Edit Post</strong>
              </Typography>
              <div className="modal-body">
                {error && <div className="alert alert-danger">{error}</div>}
                <div className="form-group">
                  <label className="text" htmlFor="title">Title</label>
                  <input
                    type="text"
                    id="title"
                    className="form-control"
                    value={title}
                    onChange={handleTitleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="text" htmlFor="content">Content</label>
                  <textarea
                    id="content"
                    value={content}
                    onChange={handleContentChange}
                  ></textarea>
                </div>
              </div>
              <Stack direction="row" spacing={23}>
                <Button
                  className="btn btn-primary"
                  disabled={saving}
                  onClick={handleSave}
                  variant="contained"
                  endIcon={<SaveAsIcon />}
                >
                  {saving ? "Saving..." : "Save"}
                </Button>
                <Button
                  variant="outlined"
                  onClick={handleCancel}
                  startIcon={<CancelIcon />}
                >
                  Cancel
                </Button>
              </Stack>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default EditPost;
