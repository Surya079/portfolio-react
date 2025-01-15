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
import { useAppSelector } from "../../../../redux/authCustomHooks";
import { selectAuth } from "../../../../redux/slice/authSlice";
import axios from "axios";
import { API_URLS } from "../../../../data/api-urls";
import { useSnackbar } from "../../../../context/SnackbarContext";

const EditReviewDialog = ({ open, handleClose, content, rating, Id }) => {
  const [contents, setContent] = useState(content);
  const [ratings, setRating] = useState(rating);
  const { token } = useAppSelector(selectAuth);
  const { handleShowSnackbar } = useSnackbar();

  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BASE_URL}${API_URLS.editSaveReview}`,
        {
          reviewId: Id,
          content: contents,
          rating: ratings,
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
          value={contents ? contents : content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div style={{ marginTop: "16px" }}>
          <Rating
            name="rating"
            value={ratings ? ratings : rating}
            onChange={(e, newValue) => setRating(newValue)}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <button onClick={handleUpdate} className="button">
          Update
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default EditReviewDialog;
