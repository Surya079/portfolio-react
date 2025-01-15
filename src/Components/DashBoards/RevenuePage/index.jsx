import { useState } from "react";
import { Box } from "@mui/material";
import RevenueFilter from "./filter";
import RevenueGraph from "./graph";
import RevenueList from "./List";
import AddRevenueModal from "./Add";

const dummyRevenues = [
  {
    category: "Farming",
    amount: 1000,
    date: "2025-01-01",
  },
  {
    category: "Farming",
    amount: 1200,
    date: "2025-01-10",
  },
  {
    category: "Retail",
    amount: 1500,
    date: "2025-01-15",
  },
  {
    category: "Retail",
    amount: 800,
    date: "2025-02-01",
  },
];

export const RevenuePage = () => {
  const [revenues, setRevenues] = useState(dummyRevenues);
  const [filteredCategory, setFilteredCategory] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const addRevenue = (revenue) => {
    setRevenues([...revenues, revenue]);
  };

  const filteredRevenues = revenues.filter((revenue) => {
    return !filteredCategory || revenue.category === filteredCategory;
  });

  return (
    <Box p={2}>
      <span className="font-bold flex justify-center text-2xl">
        Revenue Dashboard
      </span>
      <RevenueFilter
        revenues={revenues}
        setFilteredCategory={setFilteredCategory}
      />
      <RevenueGraph revenues={filteredRevenues} />
      <button
        onClick={() => setOpenModal(true)}
        className="button text-black px-2 py-2 ml-2">
        Add Revenue
      </button>
      <RevenueList revenues={filteredRevenues} />
      <AddRevenueModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onAdd={addRevenue}
      />
    </Box>
  );
};
