import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ProjectsCard } from "../ProjectsCard";
import axios from "axios";
import { API_URLS } from "../../../data/api-urls";
import { useSnackbar } from "../../../context/SnackbarContext";

// const projects = [
//   {
//     id: 1,
//     name: "Dice Game",
//     description:
//       "A simple and interactive game where two players roll dice to determine the winner. The game is built for entertainment and practice in JavaScript functionality.",
//     techStacks: ["HTML", "CSS", "JavaScript"],
//     likes: [
//       { userId: "101", userName: "John Doe" },
//       { userId: "102", userName: "Jane Smith" },
//     ],
//     createdAt: "2024-12-08",
//     link: "",
//     image: "/images/dice-game-p-2.jpg", // Replace with your image URL
//   },
//   {
//     id: 2,
//     name: "Drum Kit",
//     description:
//       "An engaging application where users can play drum sounds by clicking buttons or using keyboard keys. Designed to demonstrate event handling in JavaScript.",
//     techStacks: ["HTML", "CSS", "JavaScript"],
//     likes: [
//       { userId: "103", userName: "Mike Brown" },
//       { userId: "104", userName: "Emily Wilson" },
//     ],
//     createdAt: "2024-12-08",
//     link: "",
//     image: "/images/drum-kit-p-3.jpg", // Replace with your image URL
//   },
//   {
//     id: 3,
//     name: "Simon Game",
//     description:
//       "A memory game where players need to follow a sequence of colors and sounds that gets progressively longer. It tests and improves concentration skills.",
//     techStacks: ["HTML", "CSS", "JavaScript"],
//     likes: [
//       { userId: "105", userName: "Chris Taylor" },
//       { userId: "106", userName: "Sophia Anderson" },
//     ],
//     createdAt: "2024-12-08",
//     link: "",
//     image: "/images/simon-game-p-4.jpg", // Replace with your image URL
//   },
//   {
//     id: 4,
//     name: "Static Software Company Website",
//     description:
//       "A visually appealing static website to showcase the services and portfolio of a software company.",
//     techStacks: ["HTML", "CSS", "JavaScript"],
//     likes: [{ userId: "107", userName: "Michael Lee" }],
//     createdAt: "2024-12-08",
//     link: "",
//     image: "/images/software-company-p-5.jpg", // Replace with your image URL
//   },
//   {
//     id: 5,
//     name: "Hotel Room Booking Website",
//     description:
//       "A dynamic website to allow users to book hotel rooms with features like room availability, pricing, and payment gateway.",
//     techStacks: ["HTML", "CSS", "JavaScript"],
//     likes: [
//       { userId: "102", userName: "Jane Smith" },
//       { userId: "108", userName: "Sarah Johnson" },
//     ],
//     createdAt: "2024-12-08",
//     link: "",
//     image: "/images/hotel-booking-p-6.jpg", // Replace with your image URL
//   },
//   {
//     id: 6,
//     name: "E-Commerce React (UI Only)",
//     description:
//       "A responsive e-commerce platform UI built using React and Tailwind CSS, designed to provide a seamless shopping experience.",
//     techStacks: ["React", "HTML", "Tailwind CSS"],
//     likes: [
//       { userId: "101", userName: "John Doe" },
//       { userId: "105", userName: "Chris Taylor" },
//     ],
//     createdAt: "2024-12-08",
//     link: "",
//     image: "/images/ecomerce-react-p-1.jpg", // Replace with your image URL
//   },
//   {
//     id: 7,
//     name: "Study Discussion Platform",
//     description:
//       "A Django-based platform to facilitate academic discussions and resource sharing among students and educators.",
//     techStacks: ["Python", "Django", "HTML", "CSS", "JavaScript"],
//     likes: [
//       { userId: "103", userName: "Mike Brown" },
//       { userId: "104", userName: "Emily Wilson" },
//     ],
//     createdAt: "2024-12-08",
//     link: "",
//     image: "/images/study-buddy.jpg", // Replace with your image URL
//   },
//   {
//     id: 8,
//     name: "Employee Management System",
//     description:
//       "A system to manage employee records, leaves, and performance reviews with an intuitive interface and MongoDB integration.",
//     techStacks: ["React", "HTML", "Tailwind CSS", "MongoDB", "Express"],
//     likes: [
//       { userId: "108", userName: "Sarah Johnson" },
//       { userId: "109", userName: "Daniel Roberts" },
//     ],
//     createdAt: "2024-12-08",
//     link: "",
//     image: "/images/ems-p-7.jpg", // Replace with your image URL
//   },
//   {
//     id: 9,
//     name: "Authentication System",
//     description:
//       "A secure authentication system with user registration, login, and token-based authentication using MERN stack.",
//     techStacks: ["React", "MongoDB", "Express.js", "HTML", "Tailwind CSS"],
//     likes: [
//       { userId: "101", userName: "John Doe" },
//       { userId: "102", userName: "Jane Smith" },
//     ],
//     createdAt: "2024-12-08",
//     link: "",
//     image: "/images/auth-system.jpg", // Replace with your image URL
//   },
// ];

