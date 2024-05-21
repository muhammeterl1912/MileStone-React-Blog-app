import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useParams } from "react-router-dom";
import useAxios from "../services/useAxios";
import { getBlogState } from "../services/BlogCalls";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Detail = () => {
  const { id } = useParams();
  const { axiosToken } = useAxios();
  const dispatch = useDispatch();
  const { singleBlog } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(getBlogState({ axiosToken, endPoint: `/blogs/${id}`, id: "" }));
  }, [id,]);

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
    createdAt: singleBlog ? new Date(singleBlog.createdAt).toLocaleString() : "",
    updatedAt: singleBlog ? new Date(singleBlog.updatedAt).toLocaleString() : ""
  };

  return (
<div
  style={{
    display: "flex",
    justifyContent: "center",
    padding: "50px",
    alignItems: "center",
    minHeight: "80vh",
    marginBottom: "100px",
    background: "#f9f9f9", // Arkaplan rengi
  }}
>
  <div
    style={{
      width: "100%",
      maxWidth: 800, // Kartın maksimum genişliği artırıldı
      margin: "20px",
      padding: "40px",
      borderRadius: "8px", // Kenar yuvarlaklığı
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", // Gölge efekti
      background: "white", // Kart arka plan rengi
    }}
  >
    <img
      src={sampleBlog.image}
      alt="Blog image"
      style={{
        height: 300, // Görüntünün yüksekliği artırıldı
        width: "100%",
        objectFit: "cover",
        borderRadius: "8px 8px 0 0", // Kenar yuvarlaklığı sadece üst kısımda
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)", // Gölge efekti
      }}
    />
    <div style={{ marginTop: "20px" }}>
      <Typography variant="h6" gutterBottom style={{ fontWeight: "bold" }}>
        {sampleBlog.title}
      </Typography>
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
    </div>
    <div style={{ marginTop: "20px", display: "flex", justifyContent: "space-between" }}>
      <div>
        <IconButton aria-label="add to favorites">
          {sampleBlog.likes.length} <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="comment">
          {sampleBlog.comments.length} <InsertCommentOutlinedIcon />
        </IconButton>
      </div>
      <IconButton aria-label="view">
        {sampleBlog.countOfVisitors} <VisibilityIcon />
      </IconButton>
    </div>
  </div>
</div>





  );
};

export default Detail;
