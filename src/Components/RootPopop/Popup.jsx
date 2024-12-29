/* eslint-disable react/prop-types */
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const Popup = ({ isOpen, closePopup }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={closePopup}
      slotProps={{
        backdrop: {
          invisible: true,
        },
      }}
      className="motion-preset-pop">
      <DialogTitle>I&apos;m still working on it!</DialogTitle>
      <DialogContent>
        <p>
          Thank you for your patience! The application is under construction.
        </p>
      </DialogContent>
      <DialogActions>
        <Button onClick={closePopup} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Popup;
