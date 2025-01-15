/* eslint-disable react/prop-types */
import { useState } from "react";
import { Modal, Box, TextField, Typography } from "@mui/material";

const AddInvestmentModal = ({ open, onClose, onAdd }) => {
  const [group, setGroup] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = () => {
    if (group && category && subCategory && amount && date) {
      onAdd({
        group,
        category,
        subCategory,
        amount: parseFloat(amount),
        date,
      });
      setGroup("");
      setCategory("");
      setSubCategory("");
      setAmount("");
      setDate("");
      onClose();
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "white",
          p: 3,
          borderRadius: 2,
          boxShadow: 24,
          width: "90%",
          maxWidth: 400,
        }}>
        <Typography variant="h6" gutterBottom>
          Add Investment
        </Typography>
        <TextField
          fullWidth
          label="Group"
          value={group}
          onChange={(e) => setGroup(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Sub-Category"
          value={subCategory}
          onChange={(e) => setSubCategory(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          sx={{ mb: 2 }}
          InputLabelProps={{ shrink: true }}
        />
        <button
          className="button text-black px-2 py-2 ml-2"
          onClick={handleSubmit}>
          Add
        </button>
      </Box>
    </Modal>
  );
};

export default AddInvestmentModal;
