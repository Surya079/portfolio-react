/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableSortLabel,
  Box,
} from "@mui/material";

const InvestmentList = ({ investments, setInvestments }) => {
  const [sortConfig, setSortConfig] = useState({
    key: "date",
    direction: "asc",
  });

  const sortedInvestments = [...investments].sort((a, b) => {
    if (sortConfig.key === "amount") {
      return sortConfig.direction === "asc"
        ? a.amount - b.amount
        : b.amount - a.amount;
    } else {
      return sortConfig.direction === "asc"
        ? new Date(a.date) - new Date(b.date)
        : new Date(b.date) - new Date(a.date);
    }
  });

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  return (
    <Box mt={2}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <TableSortLabel
                active={sortConfig.key === "date"}
                direction={
                  sortConfig.key === "date" ? sortConfig.direction : "asc"
                }
                onClick={() => handleSort("date")}>
                Date
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={sortConfig.key === "amount"}
                direction={
                  sortConfig.key === "amount" ? sortConfig.direction : "asc"
                }
                onClick={() => handleSort("amount")}>
                Amount
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedInvestments.map((investment, index) => (
            <TableRow key={index}>
              <TableCell>
                {new Date(investment.date).toLocaleDateString()}
              </TableCell>
              <TableCell>${investment.amount.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default InvestmentList;
