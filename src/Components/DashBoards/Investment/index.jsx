import { useState } from "react";
import { Box } from "@mui/material";
import AddInvestmentModal from "./Add";
import InvestmentList from "./List";
import InvestmentGraph from "./Graph";
import InvestmentFilter from "./filter";

// Updated dummy data based on models
const initialInvestments = [
  {
    group: "Agriculture",
    category: "Rice Farming",
    subCategory: "Seed Purchase",
    date: "2025-01-02",
    amount: 800,
  },
  {
    group: "Agriculture",
    category: "Rice Farming",
    subCategory: "Irrigation Maintenance",
    date: "2025-01-05",
    amount: 500,
  },
  {
    group: "Business",
    category: "Retail",
    subCategory: "Stock Purchase",
    date: "2025-01-07",
    amount: 1200,
  },
  {
    group: "Technology",
    category: "Software Development",
    subCategory: "Developer Salary",
    date: "2025-01-10",
    amount: 2500,
  },
  {
    group: "Technology",
    category: "Software Development",
    subCategory: "Cloud Hosting",
    date: "2025-01-12",
    amount: 1500,
  },
  {
    group: "Real Estate",
    category: "Construction",
    subCategory: "Material Purchase",
    date: "2025-01-15",
    amount: 3000,
  },
];

export const InvestmentPage = () => {
  const [investments, setInvestments] = useState(initialInvestments);
  const [filteredGroup, setFilteredGroup] = useState("");
  const [filteredCategory, setFilteredCategory] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const addInvestment = (investment) => {
    setInvestments([...investments, investment]);
  };

  const filteredInvestments = investments.filter((investment) => {
    return (
      (!filteredGroup || investment.group === filteredGroup) &&
      (!filteredCategory || investment.category === filteredCategory)
    );
  });

  return (
    <Box p={2}>
      <span className="font-bold flex justify-center text-2xl">
        Investment Dashboard
      </span>
      <InvestmentFilter
        investments={investments}
        setFilteredGroup={setFilteredGroup}
        setFilteredCategory={setFilteredCategory}
      />
      <InvestmentGraph investments={filteredInvestments} />
      <button
        onClick={() => setOpenModal(true)}
        className="button text-black px-2 py-2 ml-2">
        Add Investment
      </button>
      <InvestmentList investments={filteredInvestments} />
      <AddInvestmentModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onAdd={addInvestment}
      />
    </Box>
  );
};
