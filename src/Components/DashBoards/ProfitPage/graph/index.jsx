/* eslint-disable react/prop-types */
import { Line } from "react-chartjs-2";
import { Box } from "@mui/material";

const ProfitGraph = ({ profits }) => {
  const currentMonth = new Date().getMonth();
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
  const data = Array(12).fill(0);

  profits.forEach((profit) => {
    const month = new Date(profit.date).getMonth();
    if (month <= currentMonth) {
      data[month] += profit.amount;
    }
  });

  const chartData = {
    labels: months.slice(0, currentMonth + 1),
    datasets: [
      {
        label: "Profit Amount",
        data: data.slice(0, currentMonth + 1),
        borderColor: "blue",
        backgroundColor: "rgba(0, 0, 255, 0.1)",
        tension: 0.4,
      },
    ],
  };

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

export default ProfitGraph;
