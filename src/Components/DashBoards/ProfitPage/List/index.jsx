/* eslint-disable react/prop-types */
import { List, ListItem, ListItemText, Box, Divider } from "@mui/material";

const ProfitList = ({ profits }) => {
  return (
    <Box mt={2}>
      <List>
        {profits.map((profit, index) => (
          <div key={index}>
            <ListItem>
              <ListItemText
                primary={`${profit.category} - $${profit.amount}`}
                secondary={`Date: ${new Date(profit.date).toLocaleDateString()}`}
              />
            </ListItem>
            {index < profits.length - 1 && <Divider />}
          </div>
        ))}
      </List>
    </Box>
  );
};

export default ProfitList;
