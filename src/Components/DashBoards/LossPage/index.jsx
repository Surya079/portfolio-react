import { useState } from "react";
import { Box, Typography } from "@mui/material";
import LossFilter from "./filter";
import LossGraph from "./graph";
import LossList from "./List";
import AddLossModal from "./Add";

const dummyLosses = [
  {
    category: "Farming",
    amount: 500,
    date: "2025-01-01",
  },
  {
    category: "Farming",
    amount: 300,
    date: "2025-01-10",
  },
  {
    category: "Retail",
    amount: 800,
    date: "2025-01-15",
  },
  {
    category: "Retail",
    amount: 600,
    date: "2025-02-01",
  },
];

export const LossPage = () => {
  const [losses, setLosses] = useState(dummyLosses);
  const [filteredCategory, setFilteredCategory] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const addLoss = (loss) => {
    setLosses([...losses, loss]);
  };

  const filteredLosses = losses.filter((loss) => {
    return !filteredCategory || loss.category === filteredCategory;
  });

  return (
    <Box p={2}>
      <Typography variant="h4" gutterBottom>
        Loss Dashboard
      </Typography>
      <LossFilter losses={losses} setFilteredCategory={setFilteredCategory} />
      <LossGraph losses={filteredLosses} />
      <button
        className="button text-black px-2 py-2 ml-2"
        onClick={() => setOpenModal(true)}>
        Add Loss
      </button>
      <LossList losses={filteredLosses} />
      <AddLossModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onAdd={addLoss}
      />
    </Box>
  );
};
