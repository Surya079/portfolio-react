/* eslint-disable no-unused-vars */
import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useSnackbar } from "../../../context/SnackbarContext";
import { Navigate, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/authCustomHooks";
import { selectAuth, setUser } from "../../../redux/slice/authSlice";
import { API_URLS } from "../../../data/api-urls";

const LoginBox = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { handleShowSnackbar } = useSnackbar();
  const { token } = useAppSelector(selectAuth);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formValues.email) tempErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formValues.email))
      tempErrors.email = "Email is not valid.";
    if (!formValues.password || formValues.password.length < 6)
      tempErrors.password = "Password must be at least 6 characters long.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        setIsLoading(true);
        const response = await axios.post(
          `${import.meta.env.VITE_BASE_URL}${API_URLS.userLogin}`,
          formValues
        );

        if (response) {
          setIsLoading(false);
          handleShowSnackbar(response.data.message, "success");
          dispatch(
            setUser({
              token: response.data.token,
              username: response.data.current_user.username,
              email: response.data.current_user.email,
              occupation: response.data.current_user.occupation,
              role: response.data.current_user.role,
              isVerified: response.data.current_user.isVerified,
            })
          );
        }
      } catch (error) {
        if (error.response.data.error) {
          handleShowSnackbar("Something went wrong", "error");
        }
        handleShowSnackbar(error.response.data.message, "error");
      } finally {
        setIsLoading(false);
      }
    }
  };
  if (token) {
    return <Navigate to={"/blogs"} />;
  }

  return (
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
        id="login-box-title"
        variant="h6"
        component="h2"
        align="center">
        Login
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ mt: 2 }}
        className="flex flex-col gap-3">
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formValues.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
        />

        <TextField
          fullWidth
          label="Password"
          name="password"
          type="password"
          value={formValues.password}
          onChange={handleChange}
          error={!!errors.password}
          helperText={errors.password}
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
            "Login"
          )}
        </Button>
      </Box>
      <Typography align="center" sx={{ mt: 2 }}>
        <span>New user?</span>{" "}
        <Box
          component="span"
          sx={{ color: "primary.main", cursor: "pointer" }}
          onClick={() => navigate("/blogs/register")}>
          Register
        </Box>
      </Typography>
    </Box>
  );
};

export default LoginBox;
