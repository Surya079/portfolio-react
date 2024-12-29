import { Box, Button, MenuItem, TextField } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData); // Replace with your API or backend logic
  };
  return (
    <div className="bg-slate-100  pb-5">
      <div className=" flex py-3 justify-center">
        <motion.h2
          initial={{
            opacity: 0,
            y: -100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
            },
          }}
          className="md:text-5xl text-xl  text-slate-950 w-fit py-4 font-bold ">
          Let&apos;s Connect and Collaborate
        </motion.h2>
      </div>

      <div className=" bg-slate-100 relative w-full max-w-lg mx-auto p-6 backdrop-blur-sm rounded-lg shadow-lg">
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover blur-[10px] opacity-50"
          style={{
            background: 'url("logo.png")',
            backgroundSize: "70%",
            backgroundPosition: "center",
          }}></div>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            maxWidth: 600,
            margin: "auto",
            padding: 3,
            border: "1px solid #000000",
            borderRadius: 2,
          }}>
          <TextField
            label="Name"
            name="name"
            variant="standard"
            fullWidth
            margin="normal"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <TextField
            label="Email"
            name="email"
            type="email"
            variant="standard"
            fullWidth
            margin="normal"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <TextField
            select
            label="Reason for Contacting"
            name="reason"
            variant="standard"
            value={formData.reason}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required>
            <MenuItem value="" disabled>
              Select an option
            </MenuItem>
            <MenuItem value="service">Service Inquiry</MenuItem>
            <MenuItem value="query">General Query</MenuItem>
            <MenuItem value="help">Need Help</MenuItem>
            <MenuItem value="feedback">Feedback</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </TextField>

          <TextField
            label="Message"
            name="message"
            multiline
            rows={4}
            variant="standard"
            fullWidth
            margin="normal"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}>
            Submit
          </Button>
        </Box>
      </div>
      <div className="w-full h-36 pb-10 pt-8 mt-4 text-center flex flex-col justify-center items-center">
        <h4 className="text-[30px] py-4 font-bold text-slate-900">
          Quick action
        </h4>

        <div className="h-full  rounded-md  flex flex-col items-center border bg-gradient-to-t from-slate-700 to-slate-800  border-black p-3  w-fit">
          <a href="tel:811094401" className="text-white hover:text-white">
            8110944016
          </a>
          <a
            href="mailto:surya.vme005@gmail.com"
            className="text-white  hover:text-white">
            surya.vme005@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
