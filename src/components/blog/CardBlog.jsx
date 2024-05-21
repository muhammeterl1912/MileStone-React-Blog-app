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
import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {toastWarnNotify} from "../helper/ToastNotify"
const BlogList = ({ blogs, setCurrentPage, currentPage }) => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate()
  const pageSize = 4;

  const extractFirstParagraph = (text) => {
    const words = text.split(" ");
    return words.slice(0, 30).join(" ") + (words.length > 30 ? "..." : "");
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const paginatedBlogs = blogs.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <>
      <Grid
        container
        spacing={1}
        sx={{ maxWidth: "1800px", justifyContent: "center" }}
      >
        {paginatedBlogs.map((blog) => (
          <Grid item key={blog.id} xs={12} md={6} xl={3}>
            <Card
              sx={{
                maxWidth: 345,
                margin: "20px",
                marginBottom: "30px",
                padding: "40px",
              }}
            >
              <CardMedia
                component="img"
                height="194"
                image={blog.image}
                alt="Blog image"
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {blog.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {extractFirstParagraph(blog.content)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Publish Date: {new Date(blog.createdAt).toLocaleString()}
                </Typography>
              </CardContent>
              <CardActions
                disableSpacing
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <IconButton aria-label="add to favorites">
                  {blog.likes.length} <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="comment">
                  {blog.comments.length} <InsertCommentOutlinedIcon />
                </IconButton>
                <IconButton aria-label="view">
                  {blog.countOfVisitors} <VisibilityIcon />
                </IconButton>
                <Button aria-label="show more" sx={{ flexGrow: 1 }}onClick={()=>{
                  if(user){
                    navigate(`detail/${blog._id}`)
                  }
                  else{
                    navigate("/login")
                    toastWarnNotify("You need to be Logged-in to see the details")
                  }
                }}>
                  READ MORE
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Stack spacing={2} sx={{ marginTop: "60px"}}>
        <Pagination
          count={Math.ceil(blogs.length / pageSize)}
          onChange={handlePageChange}
          color="primary"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        />
      </Stack>
    </>
  );
};

export default BlogList;
