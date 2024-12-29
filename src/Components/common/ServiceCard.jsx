import { motion } from "framer-motion";
import { Typography, Grid, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ServicesPage = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ textAlign: "center", marginBottom: "60px" }}>
        <Typography variant="h3" fontWeight="bold" sx={{ mb: 2 }}>
          Explore My Services
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Delivering top-notch services for photo editing and web application
          development.
        </Typography>
      </motion.div>

      {/* Services Grid */}
      <Grid container spacing={4}>
        {/* Web Application Service */}
        <Grid item xs={12} md={6}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}>
            <div className="rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg p-6 hover:shadow-xl">
              <Typography variant="h5" className="text-white font-bold">
                Web Application Build
              </Typography>
              <Typography variant="body1" className="text-white mt-3">
                Create responsive, user-friendly, and dynamic web solutions for
                your business.
              </Typography>
              <Button
                variant="contained"
                className="button"
                sx={{ mt: 4, backgroundColor: "#fff", color: "#000" }}
                onClick={() => navigate("/service/web-service")}>
                Learn More
              </Button>
            </div>
          </motion.div>
        </Grid>

        {/* Photo Editing Service */}
        <Grid item xs={12} md={6}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}>
            <div className="rounded-xl bg-gradient-to-br from-pink-500 to-red-600 shadow-lg p-6 hover:shadow-xl">
              <Typography variant="h5" className="text-white font-bold">
                Photo Editing
              </Typography>
              <Typography variant="body1" className="text-white mt-3">
                Transform your visuals with professional-grade photo editing
                services.
              </Typography>
              <Button
                variant="contained"
                className="button"
                sx={{ mt: 4, backgroundColor: "#fff", color: "#000" }}
                onClick={() => navigate("/service/edit-service")}>
                Learn More
              </Button>
            </div>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ServicesPage;
