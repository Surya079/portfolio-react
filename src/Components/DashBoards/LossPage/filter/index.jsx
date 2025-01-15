/* eslint-disable react/prop-types */
import { Box, MenuItem, FormControl, InputLabel, Select } from "@mui/material";

const LossFilter = ({ losses, setFilteredCategory }) => {
  const categories = [...new Set(losses.map((loss) => loss.category))]; // Get unique categories

  return (
    <Box mb={2} display="flex" gap={2}>
      <FormControl fullWidth>
        <InputLabel>Category</InputLabel>
        <Select
          onChange={(e) => setFilteredCategory(e.target.value)}
          label="Category"
        >
          <MenuItem value="">All</MenuItem>
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default LossFilter;
