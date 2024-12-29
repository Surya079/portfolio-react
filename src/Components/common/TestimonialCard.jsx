import { Box, Button, Grid2 } from "@mui/material";
import { useEffect, useState } from "react";
import useMobileView from "../../customHooks/useMobileView";
import { useSwipeable } from "react-swipeable";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    occupation: "Software Engineer",
    picture: "/images/demo-profile.png",
    review:
      "Surya is an exceptional developer. His attention to detail and problem-solving skills are truly commendable. He delivered my project on time and exceeded expectations.",
    approved: true,
    date: "2024-12-01",
  },
  {
    id: 2,
    name: "Jane Smith",
    occupation: "Product Manager",
    picture: "/images/jane.jpg",
    review:
      "Working with Surya was a delight! He has a deep understanding of both frontend and backend development and ensured our product was user-friendly and robust.",
    approved: true,
    date: "2024-11-25",
  },
  {
    id: 3,
    name: "Mike Brown",
    occupation: "UI/UX Designer",
    picture: "/images/mike.jpg",
    review:
      "Surya is a great collaborator! He understands design principles and brought my ideas to life with his clean, responsive code. Highly recommended!",
    approved: false,
    date: "2024-11-30",
  },
  {
    id: 4,
    name: "Emily Wilson",
    occupation: "Startup Founder",
    picture: "/images/emily.jpg",
    review:
      "Surya helped us build a scalable and dynamic website. His dedication and technical expertise were instrumental in launching our platform successfully.",
    approved: true,
    date: "2024-12-02",
  },
  {
    id: 5,
    name: "Chris Taylor",
    occupation: "Digital Marketer",
    picture: "/images/chris.jpg",
    review:
      "Surya’s work is top-notch! He developed a lightning-fast website for us that perfectly aligns with our SEO goals. Fantastic developer!",
    approved: true,
    date: "2024-11-28",
  },
  {
    id: 6,
    name: "Sophia Anderson",
    occupation: "Content Strategist",
    picture: "/images/sophia.jpg",
    review:
      "Surya has a fantastic ability to understand complex problems and provide simple yet effective solutions. I’d love to work with him again!",
    approved: false,
    date: "2024-12-01",
  },
];

export const TestimonialCard = () => {
  const isMobile = useMobileView();
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardShow = isMobile ? 1 : 3;

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

  return (
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

      {testimonials.slice(currentIndex, currentIndex + cardShow).map((item) => (
        <Grid2
          container
          spacing={2}
          columns={12}
          justifyContent="center"
          key={item.id}
          className="w-fit card text-sm p-2 !text-white">
          <div className="w-[300px] flex flex-col justify-between h-[250px]">
            <div className="h-full">{item.review}</div>
            <div className="mt-2">
              <div className="flex ml-10 items-center justify-center gap-2">
                <div className="w-[40px] h-[40px] !text-white overflow-hidden rounded-full">
                  <img
                    src={item.picture}
                    alt="profile"
                    className="rounded-full bg-white"
                  />
                </div>
                <span className="text-white text-[12px]">{item.name}</span>
              </div>
              <div className="text-[8px] float-right">-- {item.occupation}</div>
            </div>
            <div className="text-[7px]">Posted at {item.date}</div>
          </div>
        </Grid2>
      ))}

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
