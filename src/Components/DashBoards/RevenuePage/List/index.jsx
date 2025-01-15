/* eslint-disable react/prop-types */
import { List, ListItem, ListItemText, Box, Divider } from "@mui/material";

const RevenueList = ({ revenues }) => {
  return (
    <Box mt={2}>
      <List>
        {revenues.map((revenue, index) => (
          <div key={index}>
            <ListItem>
              <ListItemText
                primary={`${revenue.category} - $${revenue.amount}`}
                secondary={`Date: ${new Date(
                  revenue.date
                ).toLocaleDateString()}`}
              />
            </ListItem>
            {index < revenues.length - 1 && <Divider />}
          </div>
        ))}
      </List>
    </Box>
  );
};

export default RevenueList;
