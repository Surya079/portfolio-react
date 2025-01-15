/* eslint-disable react/prop-types */
import { Typography, Box, Card } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

export const DashboardCard = ({ title, amount, color }) => {
  return (
    <Card
      sx={{
        borderLeft: `6px solid`,
        boxShadow: 3,
        borderRadius: 2,
      }}>
      <Box
        sx={{
          backgroundColor: `${color}`,
          p: 1,
        }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "black" }}>
          {title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: 1,
          }}>
          <CurrencyRupeeIcon
            sx={{
              marginRight: 0.5,
              fontSize: "1.5rem",
            }}
          />
          <Typography variant="h4" sx={{ fontWeight: "bold", color: "black" }}>
            {amount}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};
