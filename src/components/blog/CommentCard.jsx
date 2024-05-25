import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import CommentForm from "./CommentForm";
import Divider from "@mui/material/Divider";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleCommentsState } from "../services/BlogCalls";

const CommentCard = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { singleBlogComment, loading, postedComment } = useSelector((state) => state.comments);

  useEffect(() => {
    if (id) {
      dispatch(getSingleCommentsState(id));
    }
  }, [dispatch, id, postedComment]);

  if (loading) {
    return <Typography>Loading comments...</Typography>;
  }

  return (
    <div style={{ marginTop: "20px", padding: "20px", backgroundColor: "#f8f9fa", borderRadius: "8px" }}>
      <Typography variant="h5" gutterBottom>
        Comments
      </Typography>
      {singleBlogComment && singleBlogComment.length > 0 ? (
        singleBlogComment.map((commentData) => {
          return (
            <div key={commentData._id} style={{ marginBottom: "15px" }}>
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
      <CommentForm id={id} />
    </div>
  );
};

export default CommentCard;
