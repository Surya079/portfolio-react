/* eslint-disable react/prop-types */
import { useState } from "react";
import { Box, Typography, Divider, Grid2 as Grid } from "@mui/material";
import LoanGraph from "../graph";
import PayEMIModal from "./pay";

const LoanDetails = ({ loan, setSelectedLoan, setLoans }) => {
  const [isPayModalOpen, setIsPayModalOpen] = useState(false); // State for modal

  const nextInstallment = loan.installments.find(
    (installment) => installment.status === "Pending"
  );

  const handlePay = (paymentDetails) => {
    const updatedLoan = {
      ...loan,
      totalPaid: loan.totalPaid + paymentDetails.amount,
      installments: loan.installments.map((installment) =>
        installment.date === paymentDetails.date
          ? { ...installment, status: "Paid" }
          : installment
      ),
    };

    // Update loans in state
    setLoans((prevLoans) =>
      prevLoans.map((l) => (l.id === loan.id ? updatedLoan : l))
    );

    // Update selected loan
    setSelectedLoan(updatedLoan);

    // Close modal
    setIsPayModalOpen(false);
  };

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>
        Loan Details: {loan.lender}
      </Typography>

      <Divider sx={{ mb: 2 }} />

      {/* Loan Information */}
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography>
            <strong>Lender:</strong> {loan.lender}
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography>
            <strong>Loan Amount:</strong> ₹{loan.amount.toLocaleString()}
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography>
            <strong>Interest Rate:</strong> {loan.interestRate}%
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography>
            <strong>Repayment Amount (EMI):</strong> ₹
            {loan.repaymentAmount.toLocaleString()}
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography>
            <strong>Total Paid:</strong> ₹{loan.totalPaid.toLocaleString()}
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography>
            <strong>Remaining Amount:</strong> ₹
            {(loan.amount - loan.totalPaid).toLocaleString()}
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography>
            <strong>Start Date:</strong>{" "}
            {new Date(loan.startDate).toLocaleDateString()}
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography>
            <strong>End Date:</strong>{" "}
            {new Date(loan.endDate).toLocaleDateString()}
          </Typography>
        </Grid>
      </Grid>

      <Divider sx={{ my: 2 }} />

      {/* Loan Graph */}
      <Typography variant="h6" gutterBottom>
        EMI Progress
      </Typography>
      <LoanGraph loan={loan} />

      {/* Next EMI */}
      {nextInstallment ? (
        <>
          <Typography sx={{ mt: 2 }}>
            <strong>Next EMI Date:</strong>{" "}
            {new Date(nextInstallment.date).toDateString()}
          </Typography>
          <button
            className="button text-black px-2 py-2"
            onClick={() => setIsPayModalOpen(true)} // Open modal on button click
          >
            Pay Next EMI
          </button>
        </>
      ) : (
        <Typography sx={{ mt: 2 }}>All EMIs are paid!</Typography>
      )}

      {/* Back Button */}
      <button
        onClick={() => setSelectedLoan(null)}
        className="button text-black px-2 py-2 ml-2">
        Back to List
      </button>

      {/* Pay EMI Modal */}
      <PayEMIModal
        open={isPayModalOpen}
        handleClose={() => setIsPayModalOpen(false)} // Close modal
        loanDetails={loan}
        handlePayEMI={handlePay} // Pass payment handler
      />
    </Box>
  );
};

export default LoanDetails;
