import { useState } from "react";
import { Box } from "@mui/material";
import ProfitFilter from "./filter";
import ProfitGraph from "./graph";
import ProfitList from "./List";
import AddProfitModal from "./Add";

const dummyProfits = [
  {
    category: "Farming",
    amount: 2000,
    date: "2025-01-01",
  },
  {
    category: "Farming",
    amount: 2200,
    date: "2025-01-10",
  },
  {
    category: "Retail",
    amount: 1800,
    date: "2025-01-15",
  },
  {
    category: "Retail",
    amount: 1600,
    date: "2025-02-01",
  },
];

export const ProfitPage = () => {
  const [profits, setProfits] = useState(dummyProfits);
  const [filteredCategory, setFilteredCategory] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const addProfit = (profit) => {
    setProfits([...profits, profit]);
  };

  const filteredProfits = profits.filter((profit) => {
    return !filteredCategory || profit.category === filteredCategory;
  });

  return (
    <Box p={2}>
      <span className="font-bold flex justify-center text-2xl">
        Profit Dashboard
      </span>
      <ProfitFilter
        profits={profits}
        setFilteredCategory={setFilteredCategory}
      />
      <ProfitGraph profits={filteredProfits} />
      <button
        className="button text-black px-2 py-2 ml-2"
        onClick={() => setOpenModal(true)}>
        Add Profit
      </button>
      <ProfitList profits={filteredProfits} />
      <AddProfitModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onAdd={addProfit}
      />
    </Box>
  );
};
