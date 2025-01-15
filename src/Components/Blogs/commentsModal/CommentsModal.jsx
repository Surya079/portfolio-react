/* eslint-disable react/prop-types */
import { TextField, Typography, Avatar } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { useSnackbar } from "../../../context/SnackbarContext";
import { API_URLS } from "../../../data/api-urls";
import { useAppSelector } from "../../../redux/authCustomHooks";
import { selectAuth } from "../../../redux/slice/authSlice";
import axios from "axios";
import SkeletonLoader from "../../SkeletonLoading/SkeletonLoad";
import DeleteIcon from "@mui/icons-material/Delete";

// CommentsSection Component
const CommentsSection = ({ open, id }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [isdeleted, setIsdeleted] = useState(false);
  const [deletedId, setdeletedId] = useState("");
  const { handleShowSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState(false);
  const { token, userId, username } = useAppSelector(selectAuth);

  // Memoize the fetchBlogs function
  const fetchBlogComments = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}${API_URLS.getAllBlogComments}/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setIsLoading(false);
        setComments(response.data.comments);
      }
    } catch (error) {
      handleShowSnackbar(
        error.response?.data?.message || "Error occurred",
        "error"
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  // useEffect with the dependency array
  useEffect(() => {
    if (token) fetchBlogComments();
  }, [fetchBlogComments, token, id]);

  const handleAddComment = async () => {
    setComments((prevComments) => [
      ...prevComments,
      { comment: newComment, userId: { name: username } },
    ]);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}${API_URLS.addComments}`,
        {
          blogId: id,
          userId: userId,
          comment: newComment,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 201) {
        setNewComment(""); // Reset the input field
      }
    } catch (error) {
      handleShowSnackbar(error.response.data.message, "error");
    }
  };

  if (!open) {
    return null;
  }

  const handleDelete = async (commentId) => {
    try {
      const blogId = id;
      const response = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}${
          API_URLS.deleteComment
        }/${blogId}/${commentId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        setIsdeleted(true);
        setdeletedId(commentId);
        handleShowSnackbar(response.data.message, "success");
      }
    } catch (error) {
      handleShowSnackbar(error.response.data.message, "error");
    }
  };

  return isLoading ? (
    <SkeletonLoader variant={"content"} />
  ) : (
    <div className="mt-4 bg-gray-100 p-4 rounded-md">
      <Typography variant="h6" className="font-bold mb-4">
        Comments
      </Typography>
      {comments ? (
        comments?.map((comment) => (
          <div
            key={comment._id}
            className="mb-4 flex items-start  flex-col p-2 bg-white rounded-md shadow-sm"
            style={{
              display:
                isdeleted && deletedId === comment._id ? "none" : "block",
            }}>
            {/* Profile Picture */}
            {userId === comment?.userId?._id ? (
              <div className="flex gap-2 w-full justify-end">
                {/* <div
                  onClick={() => handleEdit(comment?._id)}
                  className="cursor-pointer border border-gray-300">
                  <EditIcon fontSize="small" />
                </div> */}
                <div
                  onClick={() => handleDelete(comment?._id)}
                  className="cursor-pointer border border-gray-300">
                  <DeleteIcon fontSize="small" />
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="flex w-full items-start gap-3 p-2 ">
              <Avatar
                src={
                  comment?.userId?.profilePicture
                    ? `${import.meta.env.VITE_BASE_URL}${
                        comment?.userId?.profilePicture
                      }`
                    : "/images/demo-profile.png"
                }
                alt="Profile Picture"
                sx={{ width: 30, height: 30 }}
              />

              {/* User Info and Comment */}
              <div style={{ flex: 1 }}>
                <div className="font-semibold text-[13px]">
                  {comment.userId?.name || username}
                </div>
                <div className="text-gray-500 block mb-1 text-[8px]">
                  {comment?.timestamp
                    ? (() => {
                        const commentDate = new Date(comment?.timestamp);
                        const currentDate = new Date();
                        const timeDifference = currentDate - commentDate;
                        const daysDifference = Math.floor(
                          timeDifference / (1000 * 60 * 60 * 24)
                        );

                        if (daysDifference === 0) {
                          return commentDate.toDateString();
                        } else if (daysDifference === 1) {
                          return "1 day ago";
                        } else if (daysDifference > 1) {
                          return `${daysDifference} days ago`;
                        } else {
                          return commentDate.toDateString();
                        }
                      })()
                    : "Just now"}
                </div>
                <Typography
                  variant="body2"
                  className="ml-1 bg-gray-400/5 shadow-md rounded-md  w-full p-5"
                  sx={{ whiteSpace: "pre-wrap" }}>
                  {comment ? comment?.comment : newComment}
                </Typography>
                {/* Like Button */}
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>No Comments Found</div>
      )}
      {/* Add Comment Section */}
      <div className="flex items-center gap-2">
        <TextField
          variant="outlined"
          fullWidth
          size="small"
          multiline
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="mt-4"
        />
        <div>
          <SendIcon onClick={handleAddComment} />
        </div>
      </div>
    </div>
  );
};

export default CommentsSection;
