/* eslint-disable react/prop-types */
import { Box, MenuItem, TextField } from "@mui/material";

const InvestmentFilter = ({
  investments,
  setFilteredGroup,
  setFilteredCategory,
}) => {
  const groups = [
    ...new Set(investments.map((investment) => investment.group)),
  ];
  const categories = [
    ...new Set(investments.map((investment) => investment.category)),
  ];

  return (
    <Box display="flex" gap={2} my={2}>
      <TextField
        label="Filter by Group"
        select
        fullWidth
        onChange={(e) => setFilteredGroup(e.target.value)}
        defaultValue="">
        <MenuItem value="">All Groups</MenuItem>
        {groups.map((group, index) => (
          <MenuItem key={index} value={group}>
            {group}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        select
        label="Filter by Category"
        fullWidth
        onChange={(e) => setFilteredCategory(e.target.value)}
        defaultValue="">
        <MenuItem value="">All Categories</MenuItem>
        {categories.map((category, index) => (
          <MenuItem key={index} value={category}>
            {category}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
};

export default InvestmentFilter;
