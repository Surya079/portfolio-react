/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Modal, Button, TextField, Typography } from "@mui/material";
import { useSnackbar } from "../../../context/SnackbarContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URLS } from "../../../data/api-urls";
import { useAppDispatch } from "../../../redux/authCustomHooks";
import { setUser } from "../../../redux/slice/authSlice";

const OtpModal = ({ visible, email }) => {
  const [otp, setOtp] = useState("");
  const [resendTimer, setResendTimer] = useState(30);
  const [isLoading, setIsLoading] = useState(false);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const { handleShowSnackbar } = useSnackbar();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    if (visible) {
      setResendTimer(30);
      setIsResendDisabled(true);
      timer = setInterval(() => {
        setResendTimer((prev) => {
          if (prev === 1) {
            clearInterval(timer);
            setIsResendDisabled(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [visible]);

  const handleVerify = async () => {
    try {
      setIsLoading(true);
      const verifyOtpResponse = await axios.post(
        `${import.meta.env.VITE_BASE_URL}${API_URLS.userVerifyOTP}`,
        {
          otp,
          email,
        }
      );
      if (verifyOtpResponse) {
        setIsLoading(false);
        handleShowSnackbar(verifyOtpResponse.data.message, "success");
        console.log(verifyOtpResponse.data.verifiedUser.username);

        dispatch(
          setUser({
            isVerified: "verified",
          })
        );
        setTimeout(() => {
          handleShowSnackbar("You have register successfull", "success");
        }, 2000);
        navigate("/blogs/login");
      }
    } catch (error) {
      handleShowSnackbar(error.response.data.message, "error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = async () => {
    console.log(`${import.meta.env.VITE_BASE_URL}${API_URLS.userSendOtp}`);

    try {
      const resendOtpResponse = await axios.post(
        `${import.meta.env.VITE_BASE_URL}${API_URLS.userSendOtp}`,
        {
          email,
        }
      );
      if (resendOtpResponse) {
        handleShowSnackbar(resendOtpResponse.data.message, "success");
        setResendTimer(30);
        setIsResendDisabled(true);
      }
    } catch (error) {
      handleShowSnackbar(error.response.data.message, "error");
    }
  };

  return (
    <Modal
      open={visible}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <div
        style={{
          padding: 20,
          backgroundColor: "white",
          borderRadius: 8,
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          maxWidth: "400px",
          width: "100%",
        }}>
        <Typography variant="h6" className="text-center" gutterBottom>
          OTP Dialog
        </Typography>
        <span>OTP send to ************{email.slice(-10)} </span>
        <TextField
          fullWidth
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          margin="normal"
        />
        <Button
          variant="contained"
          className="button"
          fullWidth
          onClick={handleVerify}
          sx={{ marginTop: 2 }}>
          {isLoading ? (
            <div className="h-8 w-8 animate-spin  rounded-full border-4 border-e-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
          ) : (
            "Verify"
          )}
        </Button>

        <div
          className={`flex justify-center mt-2 ${
            isResendDisabled
              ? "cursor-not-allowed text-gray-400"
              : "cursor-pointer text-green-700"
          }`}
          disabled={isResendDisabled}
          onClick={handleResend}>
          Resend OTP {isResendDisabled && `(${resendTimer}s)`}
        </div>
      </div>
    </Modal>
  );
};

export default OtpModal;
