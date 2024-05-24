import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Box,
  Container,
  Typography,
  Avatar,
} from "@mui/material";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import { toastSuccessNotify } from "../helper/ToastNotify";
import { useDispatch, useSelector } from "react-redux";
import { getBlogCategories, postBlogState } from "../services/BlogCalls";

function BlogForm() {
  const [formData, setFormData] = useState({
    categoryId: "",
    title: "",
    content: "",
    image: "",
    isPublish: "",
  });
  const { categories } = useSelector((state) => state.categories);
  const { postedBlog } = useSelector((state) => state.blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogCategories());
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
 
  }, [postedBlog]); 

  const handleSubmit = (e) => {
    e.preventDefault();
   dispatch(postBlogState(formData));
      toastSuccessNotify("Blog successfully created");
      setFormData({
        categoryId: "",
        title: "",
        content: "",
        image: "",
        isPublish: "",
      });

  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <ImportContactsIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
       ADD   NEW BLOG
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="title"
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="image"
            label="Image URL"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
          <FormControl fullWidth margin="normal" required>
            <InputLabel id="categoryIdLabel">Category</InputLabel>
            <Select
              labelId="categoryIdLabel"
              id="categoryId"
              name="categoryId"
              value={formData.categoryId}
              onChange={handleChange}
              label="Category"
            >
              {categories?.map((category) => (
                <MenuItem value={category._id} key={category._id}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal" required>
            <InputLabel id="isPublishLabel">Status</InputLabel>
            <Select
              labelId="isPublishLabel"
              id="isPublish"
              name="isPublish"
              value={formData.isPublish}
              onChange={handleChange}
              label="Status"
            >
              <MenuItem value={false}>Draft</MenuItem>
              <MenuItem value={true}>Published</MenuItem>
            </Select>
          </FormControl>
          <TextField
            margin="normal"
            required
            fullWidth
            id="content"
            label="Content"
            name="content"
            multiline
            rows={4}
            value={formData.content}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Post Blog
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default BlogForm;
