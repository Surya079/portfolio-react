/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Typography,
  TextField,
} from "@mui/material";

const PayEMIModal = ({ open, handleClose, loanDetails, handlePayEMI }) => {
  const [paymentAmount, setPaymentAmount] = useState(
    loanDetails.repaymentAmount || 0
  );
  const [paymentDate, setPaymentDate] = useState(
    new Date().toISOString().split("T")[0]
  ); // Default to today's date

  const handleSubmit = () => {
    if (!paymentAmount || paymentAmount <= 0) {
      alert("Please enter a valid payment amount!");
      return;
    }

    // Call parent function to process payment
    handlePayEMI({
      amount: paymentAmount,
      date: paymentDate,
    });

    // Clear inputs and close modal
    setPaymentAmount(loanDetails.repaymentAmount || 0);
    setPaymentDate(new Date().toISOString().split("T")[0]);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Pay EMI for {loanDetails.lender}</DialogTitle>
      <DialogContent>
        <Typography variant="body1" gutterBottom>
          Loan Amount: ₹{loanDetails.amount}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Remaining Balance: ₹{loanDetails.amount - loanDetails.totalPaid}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Next EMI Due Date: {loanDetails.nextEMIDate || "Not Available"}
        </Typography>
        <TextField
          fullWidth
          label="Payment Amount"
          type="number"
          value={paymentAmount}
          onChange={(e) => setPaymentAmount(Number(e.target.value))}
          margin="dense"
        />
        <TextField
          fullWidth
          label="Payment Date"
          type="date"
          value={paymentDate}
          onChange={(e) => setPaymentDate(e.target.value)}
          margin="dense"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Pay EMI
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PayEMIModal;
