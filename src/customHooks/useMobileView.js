import { useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";

const useMobileView = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return isMobile;
};

export default useMobileView;
