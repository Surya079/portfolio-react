import { useState, useEffect, useCallback } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { solarizedLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "tailwindcss/tailwind.css";
import { Avatar, IconButton, Tooltip, Button } from "@mui/material";
import { Comment, Create, Share, ThumbUp } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import CommentsSection from "./commentsModal/CommentsModal";
import { API_URLS } from "../../data/api-urls";
import axios from "axios";
import { useAppSelector } from "../../redux/authCustomHooks";
import { selectAuth } from "../../redux/slice/authSlice";
import { useSnackbar } from "../../context/SnackbarContext";
import SkeletonLoader from "../SkeletonLoading/SkeletonLoad";

const BlogPage = () => {
  const [blogdetails, setBlogdetails] = useState([]);
  const [openCommentContainer, setOpenCommentContainer] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { token, userId, role } = useAppSelector(selectAuth);
  const [commentSectionBlogId, setcommentSectionBlogId] = useState("");
  const { handleShowSnackbar } = useSnackbar();
  const [user, setUser] = useState({
    name: "",
    email: "",
    isVerified: "",
    profilePhoto: "",
    occupation: "",
    joined: "",
    about: "",
  });
  const navigate = useNavigate();

  const handleFetchUserData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}${API_URLS.getUserDetails}/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        setIsLoading(false);
        setUser({
          name: response.data.userDetails.name,
          email: response.data.userDetails.email,
          isVerified: response.data.userDetails.isVerified,
          profilePhoto: response.data.userDetails.profilePicture,
          occupation: response.data.userDetails.occupation,
          joinedDate: response.data.userDetails.createdAt,
          about: response.data.userDetails.aboutMe,
        });
      }
      console.log(response.data);
    } catch (error) {
      handleShowSnackbar(error.response.data.message, "error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleFetchUserData();
  }, []);

  // Memoize the fetchBlogs function
  const fetchBlogs = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}${API_URLS.getBlogs}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setIsLoading(false);
        setBlogdetails(response.data.blogs);
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
    if (token) fetchBlogs();
  }, [fetchBlogs, token]);

  const renderHtmlContent = (content) => {
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(content, "text/html");

    const contentArray = Array.from(htmlDoc.body.childNodes);
    return contentArray.map((node, index) => {
      if (node.nodeName === "PRE") {
        const codeText = node.querySelector("code").textContent;
        return (
          <SyntaxHighlighter
            key={index}
            language="javascript"
            style={solarizedLight}
            className="my-4 p-2 rounded bg-gray-100">
            {codeText}
          </SyntaxHighlighter>
        );
      } else if (node.nodeName === "VIDEO") {
        return (
          <video
            key={index}
            controls
            width="100%"
            className="rounded my-4"
            src={node.querySelector("source").src}
            type={node.querySelector("source").type}
          />
        );
      } else {
        return (
          <div
            key={index}
            dangerouslySetInnerHTML={{ __html: node.outerHTML }}
          />
        );
      }
    });
  };

  const handleOpenComment = (id) => {
    setOpenCommentContainer(!openCommentContainer);
    setcommentSectionBlogId(id);
  };

  const handleOpenCreateForm = () => {
    navigate("create-blog");
  };

  const handleProfileClick = (userId) => {
    navigate(`profile/${userId}`);
  };

  return (
    <div className="bg-gray-100 min-h-screen mt-3">
      <div className="flex justify-between items-center p-4 bg-white shadow">
        <div
          className="flex w-fit cursor-pointer gap-2 "
          onClick={() => handleProfileClick(userId)}>
          <div className="w-[90px] h-[50px] rounded-full overflow-hidden">
            <img
              src={
                token && user.profilePhoto
                  ? `${import.meta.env.VITE_BASE_URL}/${user.profilePhoto}`
                  : "/images/demo-profile.png"
              }
              alt="your profile"
              className="rounded-full w-full h-full object-cover"
              height={40}
            />
          </div>
          <div className="w-full">
            <h5 className="font-bold">{user.name}</h5>
            <p className="text-gray-500 text-[10px] ">{user.occupation}</p>
          </div>
        </div>
        {token && role === "admin" ? (
          <Button
            variant="contained"
            startIcon={<Create />}
            onClick={handleOpenCreateForm}
            className="button">
            Write
          </Button>
        ) : (
          ""
        )}
      </div>

      {isLoading ? (
        <SkeletonLoader variant={"content"} />
      ) : (
        blogdetails?.map((item) => (
          <div
            key={item._id}
            className="max-w-4xl mx-auto mt-6 p-6 bg-white rounded shadow">
            <div className="flex items-center mb-4">
              <Avatar
                alt="User Avatar"
                src={
                  item?.userId?.profilePicture
                    ? `${import.meta.env.VITE_BASE_URL}/${
                        item?.userId?.profilePicture
                      }`
                    : "/images/demo-profile.png"
                }
                className="cursor-pointer"
                onClick={() => handleProfileClick(`${item?.userId?._id}`)}
              />
              <div
                className="ml-3 cursor-pointer"
                onClick={() => handleProfileClick(`${item?.userId?._id}`)}>
                <p className="text-lg font-semibold">{item?.userId?.name}</p>
                <p className="text-sm text-gray-600">
                  Posted on{" "}
                  {item?.createdAt
                    ? (() => {
                        const commentDate = new Date(item?.createdAt);
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
                </p>
              </div>
            </div>

            <div>{renderHtmlContent(item.content)}</div>

            <div className="flex justify-between items-center mt-6">
              <Tooltip title="Like">
                <IconButton>
                  <ThumbUp />
                  {item?.likes.length}
                </IconButton>
              </Tooltip>
              <Tooltip title="Comment">
                <IconButton onClick={() => handleOpenComment(`${item?._id}`)}>
                  <Comment />
                </IconButton>
              </Tooltip>
              <Tooltip title="Share">
                <IconButton>
                  <Share />
                </IconButton>
              </Tooltip>
            </div>

            {openCommentContainer && (
              <CommentsSection
                open={openCommentContainer}
                id={commentSectionBlogId}
              />
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default BlogPage;
