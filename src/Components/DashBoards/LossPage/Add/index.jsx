/* eslint-disable react/prop-types */
import { Box, TextField, Modal } from "@mui/material";
import { useState } from "react";

const AddLossModal = ({ open, onClose, onAdd }) => {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleAddLoss = () => {
    const newLoss = {
      category,
      amount: parseFloat(amount),
      date,
    };
    onAdd(newLoss);
    onClose();
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

          width: "100%",
          maxWidth: 500,
        }}
        className="flex flex-col gap-2">
        <TextField
          label="Category"
          variant="outlined"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <TextField
          label="Amount"
          variant="outlined"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
        />
        <TextField
          label="Date"
          variant="outlined"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="date"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />
        <button
          className="button text-black px-2 py-2 ml-2"
          onClick={handleAddLoss}>
          Add Loss
        </button>
      </Box>
    </Modal>
  );
};

export default AddLossModal;
