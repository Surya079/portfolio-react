/* eslint-disable react/prop-types */
import { MenuItem, Select, InputLabel, FormControl } from "@mui/material";

const ProfitFilter = ({ profits, setFilteredCategory }) => {
  const categories = [...new Set(profits.map((profit) => profit.category))];

  return (
    <FormControl fullWidth>
      <InputLabel>Category</InputLabel>
      <Select
        label="Category"
        onChange={(e) => setFilteredCategory(e.target.value)}
      >
        <MenuItem value="">All Categories</MenuItem>
        {categories.map((category) => (
          <MenuItem key={category} value={category}>
            {category}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ProfitFilter;
