/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import axios from "axios";
import { useAppSelector } from "../redux/authCustomHooks";
import { selectAuth } from "../redux/slice/authSlice";
import { API_URLS } from "../data/api-urls";
import { useSnackbar } from "../context/SnackbarContext";

const AddTestimonial = ({ open, handleClose }) => {
  const [content, setContent] = useState("");
  const { userId, token } = useAppSelector(selectAuth);
  const { handleShowSnackbar } = useSnackbar();

  const handleFormSubmit = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}${API_URLS.addTestimonial}`,
        {
          userId,
          content,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data) {
        handleShowSnackbar(response.data.message, "success");
      }
      window.location.reload();
    } catch (error) {
      handleShowSnackbar(error.response.data.message, "error");
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Give Honestly What you think about me ☺️</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="content"
          label="Testimonial Content"
          type="text"
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <button onClick={handleFormSubmit} className="button">
          Submit
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default AddTestimonial;
