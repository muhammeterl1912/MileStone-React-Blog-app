import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { useDispatch } from "react-redux";
import { getCommentsState } from "../services/BlogCalls";
import { useSelector } from "react-redux";
import useAxios from "../services/useAxios";
const CommentCard = () => {
  const [comment, setComment] = useState("");

const dispatch = useDispatch()
const {axiosToken} = useAxios()
const { comments } = useSelector((state) => state.comments);
  useEffect(() => {
    dispatch(getCommentsState({ axiosToken, endPoint: 'comments', id: '' }));
  }, []); 

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmitComment = () => {
    if (comment.trim() !== "") {
  
    setComment("");
    }
  };
  console.log(comments)
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Comments
      </Typography>
      {/* {comments.map((comment, index) => (
        <div key={index}>
          <Typography variant="body1" gutterBottom>
            {comment}
          </Typography>
          <Divider />
        </div>
      ))} */}
      <TextField
        label="Add a comment"
        multiline
        rows={4}
        value={comment}
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

export default CommentCard;
