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
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { postBlogLike } from "../services/BlogCalls";
import { toastWarnNotify } from "../helper/ToastNotify";

const BlogList = ({ blogs, totalPage, currentPage }) => {
  const { user } = useSelector((state) => state.auth);
  const [likeColor, setLikeColor] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const extractFirstParagraph = (text) => {
    const words = text.split(" ");
    return words.slice(0, 30).join(" ") + (words.length > 30 ? "..." : "");
  };

  const handlePageChange = (event, value) => {
    navigate(`/?page=${value}`);
  };

  const handleClickLike = (id) => {
    dispatch(postBlogLike(id));
  };

  React.useEffect(() => {
    if (user) {
      setLikeColor(blogs.map((blog) => blog.likes.includes(user._id)));
    }
  }, []);

  return (
    <>
      <Grid
        container
        spacing={1}
        sx={{ maxWidth: "1800px", justifyContent: "center" }}
      >
        {blogs?.map((blog, index) => (
          <Grid item key={blog._id} xs={12} md={6} xl={3}>
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
                <IconButton
                  aria-label="add to favorites"
                  onClick={() => handleClickLike(blog._id)}
                >
                  {blog.likes.length}
                  <FavoriteIcon
                    sx={{ color: likeColor[index] ? "red" : "black" }}
                  />
                </IconButton>
                <IconButton
                  aria-label="comment"
                  onClick={() =>
                    toastWarnNotify(
                      "Please Navigate to Detail to see the Comments or add comment... "
                    )
                  }
                >
                  {blog.comments.length} <InsertCommentOutlinedIcon />
                </IconButton>
                <IconButton aria-label="view">
                  {blog.countOfVisitors} <VisibilityIcon />
                </IconButton>
                <Button
                  aria-label="show more"
                  sx={{ flexGrow: 1 }}
                  component={Link}
                  to={user ? `/detail/${blog._id}` : "/login"}
                >
                  READ MORE
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      {totalPage > 1 && (
        <Stack spacing={2} sx={{ marginTop: "60px", paddingBottom: "65px" }}>
          <Pagination
            count={+totalPage}
            page={+currentPage}
            onChange={handlePageChange}
            color="primary"
            sx={{ display: "flex", justifyContent: "center" }}
          />
        </Stack>
      )}
    </>
  );
};

export default BlogList;
