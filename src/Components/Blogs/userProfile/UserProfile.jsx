import { Avatar, Menu, MenuItem, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearUser } from "../../../redux/slice/authSlice";
import { useSnackbar } from "../../../context/SnackbarContext";

const UserProfilePage = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const { handleShowSnackbar } = useSnackbar();

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
    id: 1,
    name: "John Doe",
    avatar: "https://via.placeholder.com/150",
    joinedDate: "January 2022",
    about:
      "Hello! I’m John Doe, a passionate writer and movie enthusiast. I love sharing my thoughts and experiences through blogging.",
    blogs: [
      {
        id: 1,
        title: "My Experience Watching 'The Grand Adventure'",
        link: "/blog/123",
      },
      {
        id: 2,
        title: "Exploring the Best Coffee Spots in Town",
        link: "/blog/coffee-spots",
      },
    ],
  });

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-50 p-4 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-slate-500 text-white p-6 flex justify-between items-center">
          <div className="flex items-center">
            <Avatar
              alt={user.name}
              src={user.avatar}
              sx={{ width: 80, height: 80 }}
            />
            <div className="ml-4">
              <h1 className="text-2xl font-bold">{user.name}</h1>
              <p className="text-sm">Joined: {user.joinedDate}</p>
            </div>
          </div>
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
        </div>

        {/* Main Content */}
        <div className="p-6 space-y-6">
          {/* About Me Section */}
          <div>
            <h2 className="text-lg font-bold mb-2">About Me</h2>
            <p className="text-gray-700">{user.about}</p>
          </div>

          {/* Blog Posts Section */}
          <div>
            <h2 className="text-lg font-bold mb-2">My Blogs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {user.blogs.map((blog, index) => (
                <div
                  onClick={() => navigate(`/blogs/${blog.id}`)}
                  key={index}
                  className="block bg-gray-100 cursor-pointer hover:bg-gray-200 transition p-4 rounded shadow">
                  <h3 className="font-bold text-blue-600">{blog.title}</h3>
                  <p className="text-sm text-gray-600">
                    Click to read this blog.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
