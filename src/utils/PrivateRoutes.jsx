/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useSnackbar } from "../context/SnackbarContext";
import { useAppDispatch, useAppSelector } from "../redux/authCustomHooks";
import { clearUser, selectAuth } from "../redux/slice/authSlice";
import axios from "axios";
import { API_URLS } from "../data/api-urls";
import SkeletonLoader from "../Components/SkeletonLoading/SkeletonLoad";

export const PrivateRoute = ({ children }) => {
  const [user, setUser] = useState();
  const { handleShowSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const { token } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchVerifyUser = async () => {
      try {
        const verifyResponse = await axios.get(
          `${import.meta.env.VITE_BASE_URL}${API_URLS.userVerifyMiddleware}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (verifyResponse) {
          setUser(verifyResponse.data);
        }
      } catch (error) {
        setError(true);
        handleShowSnackbar(error.response.data.message, "error");
      } finally {
        setIsLoading(false);
      }
    };
    fetchVerifyUser();
  }, []);

  useEffect(() => {
    if (error) {
      dispatch(clearUser());
      <Navigate to={"/blogs/login"} />;
    }
  }, [error]);

  if (isLoading) {
    return (
      <div className="mt-6">
        <SkeletonLoader variant={"content"} />
      </div>
    );
  }

  return user ? children : <Navigate to={"/blogs/login"} />;
};
