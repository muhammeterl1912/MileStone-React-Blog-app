import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { postBlogComment } from "../services/BlogCalls";
import { useDispatch } from "react-redux";

const CommentForm = ({ id }) => {
  const [comment, setComment] = useState({
    blogId: "",
    comment: ""
  });
  const dispatch = useDispatch();

  const handleCommentChange = (event) => {
    setComment((value) => {
      return {
        ...value,
        blogId: id,
        comment: event.target.value
      };
    });
  };

  const handleSubmitComment = () => {
    if (comment.comment.trim() !== "") {
      dispatch(postBlogComment(comment));
      setComment((prevVal) => {
        return { ...prevVal, comment: "" };
      });
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <TextField
        label="Add a comment"
        multiline
        rows={4}
        value={comment.comment}
        onChange={handleCommentChange}
        variant="outlined"
        fullWidth
        margin="normal"
        style={{ marginBottom: "20px" }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmitComment}
        style={{ marginRight: "10px" }}
      >
        ADD COMMENT
      </Button>
    </div>
  );
};

export default CommentForm;
