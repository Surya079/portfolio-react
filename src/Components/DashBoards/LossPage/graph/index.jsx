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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LossGraph = ({ losses }) => {
  // Format the date to get the month and year without using external libraries
  const formattedLosses = losses.map((loss) => {
    const date = new Date(loss.date);
    const monthYear = `${date.toLocaleString("default", {
      month: "short",
    })} ${date.getFullYear()}`;
    return {
      ...loss,
      formattedDate: monthYear, // Format as Month Year (e.g., Jan 2025)
    };
  });

  // Aggregate losses by month
  const aggregatedLosses = formattedLosses.reduce((acc, loss) => {
    const monthYear = loss.formattedDate;
    if (!acc[monthYear]) {
      acc[monthYear] = 0;
    }
    acc[monthYear] += loss.amount; // Sum up the amounts for the same month
    return acc;
  }, {});

  const months = Object.keys(aggregatedLosses);
  const amounts = Object.values(aggregatedLosses);

  // Chart Data
  const chartData = {
    labels: months, // Use the aggregated months as labels
    datasets: [
      {
        label: "Loss",
        data: amounts, // Use the aggregated amounts as data
        borderColor: "rgba(255,99,132,1)",
        backgroundColor: "rgba(255,99,132,0.2)",
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
    <Box sx={{ height: 300, marginBottom: 2 }}>
      <Line data={chartData} options={options} />
    </Box>
  );
};

export default LossGraph;
