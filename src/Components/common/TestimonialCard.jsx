import { Box, Button, Grid2 } from "@mui/material";
import { useEffect, useState } from "react";
import useMobileView from "../../customHooks/useMobileView";
import { useSwipeable } from "react-swipeable";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { useSnackbar } from "../../context/SnackbarContext";
import axios from "axios";
import { API_URLS } from "../../data/api-urls";
import { useAppSelector } from "../../redux/authCustomHooks";
import { selectAuth } from "../../redux/slice/authSlice";
import SkeletonLoader from "../SkeletonLoading/SkeletonLoad";

export const TestimonialCard = () => {
  const isMobile = useMobileView();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const { handleShowSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState(false);
  const { role } = useAppSelector(selectAuth);
  const cardShow = isMobile ? 1 : 3;

  useEffect(() => {
    const fetchTestimonial = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}${API_URLS.getTestimonials}`
        );
        if (response.data) {
          setIsLoading(false);
          setTestimonials(response.data?.testimonials);
        }
      } catch (error) {
        if (role === "admin")
          handleShowSnackbar(error.response.data.message, "error");
      } finally {
        setIsLoading(false);
      }
    };
    fetchTestimonial();
  }, []);

  const handleNext = () => {
    if (currentIndex + cardShow < testimonials.length) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      setCurrentIndex(0); // Loop to start
    }
  };

  const handlePrevious = () => {
    if (currentIndex - cardShow >= 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } else {
      setCurrentIndex(testimonials.length - cardShow); // Loop to end
    }
  };

  // Automatic slide
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval);
  }, [currentIndex, cardShow]);

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrevious,
  });

  return isLoading ? (
    <SkeletonLoader variant={"content"} />
  ) : (
    <Box
      {...handlers}
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
      }}
      className="bg-slate-800 py-5">
      <Button
        disabled={currentIndex === 0}
        className="w-fit"
        sx={{ minWidth: 0 }}
        onClick={handlePrevious}>
        <ArrowLeft className="w-fit p-0 text-cyan-400" />
      </Button>

      {testimonials && testimonials?.length > 0 ? (
        testimonials
          ?.slice(currentIndex, currentIndex + cardShow)
          .map((item) => (
            <Grid2
              container
              spacing={2}
              columns={12}
              justifyContent="center"
              key={item.id}
              className="w-fit card text-sm p-2 !text-white">
              <div className="w-[300px] flex flex-col justify-between h-[250px]">
                <div className="h-full">{item?.content}</div>
                <div className="mt-2">
                  <div className="flex ml-10 items-center justify-center gap-2">
                    <div className="w-[40px] h-[40px] !text-white overflow-hidden rounded-full">
                      <img
                        src={
                          item?.user?.profilePicture
                            ? item?.user?.profilePicture
                            : "/images/demo-profile.png"
                        }
                        alt="profile"
                        className="rounded-full bg-white"
                      />
                    </div>
                    <span className="text-white text-[12px]">
                      {item?.user?.name}
                    </span>
                  </div>
                  <div className="text-[8px] float-right">
                    -- {item?.user?.occupation}
                  </div>
                </div>
                <div className="text-[7px]">
                  Posted at{" "}
                  {new Intl.DateTimeFormat("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  }).format(new Date(item?.createdAt))}
                </div>
              </div>
            </Grid2>
          ))
      ) : (
        <div className="text-gray-400">Not Found Approved Testimonials</div>
      )}

      <Button
        disabled={currentIndex + cardShow >= testimonials.length}
        className="w-fit"
        sx={{ minWidth: 0 }}
        onClick={handleNext}>
        <ArrowRight className="w-fit p-0 text-cyan-400" />
      </Button>
    </Box>
  );
};
