/* eslint-disable react/prop-types */
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const LossList = ({ losses }) => {
  return (
    <Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Category</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {losses.map((loss, index) => (
              <TableRow key={index}>
                <TableCell>{loss.category}</TableCell>
                <TableCell>{loss.amount}</TableCell>
                <TableCell>{loss.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default LossList;
