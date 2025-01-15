/* eslint-disable react/prop-types */
import { Box, Typography, Card, CardContent } from "@mui/material";

const LoanList = ({ loans, setSelectedLoan }) => {
  const pendingLoans = loans.filter((loan) =>
    loan.installments.some((installment) => installment.status === "Pending")
  );

  const completedLoans = loans.filter(
    (loan) =>
      !loan.installments.some((installment) => installment.status === "Pending")
  );

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Pending Loans
      </Typography>
      {pendingLoans.map((loan) => (
        <Card key={loan.id} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">{loan.lender}</Typography>
            <Typography>Amount: ₹{loan.amount}</Typography>
            <button
              className="button text-black px-2 py-2 ml-2"
              onClick={() => setSelectedLoan(loan)}>
              View Details
            </button>
          </CardContent>
        </Card>
      ))}
      <Typography variant="h5" gutterBottom>
        Completed Loans
      </Typography>
      {completedLoans.map((loan) => (
        <Card key={loan.id} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">{loan.lender}</Typography>
            <Typography>Amount: ₹{loan.amount}</Typography>
            <button
              className="button text-black px-2 py-2 ml-2"
              onClick={() => setSelectedLoan(loan)}>
              View Details
            </button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default LoanList;
