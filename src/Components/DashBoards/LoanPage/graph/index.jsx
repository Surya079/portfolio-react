/* eslint-disable react/prop-types */
import { Line } from "react-chartjs-2";
import { Box } from "@mui/material";

const LoanGraph = ({ loan }) => {
  const months = loan.installments.map((inst) =>
    new Date(inst.date).toLocaleString("default", { month: "short" })
  );
  const paidStatus = loan.installments.map((inst) =>
    inst.status === "Paid" ? inst.amount : 0
  );

  const chartData = {
    labels: months,
    datasets: [
      {
        label: "EMI Paid",
        data: paidStatus,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true, position: "top" },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };
  return (
    <Box sx={{ height: 300, marginBottom: 2 }}>
      <Line data={chartData} options={options} />
    </Box>
  );
};

export default LoanGraph;
