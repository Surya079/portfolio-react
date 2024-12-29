import { useState, useRef } from "react";
import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";

const photos = [
  {
    id: 1,
    before: "/images/before-edit-pic-1.JPG",
    after: "/images/after-edit-pic-1.jpg",
    description: "Enhanced lighting and removed imperfections.",
  },
  {
    id: 2,
    before: "/images/before-edit-pic-2.JPG",
    after: "/images/after-edit-pic-2.jpg",
    description: "Color correction and sharpening applied.",
  },
  {
    id: 3,
    before: "/images/before-edit-pic-3.JPG",
    after: "/images/after-edit-pic-3.jpg",
    description: "Skin retouching for a polished portrait.",
  },
];

const services = [
  {
    id: 1,
    title: "Quality Banner Editing",
    description:
      "We specialize in creating high-quality banners for your business needs.",
    image: "/images/banner-img1.jpg",
  },
  {
    id: 2,
    title: "Business Marketing Banners",
    description:
      "Professional banners designed to enhance your marketing campaigns.",
    image: "/images/banner-img2.jpg",
  },
  {
    id: 3,
    title: "Custom Event Banners",
    description: "Custom-designed banners for any event, big or small.",
    image: "/images/banner-img3.jpg",
  },
];

const EditServicePage = () => {
  const [dragPosition, setDragPosition] = useState(50); // Initial slider position (50%)
  const containerRefs = useRef([]);

  const handleDrag = (e, index) => {
    const container = containerRefs.current[index];
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const offsetX = e.clientX - containerRect.left;

    // Calculate the new drag position as a percentage
    const newPosition = Math.max(
      0,
      Math.min(100, (offsetX / containerRect.width) * 100)
    );
    setDragPosition(newPosition);
  };

  const handleTouchDrag = (e, index) => {
    const touchX = e.touches[0].clientX;
    handleDrag({ clientX: touchX }, index);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h3"
        fontWeight="bold"
        textAlign="center"
        sx={{ mb: 4, fontSize: { xs: "2rem", md: "3rem" } }}>
        Photo Editing & Banner Editing Service
      </Typography>
      <Typography
        variant="subtitle1"
        textAlign="center"
        sx={{
          mb: 8,
          color: "gray",
          fontSize: { xs: "0.9rem", md: "1.2rem" },
        }}>
        Drag the slider to compare the original and edited photos.
      </Typography>

      {photos.map((photo, index) => (
        <Box
          key={photo.id}
          ref={(el) => (containerRefs.current[index] = el)}
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "800px",
            aspectRatio: "12/9", // Maintain a consistent aspect ratio for all images
            margin: "0 auto 6rem",
            overflow: "hidden",
            borderRadius: "16px",
            boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
            backgroundColor: "black",
          }}>
          {/* Original Image */}
          <Box
            component="img"
            src={photo.before}
            alt="Before Edit"
            sx={{
              position: "absolute",
              top: 0,
              right: -160,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top", // Align top of the image
              zIndex: 1,
              opacity: 0.8, // Adjust visibility
            }}
          />

          {/* Edited Image */}
          <Box
            component="img"
            src={photo.after}
            alt="After Edit"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top", // Align top of the image
              zIndex: 2,
              clipPath: `polygon(0 0, ${dragPosition}% 0, ${dragPosition}% 100%, 0 100%)`,
            }}
          />

          {/* Slider Line */}
          <Box
            onMouseDown={(e) => e.preventDefault()}
            onMouseMove={(e) => handleDrag(e, index)}
            onTouchMove={(e) => handleTouchDrag(e, index)}
            sx={{
              position: "absolute",
              top: 0,
              left: `${dragPosition}%`,
              width: "4px",
              height: "100%",
              backgroundColor: "#fff",
              zIndex: 3,
              cursor: "ew-resize",
              transition: "background-color 0.2s",
              "&:hover": {
                backgroundColor: "red",
              },
            }}
          />

          {/* Drag Button */}
          <Box
            onMouseDown={(e) => e.preventDefault()}
            sx={{
              position: "absolute",
              top: "50%",
              left: `${dragPosition}%`,
              transform: "translate(-50%, -50%)",
              width: "20px",
              height: "20px",
              backgroundColor: "#fff",
              borderRadius: "50%",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              zIndex: 4,
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "red",
              },
            }}
          />

          {/* Description */}
          <Typography
            variant="subtitle1"
            textAlign="center"
            sx={{
              mt: 2,
              color: "gray",
              fontSize: { xs: "0.8rem", md: "1rem" },
            }}>
            {photo.description}
          </Typography>
        </Box>
      ))}

      {/* Services Section */}
      <Typography
        variant="h3"
        fontWeight="bold"
        textAlign="center"
        sx={{ mt: 8, mb: 4, fontSize: { xs: "2rem", md: "3rem" } }}>
        Our Services
      </Typography>
      <Typography
        variant="subtitle1"
        textAlign="center"
        sx={{
          mb: 8,
          color: "gray",
          fontSize: { xs: "0.9rem", md: "1.2rem" },
        }}>
        Discover the various banner editing services we offer to help your brand
        stand out.
      </Typography>

      {services.map((service) => (
        <Box
          key={service.id}
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "500px",
            margin: "0 auto 6rem",
            borderRadius: "16px",
            boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
            overflow: "hidden",
            backgroundColor: "black",
            "&:hover .hover-content": {
              opacity: 1,
              transform: "translateY(0)",
            },
          }}>
          <Box
            component="img"
            src={service.image}
            alt={service.title}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <Box
            className="hover-content"
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              background: "rgba(0, 0, 0, 0.5)",
              padding: "1rem",
              color: "white",
              opacity: 0,
              transform: "translateY(100%)",
              transition: "all 0.3s ease",
            }}>
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{ mb: 1 }}
              className="text-white">
              {service.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "1rem" }}
              className="text-white">
              {service.description}
            </Typography>
          </Box>
        </Box>
      ))}
      {/* Animation CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        style={{ textAlign: "center", marginTop: "60px" }}>
        <Typography variant="h5" sx={{ color: "text.primary", mb: 2 }}>
          Ready to transform your ideas?
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

export default EditServicePage;
