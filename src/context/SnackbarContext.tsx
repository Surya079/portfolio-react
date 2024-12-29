import React, { createContext, useContext, useState } from "react";
import ResponsiveSnackbar from "../Components/ResponsiveSnackbar";

interface SnackbarContextType {
  handleShowSnackbar: (
    message: string,
    type: "success" | "error" | "info" | "warning"
  ) => void;
}
const defaultSnackBarContext: SnackbarContextType = {
  handleShowSnackbar: () => {
    console.warn("SnackbarContext is not wrapped in a Provider.");
  },
};
const SnackbarContext = createContext<SnackbarContextType>(
  defaultSnackBarContext
);

export const SnackbarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [snackbar, setSnackbar] = useState({
    message: "",
    type: "success" as "success" | "error" | "info" | "warning",
    open: false,
  });

  const handleShowSnackbar = (
    message: string,
    type: "success" | "error" | "info" | "warning"
  ) => {
    setSnackbar({ message, type, open: true });
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({
      ...prev,
      open: false,
    }));
  };
  return (
    <SnackbarContext.Provider value={{ handleShowSnackbar }}>
      {children}
      <ResponsiveSnackbar
        message={snackbar.message}
        type={snackbar.type}
        open={snackbar.open}
        handleClose={handleCloseSnackbar}
      />
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => useContext(SnackbarContext);
