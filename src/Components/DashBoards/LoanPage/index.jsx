import { useState } from "react";
import { Box, Typography } from "@mui/material";
import LoanDetails from "./details";
import LoanList from "./Lists";
import AddLoanModal from "./add";

const dummyLoans = [
  {
    id: 1,
    lender: "ABC Bank",
    amount: 500000,
    interestRate: 5,
    repaymentAmount: 10000,
    totalPaid: 30000,
    startDate: "2024-01-01",
    endDate: "2028-01-01",
    installments: [
      { date: "2024-02-01", amount: 10000, status: "Paid" },
      { date: "2024-03-01", amount: 10000, status: "Paid" },
      { date: "2024-04-01", amount: 10000, status: "Pending" },
    ],
  },
  {
    id: 2,
    lender: "XYZ Finance",
    amount: 200000,
    interestRate: 7,
    repaymentAmount: 5000,
    totalPaid: 0,
    startDate: "2024-03-01",
    endDate: "2026-03-01",
    installments: [{ date: "2024-04-01", amount: 5000, status: "Pending" }],
  },
];

const LoanPage = () => {
  const [loans, setLoans] = useState(dummyLoans);
  const [selectedLoan, setSelectedLoan] = useState(null); // For viewing loan details
  const [openModal, setOpenModal] = useState(false);

  const addLoan = (loan) => {
    setLoans([...loans, loan]);
  };

  return (
    <Box p={2}>
      <Typography variant="h4" gutterBottom>
        Loan Dashboard
      </Typography>
      {selectedLoan ? (
        <LoanDetails
          loan={selectedLoan}
          setSelectedLoan={setSelectedLoan}
          setLoans={setLoans}
        />
      ) : (
        <>
          <LoanList loans={loans} setSelectedLoan={setSelectedLoan} />
          <button
            className="button text-black px-2 py-2 ml-2"
            onClick={() => setOpenModal(true)}>
            Add New Loan
          </button>
          <AddLoanModal
            open={openModal}
            onClose={() => setOpenModal(false)}
            onAdd={addLoan}
          />
        </>
      )}
    </Box>
  );
};

export default LoanPage;
