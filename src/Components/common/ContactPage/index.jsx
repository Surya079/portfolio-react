import { Box, MenuItem, TextField } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import { useAppSelector } from "../../../redux/authCustomHooks";
import { selectAuth } from "../../../redux/slice/authSlice";
import { useSnackbar } from "../../../context/SnackbarContext";
import axios from "axios";
import { API_URLS } from "../../../data/api-urls";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
    message: "",
  });
  const { token } = useAppSelector(selectAuth);
  const { handleShowSnackbar } = useSnackbar();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}${API_URLS.getContact}`,
        {
          name: formData.name,
          email: formData.email,
          reason: formData.reason,
          message: formData.message,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status == 200) {
        handleShowSnackbar(response.data.message, "success");
        setFormData({
          name: "",
          email: "",
          reason: "",
          message: "",
        });
      }
    } catch (error) {
      handleShowSnackbar(error.response.data.message, "error");
    }
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
            label={
              <span>
                Name <span className="text-red-600">*</span>
              </span>
            }
            name="name"
            variant="standard"
            fullWidth
            margin="normal"
            value={formData.name}
            onChange={handleChange}
          />

          <TextField
            label={
              <span>
                Email <span className="text-red-600">*</span>
              </span>
            }
            name="email"
            type="email"
            variant="standard"
            fullWidth
            margin="normal"
            value={formData.email}
            onChange={handleChange}
          />

          <TextField
            select
            label={
              <span>
                Reason for Contacting <span className="text-red-600">*</span>
              </span>
            }
            name="reason"
            variant="standard"
            value={formData.reason}
            onChange={handleChange}
            fullWidth
            margin="normal">
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
            label={
              <span>
                Message <span className="text-red-600">*</span>
              </span>
            }
            name="message"
            multiline
            rows={4}
            variant="standard"
            fullWidth
            margin="normal"
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit"  className="button w-full text-black">
            Submit
          </button>
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
