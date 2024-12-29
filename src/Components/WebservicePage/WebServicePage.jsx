import { motion } from "framer-motion";
import { Typography, Grid, Container } from "@mui/material";
import { Link } from "react-router-dom";

const featureList = [
  {
    title: "Static Websites",
    description:
      "Clean, fast-loading static websites with a professional look, perfect for showcasing portfolios or small business needs.",
  },
  {
    title: "Dynamic Websites",
    description:
      "Interactive websites powered by dynamic content and real-time user engagement tailored to your requirements.",
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Build e-commerce platforms with robust product management, payment gateways, and responsive user interfaces.",
  },
  {
    title: "Responsive Design",
    description:
      "Ensure your website looks great on all devices with mobile-first, adaptive designs.",
  },
  {
    title: "API Integration",
    description:
      "Enhance functionality by integrating custom APIs to connect with third-party services seamlessly.",
  },
  {
    title: "Bug Fixing",
    description:
      "Fix errors, optimize performance, and ensure smooth website functionality across platforms.",
  },
];

const WebServicePage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ textAlign: "center", marginBottom: "60px" }}>
        <Typography variant="h3" fontWeight="bold" sx={{ mb: 2 }}>
          Web Development Services
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          From static websites to advanced APIs, I deliver quality solutions for
          every web need.
        </Typography>
        <Link to={"/projects"} className="text-black hover:text-black">
          Visit my porjects
        </Link>
      </motion.div>

      {/* Features Section */}
      <Grid container spacing={4}>
        {featureList.map((feature, index) => (
          <Grid item xs={12} md={6} key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}>
              <div className="rounded-xl bg-gradient-to-br from-purple-500 to-blue-600 shadow-lg p-6 hover:shadow-2xl">
                <Typography
                  variant="h6"
                  className="text-white font-semibold mb-3">
                  {feature.title}
                </Typography>
                <Typography variant="body2" className="text-white">
                  {feature.description}
                </Typography>
              </div>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Animation CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        style={{ textAlign: "center", marginTop: "60px" }}>
        <Typography variant="h5" sx={{ color: "text.primary", mb: 2 }}>
          Ready to build your next project?
        </Typography>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="inline-block px-8 py-4 text-white bg-blue-600 rounded-lg shadow hover:text-white">
          Contact Me Now
        </motion.a>
      </motion.div>
    </Container>
  );
};

export default WebServicePage;
