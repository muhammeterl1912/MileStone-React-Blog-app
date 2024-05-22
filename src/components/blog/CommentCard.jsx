import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleCommentsState } from "../services/BlogCalls";

const CommentCard = () => {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const { id } = useParams();
  const { singleBlogComment, loading } = useSelector((state) => state.comments);
  console.log(singleBlogComment, "qwqqqqq");
  useEffect(() => {
    if (id) {
      dispatch(getSingleCommentsState(id));
    }
  }, [dispatch, id]);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmitComment = () => {
    if (comment.trim() !== "") {
      setComment("");
    }
  };

  if (loading) {
    return <Typography>Loading comments...</Typography>;
  }

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Comments
      </Typography>
      {singleBlogComment && singleBlogComment.length > 0 ? (
        singleBlogComment.map((commentData) => {
          console.log("döngü", commentData);
          return (
            <div key={commentData._id}>
              <Typography variant="body1" gutterBottom>
                {commentData.comment}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                By {commentData.userId.username} on{" "}
                {new Date(commentData.createdAt).toLocaleString()}
              </Typography>
              <Divider />
            </div>
          );
        })
      ) : (
        <Typography variant="body2" color="textSecondary">
          No comments yet.
        </Typography>
      )}
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
