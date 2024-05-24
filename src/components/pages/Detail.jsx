import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Avatar from "@mui/material/Avatar";
import { getBlogStateDetail, postBlogLike } from "../services/BlogCalls";
import CommentCard from "../blog/CommentCard";
import LoadingGif from "../../assets/Loading.gif";

const Detail = () => {
  const { id } = useParams();
  const [showComment, setShowComment] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const [likeColor, setLikeColor] = useState(false);
  const dispatch = useDispatch();
  const { singleBlog, loading } = useSelector((state) => state.blogs);

  useEffect(() => {
    getPostDetail();
  }, []);

  useEffect(() => {
    if (singleBlog) {
      setLikeColor(singleBlog.likes.includes(user?._id)); // Fixed the comparison
    }
  }, [singleBlog]);

  const getPostDetail = () => {
    dispatch(getBlogStateDetail(id));
  };

  const handleClickLike = () => {
    dispatch(postBlogLike(singleBlog?._id)); 
    setLikeColor(!likeColor);
    getPostDetail();
  };

  const sampleBlog = {
    id: singleBlog?._id,
    title: singleBlog?.title,
    content: singleBlog?.content,
    image: singleBlog?.image,
    userId: singleBlog?.userId,
    categoryId: singleBlog?.categoryId,
    comments: singleBlog?.comments || [],
    likes: singleBlog?.likes || [],
    countOfVisitors: singleBlog?.countOfVisitors || [],
    createdAt: singleBlog
      ? new Date(singleBlog.createdAt).toLocaleString()
      : "",
    updatedAt: singleBlog
      ? new Date(singleBlog.updatedAt).toLocaleString()
      : "",
    firstName: singleBlog?.userId ? singleBlog.userId.firstName : "Unknown",
    lastName: singleBlog?.userId ? singleBlog.userId.lastName : "Unknown",
  };

  return loading ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <img
        src={LoadingGif}
        alt="Loading..."
        style={{ width: "100px", height: "100px" }}
      />
    </div>
  ) : (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "50px",
        alignItems: "center",
        minHeight: "80vh",
        marginBottom: "100px",
        background: "#f9f9f9",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 800,
          margin: "20px",
          padding: "40px",
          borderRadius: "8px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          background: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <Avatar
            alt="Author Avatar"
            src={sampleBlog.userId?.avatar || ""}
            style={{ marginRight: "10px" }}
          />
          <Typography variant="h6" gutterBottom style={{ fontWeight: "bold" }}>
            {sampleBlog.title}
          </Typography>
        </div>
        <img
          src={sampleBlog.image}
          alt="Blog image"
          style={{
            height: 300,
            width: "100%",
            objectFit: "cover",
            borderRadius: "8px 8px 0 0",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
          }}
        />
        <div style={{ marginTop: "20px" }}>
          <Typography variant="body1" color="textSecondary">
            {sampleBlog.content}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            style={{ marginTop: "10px", fontStyle: "italic" }}
          >
            Publish Date: {sampleBlog.createdAt}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            style={{ marginTop: "10px", fontStyle: "italic" }}
          >
            Author: {`${sampleBlog.firstName} ${sampleBlog.lastName}`}
          </Typography>
        </div>
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <IconButton aria-label="add to favorites" onClick={handleClickLike}>
              <FavoriteIcon sx={{ color: likeColor ? "red" : "black" }} />
              {sampleBlog.likes.length}
            </IconButton>

            <IconButton
              aria-label="comment"
              onClick={() => {
                setShowComment((prev) => !prev);
              }}
            >
              {sampleBlog.comments.length} <InsertCommentOutlinedIcon />
            </IconButton>
          </div>
          <IconButton aria-label="view">
            {sampleBlog.countOfVisitors} <VisibilityIcon />
          </IconButton>
        </div>
        {showComment && <CommentCard />}
      </div>
    </div>
  );
};

export default Detail;
