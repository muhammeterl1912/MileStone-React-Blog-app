import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
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
import Button from "@mui/material/Button";
import { postBlogLike } from "../services/BlogCalls";
import { useEffect, useState } from "react";
import { getBlogState, deleteSingleBlog } from "../services/BlogCalls";
import LoadingSkeleton from "../blog/LoadingSkeleton";

const BlogList = () => {
  const { user } = useSelector((state) => state.auth);
  const [filteredData, setFilteredData] = useState(null);
  const { blogs, loading, isLiked } = useSelector((state) => state.blogs);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const extractFirstParagraph = (text) => {
    const words = text.split(" ");
    return words.slice(0, 30).join(" ") + (words.length > 30 ? "..." : "");
  };

  const handleLikeClick = (id) => {
    dispatch(postBlogLike(id));
  };

  const handleEditClick = (id) => {};

  const handleDeleteClick = (id) => {
    dispatch(deleteSingleBlog(id));
    dispatch(getBlogState({ endPoint: "/blogs", currentPage: "", paginate: "" }));
  };

  useEffect(() => {
    dispatch(getBlogState({ endPoint: "/blogs", currentPage: "", paginate: "" }));
  }, [dispatch, isLiked]);

  useEffect(() => {
    const filtered = blogs?.filter((item) => item.userId === user._id);
    setFilteredData(filtered);
  }, [blogs]);

  return (
    <>
      {loading ? (
        <LoadingSkeleton />
      ) : filteredData && filteredData.length ? (
        <Grid
          container
          spacing={4}
          sx={{ justifyContent: "center", marginTop: 2, marginBottom: 4 }}
        >
          {filteredData.map((blog) => (
            <Grid
              item
              key={blog._id}
              xs={12}
              sm={6}
              md={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                sx={{ maxWidth: 345, height: "100%", boxShadow: 3, margin: 2 }}
              >
                <CardMedia
                  component="img"
                  height="194"
                  image={blog.image}
                  alt="Blog Image"
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {blog.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {extractFirstParagraph(blog.content)}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ marginTop: 1 }}
                  >
                    Publish Date:
                    {new Date(blog.createdAt).toLocaleString()}
                  </Typography>
                </CardContent>
                <CardActions
                  disableSpacing
                  sx={{ justifyContent: "space-between", paddingX: 2 }}
                >
                  <IconButton
                    aria-label="Like"
                    onClick={() => handleLikeClick(blog._id)}
                  >
                    <FavoriteIcon /> {blog.likes.length}
                  </IconButton>
                  <IconButton aria-label="Comment">
                    <InsertCommentOutlinedIcon /> {blog.comments.length}
                  </IconButton>
                  <IconButton aria-label="View">
                    <VisibilityIcon /> {blog.countOfVisitors}
                  </IconButton>
                  <Button
                    aria-label="Read More"
                    variant="contained"
                    color="primary"
                    size="small"
                    component={Link}
                    to={user ? `/detail/${blog._id}` : "/login"}
                  >
                    READ MORE
                  </Button>
                </CardActions>
                <CardActions
                  sx={{ justifyContent: "space-between", paddingX: 2 }}
                >
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    onClick={() => handleEditClick(blog._id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    color="warning"
                    size="small"
                    onClick={() => handleDeleteClick(blog._id)}
                  >
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography
          variant="h5"
          align="center"
          sx={{ marginTop: 4, marginBottom: 4 }}
        >
          No Data.You need to publish Post...
        </Typography>
      )}
    </>
  );
};

export default BlogList;
