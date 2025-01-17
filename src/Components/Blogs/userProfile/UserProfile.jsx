import { Avatar, Menu, MenuItem, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearUser, selectAuth } from "../../../redux/slice/authSlice";
import { useSnackbar } from "../../../context/SnackbarContext";
import useMetaData from "../../../context/metaContext";
import { useAppSelector } from "../../../redux/authCustomHooks";
import axios from "axios";
import { API_URLS } from "../../../data/api-urls";
import SkeletonLoader from "../../SkeletonLoading/SkeletonLoad";

const UserProfilePage = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { token, userId, username } = useAppSelector(selectAuth);
  const userID = useParams().id;

  const { handleShowSnackbar } = useSnackbar();

  const { handleMetaData } = useMetaData();

  useEffect(() => {
    handleMetaData({
      title: `Profile - ${username}`,
      description: `View the profile of ${username}.`,
      keywords: "Profile, User Profile, Blogs",
      author: "surya.vme005@gmail.com",
    });
  }, [userId]);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleMenuClose();
    dispatch(clearUser());
    navigate("/blogs/login");
    setTimeout(() => {
      handleShowSnackbar(
        "You’ve successfully logged out. Don’t forget to visit us again!",
        "warning"
      );
    }, [1000]);
  };

  const handleSettings = () => {
    navigate("settings");

    handleMenuClose();
  };

  const handleEditProfile = () => {
    navigate(`edit-profile`);
    handleMenuClose();
  };

  // Dynamic Data (replace with API data if needed)
  const [user, setUser] = useState({
    name: "",
    email: "",
    isVerified: "",
    profilePhoto: "",
    occupation: "",
    joined: "",
    about: "",
  });

  const handleFetchUserData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}${API_URLS.getUserDetails}/${userID}`,
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
  }, [userID]);


  return isLoading ? (
    <SkeletonLoader variant={"content"} />
  ) : (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-50 p-4 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-slate-500 text-white p-6 flex justify-between items-center">
          <div className="flex items-center">
            <Avatar
              alt={user.name}
              src={
                user.profilePhoto
                  ? `${import.meta.env.VITE_BASE_URL}/${user?.profilePhoto}`
                  : "/images/demo-profile.png"
              }
              sx={{ width: 80, height: 80 }}
            />
            <div className="ml-4">
              <h1 className="text-2xl font-bold">{user.name}</h1>
              <p className="text-sm">
                Joined: {new Date(user.joinedDate).toDateString()}
              </p>
            </div>
          </div>
          {token && userID === userId ? (
            <div>
              <IconButton
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleMenuClick}
                color="inherit">
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleMenuClose}>
                <MenuItem onClick={handleEditProfile}>Edit Profile</MenuItem>
                <MenuItem onClick={handleSettings}>Settings</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
          ) : (
            ""
          )}
        </div>

        {/* Main Content */}
        <div className="p-6 space-y-6">
          {/* About Me Section */}
          <div>
            <h2 className="text-lg font-bold mb-2">About {user.name}</h2>
            <p className="text-gray-700">
              {user.about ? (
                user.about
              ) : (
                <div className="text-gray-400">Not Specified</div>
              )}
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-2">Occupation </h2>
            <p className="text-gray-700">{user.occupation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
