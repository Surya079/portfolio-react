import { Snackbar, Alert } from "@mui/material";
import useMobileView from "../../customHooks/useMobileView";
import React from "react";

declare global {
  interface SnackbarProps {
    message: string;
    type: "success" | "error" | "info" | "warning";
    open: boolean;
    handleClose: () => void;
  }
}

const ResponsiveSnackbar: React.FC<SnackbarProps> = ({
  message,
  type,
  open,
  handleClose,
}) => {
  const isMobile = useMobileView();
  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      autoHideDuration={3000}
      anchorOrigin={
        isMobile
          ? {
              vertical: "bottom",
              horizontal: "center",
            }
          : {
              vertical: "top",
              horizontal: "center",
            }
      }
      sx={{
        maxWidth: "90%",
        "@media(max-width:780px)": {
          bottom: "10px",
        },
        "@media(max-width:480px)": {
          bottom: "5px",
          right: "10px",
        },
      }}>
      <Alert
        severity={type}
        sx={{
          width: "100%",
          fontSize: "14px",
          "@media (max-width:480px)": {
            fontSize: "12px",
          },
        }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default ResponsiveSnackbar;
