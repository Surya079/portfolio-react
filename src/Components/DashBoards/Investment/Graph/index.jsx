/* eslint-disable react/prop-types */
import { Line } from "react-chartjs-2";
import { Box } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const InvestmentGraph = ({ investments }) => {
  const currentMonth = new Date().getMonth();
  const data = Array(12).fill(0);

  // Process investments and accumulate amounts by month
  investments.forEach((investment) => {
    const month = new Date(investment.date).getMonth();
    if (month <= currentMonth) {
      data[month] += investment.amount;
    }
  });

  // Prepare chart data
  const chartData = {
    labels: months.slice(0, currentMonth + 1),
    datasets: [
      {
        label: "Investment Amount",
        data: data.slice(0, currentMonth + 1),
        borderColor: "blue",
        backgroundColor: "rgba(0, 0, 255, 0.1)",
        tension: 0.4,
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
    <Box sx={{ height: 300 }}>
      <Line data={chartData} options={options} />
    </Box>
  );
};

export default InvestmentGraph;
