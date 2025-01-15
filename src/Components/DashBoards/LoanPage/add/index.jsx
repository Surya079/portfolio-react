/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

const AddLoanModal = ({ open, onClose, handleAddLoan }) => {
  const [loanData, setLoanData] = useState({
    lender: "",
    amount: "",
    interestRate: "",
    repaymentAmount: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoanData({ ...loanData, [name]: value });
  };

  const handleSubmit = () => {
    // Validate form fields
    if (
      !loanData.lender ||
      !loanData.amount ||
      !loanData.interestRate ||
      !loanData.repaymentAmount ||
      !loanData.endDate
    ) {
      alert("Please fill all fields!");
      return;
    }

    // Call the handler passed as props
    handleAddLoan(loanData);

    // Clear the form and close the modal
    setLoanData({
      lender: "",
      amount: "",
      interestRate: "",
      repaymentAmount: "",
      startDate: "",
      endDate: "",
    });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New Loan</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          label="Lender Name"
          name="lender"
          value={loanData.lender}
          onChange={handleChange}
          margin="dense"
        />
        <TextField
          fullWidth
          label="Loan Amount"
          name="amount"
          type="number"
          value={loanData.amount}
          onChange={handleChange}
          margin="dense"
        />
        <TextField
          fullWidth
          label="Interest Rate (%)"
          name="interestRate"
          type="number"
          value={loanData.interestRate}
          onChange={handleChange}
          margin="dense"
        />
        <TextField
          fullWidth
          label="Repayment Amount"
          name="repaymentAmount"
          type="number"
          value={loanData.repaymentAmount}
          onChange={handleChange}
          margin="dense"
        />
        <TextField
          fullWidth
          label="End Date"
          name="endDate"
          type="date"
          value={loanData.endDate}
          onChange={handleChange}
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          margin="dense"
        />
      </DialogContent>
      <DialogActions>
        <button
          onClick={handleSubmit}
          className="button text-black px-2 py-2 ml-2">
          Add Loan
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default AddLoanModal;
