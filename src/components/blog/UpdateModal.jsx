import * as React from "react";
import Modal from "@mui/material/Modal";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Box,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogCategories } from "../services/BlogCalls";

export default function UpdateModal({
  open,
  handleClose,
  blog,
  handleEditClick,
  formData,
  setFormData,
}) {
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    if (open) {
      dispatch(getBlogCategories());
      setFormData({
        categoryId: blog.categoryId || "",
        title: blog.title || "",
        content: blog.content || "",
        image: blog.image || "",
        isPublish: blog.isPublish || false,
      });
    }
  }, [open, dispatch, setFormData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          UPDATE BLOG
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{ mt: 1 }}
          onSubmit={handleEditClick}
        >
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
            Update Your Blog
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
