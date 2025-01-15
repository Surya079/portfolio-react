import { useEffect, useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import useMetaData from "../../../context/metaContext";
import { useAppSelector } from "../../../redux/authCustomHooks";
import { selectAuth } from "../../../redux/slice/authSlice";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { API_URLS } from "../../../data/api-urls";
import { useSnackbar } from "../../../context/SnackbarContext";

const EditProfile = () => {
  const [user, setUser] = useState({
    name: "",
    image: null, // Stores file for upload
    imageUrl: "", // URL to display the existing image
    about: "",
    occupation: "",
  });
  const userID = useParams();
  const { userId, username, token } = useAppSelector(selectAuth);
  const { handleMetaData } = useMetaData();
  const { handleShowSnackbar } = useSnackbar();
  const navigate = useNavigate();
  useEffect(() => {
    handleMetaData({
      title: `Edit Profile - ${username}`,
      description: `Edit the profile of ${username}.`,
      keywords: "Edit Profile, User Profile, Settings",
      author: "surya.vme005@gmail.com",
    });
  }, [userId]);

  const handleGetEditUser = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}${API_URLS.getEditUserDetails}/${
          userID.id
        }`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        console.log(response.data);
        setUser({
          name: response.data.user.name,
          image: null, // Initially no file selected
          imageUrl: `${import.meta.env.VITE_BASE_URL}/${
            response.data.user.profilePicture
          }`, // Construct the full image URL
          about: response.data.user.aboutMe,
          occupation: response.data.user.occupation,
        });
      }
    } catch (error) {
      handleShowSnackbar(
        error.response?.data?.message || "Failed to fetch user data",
        "error"
      );
    }
  };

  const handleFileChange = (e) => {
    setUser({
      ...user,
      image: e.target.files[0], // Store the selected file
      imageUrl: URL.createObjectURL(e.target.files[0]), // Update the preview with the selected file
    });
  };

  useEffect(() => {
    handleGetEditUser();
  }, [userID]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    for (const key in user) {
      if (key !== "imageUrl") {
        formData.append(key, user[key]);
      }
    }
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BASE_URL}${API_URLS.editUser}/${userID.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        handleShowSnackbar("Profile updated successfully!", "success");
        /*************  ✨ Codeium Command ⭐  *************/
        navigate(-1);

        /******  ac5ab129-b583-4991-a78a-36a8a3fd2473  *******/
      }
    } catch (error) {
      console.log(error);

      handleShowSnackbar(error.response?.data?.message, "error");
    }
  };

  return (
    <Container className="flex flex-col py-5 items-center mt-10">
      <Typography variant="h4" className="mb-6">
        Edit Profile
      </Typography>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="mb-4">
          <TextField
            label="Name"
            name="name"
            value={user.name}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            className="mb-4"
          />
        </div>
        <div className="mb-4">
          <TextField
            label="Occupation"
            name="occupation"
            value={user.occupation}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            className="mb-4"
          />
        </div>
        <div className="mb-4">
          <TextField
            label="About"
            name="about"
            value={user.about}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            className="mb-4"
          />
        </div>
        <div className="mb-4">
          {/* Display Existing Image */}

          <TextField
            type="file"
            accept="image/*"
            name="image"
            onChange={handleFileChange}
            fullWidth
            variant="outlined"
            className="mb-4"
          />
          {user.imageUrl && (
            <img
              src={user.imageUrl}
              alt="Profile"
              style={{
                width: "100px",
                marginTop: 2,
                height: "100px",
                objectFit: "cover",
                marginBottom: "10px",
              }}
            />
          )}
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="w-full">
          Save Changes
        </Button>
      </form>
    </Container>
  );
};

export default EditProfile;
