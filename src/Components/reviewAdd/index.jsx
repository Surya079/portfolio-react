/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Rating,
} from "@mui/material";
import { useAppSelector } from "../../redux/authCustomHooks";
import { selectAuth } from "../../redux/slice/authSlice";
import axios from "axios";
import { API_URLS } from "../../data/api-urls";
import { useSnackbar } from "../../context/SnackbarContext";

export const AddReviewDialog = ({ open, handleClose }) => {
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(0);
  const { userId, token } = useAppSelector(selectAuth);
  const { handleShowSnackbar } = useSnackbar();

  const handleFormSubmit = async () => {
    if (!token) {
      handleShowSnackbar("Please Request you to Login or Register!", "warning");
    } else {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BASE_URL}${API_URLS.addReview}`,
          {
            userId,
            content,
            rating,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.data) {
          handleShowSnackbar(response.data.message, "success");
          window.location.reload();
        }
        window.Location.reload();
      } catch (error) {
        handleShowSnackbar(error.response.data.message, "error");
      }
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Your Review</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="content"
          label="Review Content"
          type="text"
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div style={{ marginTop: "16px" }}>
          <Rating
            name="rating"
            value={rating}
            onChange={(e, newValue) => setRating(newValue)}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <button onClick={handleFormSubmit} className="button">
          Submit
        </button>
      </DialogActions>
    </Dialog>
  );
};
