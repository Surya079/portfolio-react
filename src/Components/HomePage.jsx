import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "/images/Surya (1).webp";
import { TestimonialCard } from "./common/TestimonialCard";
import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/authCustomHooks";
import { selectAuth } from "../redux/slice/authSlice";
import ReviewSection from "./common/ReviewPage";
import AddTestimonial from "./AddTestimonila";
import { useSnackbar } from "../context/SnackbarContext";
import usePersistScreenshotBlackout from "./DisableScreenShot";

const HomePage = () => {
  usePersistScreenshotBlackout();
  const titles = ["Surya", "Frontend Developer", "Backend Developer"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const { token } = useAppSelector(selectAuth);
  const [isTestimonialOpen, setIsTestimonialOpen] = useState(false);
  const { handleShowSnackbar } = useSnackbar();

  const handleOpen = () => {
    if (!token) {
      handleShowSnackbar("Please Request you to Login/Register!", "warning");
    } else {
      setIsTestimonialOpen(true);
    }
  };

  const [photoAcess, setPhotoAccess] = useState(false);

  useEffect(() => {
    const typeWriter = setInterval(() => {
      setText((prev) => {
        const currentTitle = titles[index];
        if (prev.length < currentTitle.length) {
          return prev + currentTitle[prev.length];
        }
        return prev;
      });
    }, 150); // Typing speed

    return () => clearInterval(typeWriter);
  }, [text, index]);

  useEffect(() => {
    if (text === titles[index]) {
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % titles.length);
        setText(""); // Clear text for next title
      }, 1500); // Pause time before changing title
    }
  }, [text, index, titles]);

  useEffect(() => {
    if (token) {
      setPhotoAccess(true);
    }
  }, []);
  return (
    <div>
      <div className="flex bg-slate-800 justify-center">
        <div className="w-fit">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            <div className="text-3xl md:text-5xl text-white pt-7 text-center font-bold">
              Welcome !
            </div>
          </motion.h1>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}>
            <span className="w-fit sm:inline">
              <h2
                style={{
                  display: "inline-block",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  borderRight: "2px solid",
                }}
                className="text-2xl text-white md:text-5xl w-fit font-bold">
                Hi, I&apos;m {text}.
              </h2>
            </span>
          </motion.span>
        </div>
      </div>

      <div className="flex bg-slate-800 py-20 justify-center p-3">
        <div className="w-fit card flex motion-scale-in-[0.5] motion-translate-x-in-[-120%] motion-translate-y-in-[-60%] motion-opacity-in-[33%] motion-blur-in-[10px] motion-delay-[0.38s]/scale motion-duration-[0.38s]/opacity motion-duration-[1.20s]/rotate  motion-delay-[0.60s]/blur motion-ease-spring-bouncier flex-col">
          <span className="p-3">
            &quot; Developers are the architects of tomorrow&apos;s software,
            shaping the future of technology and shaping the future of humanity.
            &quot;
          </span>
          <span className="text-right">-- Developer</span>
        </div>
      </div>
      <div className="relative w-[100%] h-[300px]">
        {/* Background image with reduced opacity */}

        <div className="absolute inset-0 blur-sm bg-[url('/images/Surya-bg.jpg')] bg-fixed bg-no-repeat bg-cover z-[-10] opacity-60"></div>

        {/* Content inside */}
        <div className="relative  flex h-[300px] w-full flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="card-wrapper motion-preset-slide-top  relative h-[200px] w-[200px]">
            <div className="card-content rounded-md flex items-center justify-center text-xs">
              <img
                src={Image}
                alt="Example"
                className={`transition hover:scale-[1.2] pointer-events-none rounded-md ${
                  photoAcess ? "blur-none" : "blur-md"
                }`}
              />
              {!photoAcess && (
                <Link to={"/blogs"} className="absolute text-white button">
                  Go to blog & <br /> Login to View
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      </div>
      <div className="bg-slate-800 py-6">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl md:text-5xl text-white pb-5  text-center font-bold">
            Testimonials
          </h2>
          <button className="button w-fit" onClick={handleOpen}>
            Give a Testimoninal
          </button>
          <div className="py-2">
            <p className="text-center  text-yellow-100 text-sm md:text-sm text-[8px] px-5">
              <b className="text-sky-500">Note:</b> Please note that it will be
              published on the website after our approval. After approval, You
              can see testimonials bellow!
            </p>
          </div>
        </div>
        <div>
          <TestimonialCard />
        </div>
      </div>
      <ReviewSection />
      <AddTestimonial
        open={isTestimonialOpen}
        handleClose={() => setIsTestimonialOpen(false)}
      />
    </div>
  );
};

export default HomePage;
