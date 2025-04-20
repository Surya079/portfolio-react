import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";
import { useAppSelector } from "../../../redux/authCustomHooks";
import { selectAuth } from "../../../redux/slice/authSlice";

const AboutPage = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  const { token } = useAppSelector(selectAuth);

  return (
    <div>
      <div className="bg-slate-400 pt-4 flex justify-center">
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
          About Me
        </motion.h2>
      </div>
      {/* summary */}
      <div className="grid grid-cols-1 bg-slate-400 py-2 px-4 items-center md:grid-cols-2">
        <div className="p-3  md:border-r-[1px] border-black ">
          <p className="!text-justify ">
            <strong className="text-2xl ">Hi, </strong>I am Surya, a Bachelor of
            Science in Computer Science graduate with a passion for technology
            and web development. I have completed a Python Full Stack Developer
            course and possess a top technical skills. I am very strong about
            using flex & grid system by in tailwind classes.You could see this
            website how I&apos;m structured responsive using tailwind css. I am
            also committed to personal and professional growth, consistently
            learning new technologies and refining my abilities to build
            impactful projects. I am eager to contribute to challenging projects
            and am ready to relocate or adapt to any opportunity that helps me
            grow further in my career.
          </p>
        </div>
        <div>
          {/* Content inside */}
          <div className="relative overflow-hidden flex h-[300px] w-full flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="card-wrapper motion-preset-slide-left relative h-[200px] w-[200px]">
              <div className="card-content rounded-md flex items-center justify-center text-xs">
                <img
                  src={"/images/Surya-profile.jpg"}
                  alt="Example"
                  className={`transition hover:scale-[1.2] pointer-events-none rounded-md ${
                    token ? "blur-none" : "blur-md"
                  }`}
                />
                {!token && (
                  <Link to={"/blogs"} className="absolute text-white button">
                    Go to blog & <br /> Login to View
                  </Link>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div>
        {/* Education */}

        <div>
          <div className="flex bg-slate-400 flex-col items-center pt-2 justify-center">
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
              My Computer Journey Starts With
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
              Education
            </motion.div>
          </div>
          {/* SSLC */}
          <div className="relative bg-slate-400 flex h-[200px]">
            <div className="grid grid-cols-2  justify-center py-2 px-4 md:grid-cols-2 items-center">
              <div className="text-[11px] h-full overflow-hidden border-r-[1px] justify-between border-black font-bold p-5 flex items-center gap-2 flex-row">
                <span className="flex text-[10px] md:text-2xl items-center flex-col gap-2">
                  SSLC
                  <span className="text-[7px] md:text-xs text-left">
                    (jun 2017 - april 2018)
                  </span>
                </span>
                <Divider className="bg-slate-950 w-[50px] motion-preset-slide-right md:w-[350px]" />
              </div>
              <div className="text-[10px] md:text-[16px] h-full flex items-center p-5">
                <p className="text-center">
                  SSLC (10th Standard): Completed at Government Higher Secondary
                  School with an 84% score, showcasing strong academic
                  performance in foundational subjects.
                </p>
              </div>
            </div>
          </div>
          {/* HSC */}
          <div className="relative bg-slate-400 flex h-[200px]">
            <div className="grid grid-cols-2  justify-center py-2 px-4 md:grid-cols-2 items-center">
              <div className="text-[11px] h-full overflow-hidden border-r-[1px] justify-between border-black font-bold p-5 flex items-center gap-2 flex-row">
                <span className="flex text-[10px] md:text-2xl items-center flex-col gap-2">
                  HSC
                  <span className="text-[7px] md:text-xs text-left">
                    (jun 2019 - may 2020)
                  </span>
                </span>
                <Divider className="bg-slate-950 w-[50px] motion-preset-slide-right md:w-[350px]" />
              </div>
              <div className="text-[10px] h-full flex md:text-[16px] items-center p-5">
                HSC (12th Standard): Achieved 62%, focusing on computer science
                related fundamentals.
              </div>
            </div>
          </div>
          {/* College */}
          <div className="relative bg-slate-400 flex h-[200px]">
            <div className="grid grid-cols-2  justify-center py-2 px-4 md:grid-cols-2 items-center">
              <div className="text-[11px] h-full overflow-hidden border-r-[1px] justify-between border-black font-bold p-5 flex items-center gap-2 flex-row">
                <span className="flex text-[10px] md:text-2xl items-center text-center flex-col gap-2">
                  Bachelor&apos;s of Computer Science
                  <span className="text-[7px] md:text-xs text-left">
                    (jun 2020 - may 2023)
                  </span>
                </span>
                <Divider className="bg-slate-950 w-[50px]  motion-preset-slide-right md:w-[350px]" />
              </div>
              <div className="text-[10px] h-full flex md:text-[16px] items-center p-5">
                B.Sc. in Computer Science: Graduated with 75.5%, developing
                strong programming and problem-solving skills.
              </div>
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div>
          <div className="flex bg-slate-400 flex-row justify-center">
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
              Work Experience
            </motion.div>
          </div>
          <div>
            {/* Previos work */}
            {/* Cognizant */}
            <div className="relative flex h-[200px]">
              <div className="absolute inset-1 blur-sm bg-[url('/images/cognizant.jpg')]  md:bg-fixed bg-no-repeat bg-cover z-[-10] opacity-50"></div>
              <div className="grid grid-cols-2  justify-center py-2 px-4 md:grid-cols-2 items-center">
                <div className="text-[11px] h-full border-r-[1px] justify-between border-black font-bold p-5 flex items-center gap-2 flex-row">
                  <span className="flex text-[10px] items-center flex-col gap-2">
                    Process Executive
                    <span className="text-[7px] text-left">
                      ( jan 2024 - Oct 2024 )
                    </span>
                  </span>
                  <Divider className="bg-slate-950 w-[50px] motion-preset-slide-right md:w-[350px]" />
                </div>
                <div className="text-[10px]  h-full font-bold flex items-center p-3">
                  <p className="text-[7px] md:text-[11px]">
                    At Cognizant Technology Solutions, Chennai, I worked as a
                    Process Executive from jan 8, 2024 to October 29, 2024.
                    During this time, I developed strong written communication
                    skills by managing detailed reports and professional
                    correspondence. I focused on delivering client-centric
                    solutions, ensuring their satisfaction through timely and
                    accurate task execution. Collaborating with cross-functional
                    teams, I streamlined processes and maintained high standards
                    of quality and efficiency. This role enhanced my ability to
                    prioritize tasks effectively.
                  </p>
                </div>
              </div>
            </div>
            {/* Present work */}
            <div className="bg-slate-400 flex justify-center">
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
                className="text-2xl text-slate-950  w-fit py-4 font-bold "></motion.h2>
            </div>
            {/* HazhTech */}
            <div className="relative h-[200px] flex">
              <div className="absolute inset-0 blur-sm bg-[url('/images/hazhtech.jpg')] md:bg-fixed bg-no-repeat bg-cover z-[-10] opacity-50"></div>
              <div className="grid grid-cols-2 py-2 px-4 md:grid-cols-2 items-center">
                <div className="text-[10px]  h-full border-r-[1px] border-black flex items-center font-bold p-4 ">
                  <p className="text-[7px]  md:text-[11px]">
                    I am currently working as a Full Stack Development Intern at
                    Hazhtech Solutions, where I am responsible for building
                    responsive web pages and implementing functionality using
                    JavaScript. My role also involves integrating APIs to ensure
                    a seamless and dynamic user experience. This internship has
                    allowed me to enhance my skills in front-end development,
                    responsive design, and backend integration while
                    contributing to creating user-friendly web applications.
                  </p>
                </div>
                <div className="text-[10px] p-5 flex h-full items-center font-bold justify-between gap-2 flex-row">
                  <Divider className="bg-slate-950 w-[50px] md:w-[350px]" />
                  <span className="flex text-[10px] items-center flex-col gap-2">
                    Full Stack Intern
                    <span className="text-[7px] text-left">
                      ( jan 2024 - mar 2025 )
                    </span>
                  </span>
                </div>
              </div>
            </div>
            {/* Wipro */}
            <div className="relative h-[200px] flex">
              <div className="absolute inset-0 blur-sm bg-[url('/images/Wipro.webp')] md:bg-fixed bg-no-repeat bg-cover z-[-10] opacity-50"></div>
              <div className="grid grid-cols-2 py-2 px-4 md:grid-cols-2 items-center">
                <div className="text-[10px]  h-full border-r-[1px] border-black flex items-center font-bold p-4 ">
                  <p className="text-[7px]  md:text-[11px]">
                    Currently undergoing training in Microsoft Azure Cloud and
                    Databricks, focusing on cloud services and data engineering.
                    I also have hands-on experience in full-stack development
                    using React, Python, Django, MongoDB, Next.js, Redux,
                    Node.js and SQL.
                  </p>
                </div>
                <div className="text-[10px] p-5 flex h-full items-center font-bold justify-between gap-2 flex-row">
                  <Divider className="bg-slate-950 w-[50px] md:w-[350px]" />
                  <span className="flex text-[10px] items-center flex-col gap-2">
                    Developer - L1
                    <span className="text-[7px] text-left">
                      ( Apr 2025 - Present )
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
