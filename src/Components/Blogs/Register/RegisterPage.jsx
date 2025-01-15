/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import OtpModal from "../OTPModal/OtpModal";
import { useSnackbar } from "../../../context/SnackbarContext";
import { Navigate, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../redux/authCustomHooks";
import { selectAuth } from "../../../redux/slice/authSlice";
import { API_URLS } from "../../../data/api-urls";

const RegisterBox = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    occupation: "",
    image: null,
  });
  const navigate = useNavigate();
  const [otpForm, setOtpForm] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { handleShowSnackbar } = useSnackbar();
  const { isVerified } = useAppSelector(selectAuth);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormValues({ ...formValues, image: e.target.files[0] });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formValues.name) tempErrors.username = "Username is required.";
    if (!formValues.email) tempErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formValues.email))
      tempErrors.email = "Email is not valid.";
    if (!formValues.password || formValues.password.length < 6)
      tempErrors.password = "Password must be at least 6 characters long.";
    if (!formValues.occupation) {
      tempErrors.occupation = "Occupation is required.";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const formData = new FormData();
      for (const key in formValues) {
        formData.append(key, formValues[key]);
      }

      try {
        setIsLoading(true);
        const response = await axios.post(
          `${import.meta.env.VITE_BASE_URL}${API_URLS.userRegister}`,
          formData
        );

        if (response) {
          setIsLoading(false);
          setOtpForm(true);
          handleShowSnackbar(response.data.message, "success");
        }
      } catch (error) {
        handleShowSnackbar(error.response.data.message, "error");
      } finally {
        setIsLoading(false);
      }
    }
  };

  if (isVerified === "verified") {
    return <Navigate to={"/blogs"} />;
  }
  return (
    <>
      <Box
        sx={{
          width: { xs: "100%", sm: "500px" },
          margin: "auto",
          padding: { xs: 2, sm: 3 },
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: "background.paper",
          my: 5,
        }}>
        <Typography
          id="register-box-title"
          variant="h6"
          component="h2"
          align="center">
          Register
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 2 }}
          className="
        flex flex-col gap-2">
          <TextField
            fullWidth
            label={
              <span>
                Name <span style={{ color: "red" }}>*</span>
              </span>
            }
            name="name"
            value={formValues.username}
            onChange={handleChange}
            error={!!errors.username}
            helperText={errors.username}
          />
          <div>
            <TextField
              fullWidth
              label={
                <span>
                  Email <span style={{ color: "red" }}>*</span>
                </span>
              }
              name="email"
              type="email"
              value={formValues.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
            />
            <span className="text-[10px] text-blue-600 ml-3 ">
              You should verify your email by OTP
            </span>
          </div>

          <TextField
            fullWidth
            label={
              <span>
                Password <span style={{ color: "red" }}>*</span>
              </span>
            }
            name="password"
            type="password"
            value={formValues.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
          />

          <TextField
            fullWidth
            label={
              <span>
                Occupation <span style={{ color: "red" }}>*</span>
              </span>
            }
            name="occupation"
            value={formValues.occupation}
            error={!!errors.occupation}
            helperText={errors.occupation}
            onChange={handleChange}
          />

          <span>Profile Photo:</span>
          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            accept="image/*"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className="button"
            sx={{ mt: 3, mb: 2 }}>
            {isLoading ? (
              <div className="h-8 w-8 animate-spin  rounded-full border-4 border-e-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
            ) : (
              "Register"
            )}
          </Button>
        </Box>

        <Typography component={"div"} align="center">
          Already have an account?{" "}
          <div
            className="cursor-pointer text-sky-500"
            onClick={() => navigate("/blogs/login")}>
            Login
          </div>
        </Typography>
      </Box>
      <OtpModal visible={otpForm} email={formValues.email} />
    </>
  );
};

export default RegisterBox;
