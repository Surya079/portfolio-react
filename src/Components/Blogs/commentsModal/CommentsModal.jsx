/* eslint-disable react/prop-types */
import { TextField, Typography, Avatar, IconButton } from "@mui/material";
import { ThumbUp } from "@mui/icons-material";
import { useState } from "react";
import SendIcon from "@mui/icons-material/Send";

// Dummy comments data
const dummyComments = [
  {
    id: 1,
    user: "John Doe",
    profilePic: "https://via.placeholder.com/40",
    text: "This is a great post!",
    timestamp: "2024-12-24 10:00 AM",
    likes: 2,
  },
  {
    id: 2,
    user: "Jane Smith",
    profilePic: "https://via.placeholder.com/40",
    text: "Very insightful, thank you for sharing.",
    timestamp: "2024-12-24 10:30 AM",
    likes: 5,
  },
  {
    id: 3,
    user: "Anonymous",
    profilePic: "https://via.placeholder.com/40",
    text: "I totally agree with this point.",
    timestamp: "2024-12-24 11:00 AM",
    likes: 1,
  },
];

// CommentsSection Component
const CommentsSection = ({ open }) => {
  const [comments, setComments] = useState(dummyComments);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    const newCommentObj = {
      id: comments.length + 1,
      user: "Anonymous",
      profilePic: "https://via.placeholder.com/40", // Default profile pic
      text: newComment,
      timestamp: new Date().toLocaleString(), // Includes date and time
      likes: 0, // Initialize with 0 likes
    };
    setComments([...comments, newCommentObj]); // Add the new comment
    setNewComment(""); // Reset the input field
  };

  const handleLike = (id) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment
      )
    );
  };

  if (!open) {
    return null;
  }

  return (
    <div className="mt-4 bg-gray-100 p-4 rounded-md">
      <Typography variant="h6" className="font-bold mb-4">
        Comments
      </Typography>
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="mb-4 flex items-start gap-3 p-2 bg-white rounded-md shadow-sm">
          {/* Profile Picture */}
          <Avatar
            src={comment.profilePic || "https://via.placeholder.com/40"}
            alt={comment.user}
            sx={{ width: 40, height: 40 }}
          />

          {/* User Info and Comment */}
          <div style={{ flex: 1 }}>
            <Typography variant="subtitle2" className="font-semibold">
              {comment.user}
            </Typography>
            <Typography variant="caption" className="text-gray-500 block mb-1">
              {comment.timestamp}
            </Typography>
            <Typography
              variant="body2"
              className="ml-1"
              sx={{ whiteSpace: "pre-wrap" }}>
              {comment.text}
            </Typography>
            {/* Like Button */}
            <div className="mt-2 flex items-center gap-2">
              <IconButton
                size="small"
                color="primary"
                onClick={() => handleLike(comment.id)}>
                <ThumbUp fontSize="small" />
              </IconButton>
              <Typography variant="caption">{comment.likes}</Typography>
            </div>
          </div>
        </div>
      ))}
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