const ProjectsPage = () => {
  const titles = ["What is project", "Why it's important"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [projectDetails, setProjectDetails] = useState(null);
  const { handleShowSnackbar } = useSnackbar();

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
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}${API_URLS.getProjects}`
        );
        if (response.status === 200) {
          setProjectDetails(response.data.Allprojects);
        }
      } catch (error) {
        if (error) {
          handleShowSnackbar("Somewthing went wrong", "error");
        }
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    if (text === titles[index]) {
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % titles.length);
        setText(""); // Clear text for next title
      }, 1500); // Pause time before changing title
    }
  }, [text, index, titles]);
  return (
    <div className="bg-slate-300 flex flex-col">
      {/* Project title */}
      <div className=" flex pt-4 justify-center">
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
          className="text-5xl text-slate-950 w-fit py-4 font-bold ">
          Projects
        </motion.h2>
      </div>
      {/* questoins */}
      <div className="text-center">
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
              className="text-2xl text-slate-800 md:text-5xl w-fit font-bold">
              {text}?
            </h2>
          </span>
        </motion.span>
      </div>

      {/* Answers */}
      <div className="grid grid-cols-1 bg-slate-300 py-2 px-4 items-center md:grid-cols-2">
        <div>
          {/* Content inside */}
          <div className="relative flex h-[300px] w-full flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="card-wrapper motion-preset-slide-left relative h-[200px] w-[200px]">
              <div className="card-content rounded-md flex items-center justify-center text-xs">
                <img
                  src={"/images/project-pic.gif"}
                  alt="Example"
                  className={`transition rounded-md `}
                />
              </div>
            </motion.div>
          </div>
        </div>
        <div className="p-3  md:border-r-[1px">
          <p className="!text-justify ">
            <strong className="text-2xl ">A</strong> project is a practical
            implementation of our knowledge and skills to create something
            functional, such as a web application, software, or tool. It
            involves planning, designing, coding, testing, and delivering a
            solution to address a specific problem or achieve a particular goal.
            Projects can range from personal experiments to professional work or
            academic assignments.
          </p>
          <p className="!text-justify ">
            <strong className="text-2xl ">P</strong>rojects are important
            because they showcase our ability to apply theoretical knowledge in
            real-world scenarios. They demonstrate your technical skills,
            problem-solving abilities, creativity, and dedication to learning.
            Employers value projects as tangible proof of your expertise, making
            them essential for building credibility, standing out in interviews,
            and advancing your career.
          </p>
        </div>
      </div>

      {/* Title */}

      <div className="flex bg-slate-300 flex-col items-center pt-2 justify-center">
        <motion.div
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
          className="md:text-3xl text-sm rounded-2xl text-white  text-center px-6 w-fit py-4 font-bold ">
          Where I&apos;m Start
        </motion.div>
        <motion.div
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
          className="text-3xl text-slate-950 w-fit py-4 font-bold ">
          My Projects
        </motion.div>
      </div>
      <span className="text-center  text-[10px]">
        <span className="font-bold">Message:</span> You can consider this
        portfolio even as my project
      </span>
      {/* My projects */}
      <div className="flex flex-col items-center p-2 justify-center py-3">
        {projectDetails?.map((item) => (
          <ProjectsCard
            key={item._id}
            id={item._id}
            name={item.title}
            description={item.description}
            image={item.image}
            link={item.projectUrl}
            like={item.likes}
          />
        ))}
      </div>
    </div>
  );
};
export default ProjectsPage;
