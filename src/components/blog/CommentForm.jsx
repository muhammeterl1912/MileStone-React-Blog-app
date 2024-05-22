import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import {postBlogComment}from "../services/BlogCalls"
import { useDispatch } from "react-redux";
const CommentForm = ({id}) => {
  const [comment, setComment] = useState({
    blogId: "",
    comment: ""
  });
  const dispatch = useDispatch();
  const handleCommentChange = (event) => {
    setComment((value)=>{
        return {
            ...value,blogId:id,comment:event.target.value
        }
    });
  };

  const handleSubmitComment = () => {
    if (comment.comment.trim() !== "") {
       
      dispatch(postBlogComment(comment))
        setComment((prevVal) => {
            return { ...prevVal };
          });
          
    }
  };


  return (
    <div>

      <TextField
        label="Add a comment"
        multiline
        rows={4}
        value={comment.comment}
        onChange={handleCommentChange}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleSubmitComment}>
        ADD COMMENT
      </Button>
    </div>
  );
};

export default CommentForm;
