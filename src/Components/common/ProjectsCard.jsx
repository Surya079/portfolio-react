/* eslint-disable react/prop-types */
import { FavoriteBorder, FavoriteOutlined } from "@mui/icons-material";
import LinkIcon from "@mui/icons-material/Link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/authCustomHooks";
import { selectAuth } from "../../redux/slice/authSlice";
import { useSnackbar } from "../../context/SnackbarContext";
import axios from "axios";
import { API_URLS } from "../../data/api-urls";

export const ProjectsCard = ({ id, name, description, link, image, like }) => {
  const [isLike, setIsLike] = useState(false);
  const [likeCount, setLikeCount] = useState(like.length || 0); // Initialize likeCount with the length of likes array
  const { token, userId } = useAppSelector(selectAuth);
  const navigate = useNavigate();
  const { handleShowSnackbar } = useSnackbar();

  // Set the initial state of isLike if the user has already liked the project
  useEffect(() => {
    if (like.includes(userId)) {
      setIsLike(true);
    }
  }, [like, userId]);

  const handleLike = async (projectId) => {
    if (!token) {
      navigate("/blogs/login");
      return;
    }
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}${API_URLS.toggleLikeProject}`,
        {
          userId,
          projectId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        const { status } = response.data;
        setIsLike(!isLike);
        if (status === "Like") {
          setLikeCount((prevCount) => prevCount + 1);
        } else if (status === "unLike") {
          setLikeCount((prevCount) => prevCount - 1);
        }
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "An error occurred while liking.";
      handleShowSnackbar(errorMessage, "error");
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -200,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{ duration: 0.7 }}
      className="flex md:flex-row flex-col motion-preset-slide-down border max-w-[600px] bg-slate-800 overflow-hidden shadow-2xl rounded-2xl gap-2 border-black  p-3 text-white m-2 justify-around">
      <div className="flex  justify-start">
        <div className="w-[340px] h-[200px] ">
          <img src={`${image}`} className="object-contain w-full h-full" />
        </div>
      </div>
      <div className="flex flex-col  justify-between">
        <div className="flex flex-col mx-auto p-2 w-fit gap-2">
          <div className="flex justify-between  gap-x-6">
            <div className="font-bold md:text-center text-sm">
              Project Name:
            </div>
            <div className="text-[10px]">{name}</div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="font-bold text-sm">Tech Stacks :</div>
          </div>
          <div className="flex flex-col justify-between ">
            <div className="font-bold  text-sm">Descriptions:</div>
            <div className="text-justify w-[200px]  text-[10px]">
              {description}
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-5 justify-end">
          <div className="flex flex-col  justify-center items-center">
            <div
              onClick={() => {
                if (link) {
                  window.open(link, "_blank"); // Open the external link in a new tab
                } else {
                  handleShowSnackbar("Project URL not available!", "info"); // Show snackbar if the link is not available
                }
              }}
              style={{ cursor: "pointer" }} // Add pointer cursor for better UX
            >
              <LinkIcon /> <span className="text-[10px]">View</span>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <span onClick={() => handleLike(id)}>
              {isLike ? (
                <FavoriteOutlined className="text-red-600" />
              ) : (
                <FavoriteBorder />
              )}
              {likeCount >= 0 && <span> {likeCount}</span>}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
