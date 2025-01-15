/* eslint-disable react/prop-types */
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";

const AddRevenueModal = ({ open, onClose, onAdd }) => {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = () => {
    if (category && amount && date) {
      onAdd({ category, amount: parseFloat(amount), date });
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Revenue</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          label="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="date"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          margin="normal"
        />
      </DialogContent>
      <DialogActions>
        <butotn
          onClick={handleSubmit}
          className="button text-black px-2 py-2 ml-2">
          Add Revenue
        </butotn>
      </DialogActions>
    </Dialog>
  );
};

export default AddRevenueModal;
