import { motion } from "framer-motion";
import { useState } from "react";

const skills = [
  {
    name: "Communication",
    img: "/images/communication.png", // Replace with your image path
    description: "Effective verbal and written communication.",
    proficiency: 85, // Proficiency as a percentage
  },
  {
    name: "JavaScript",
    img: "/images/js.png",
    description: "Strong knowledge of ES6+ and modern JavaScript concepts.",
    proficiency: 90,
  },
  {
    name: "HTML",
    img: "/images/html.png",
    description:
      "Proficient in semantic HTML for clean and accessible structure.",
    proficiency: 95,
  },
  {
    name: "Tailwind CSS",
    img: "/images/tailwind.png",
    description: "Experienced in creating responsive and custom designs.",
    proficiency: 90,
  },
  {
    name: "Basic SQL Queries",
    img: "/images/sql.png",
    description: "Familiar with writing queries to handle and retrieve data.",
    proficiency: 70,
  },
  {
    name: "Git Version Control",
    img: "/images/git.png",
    description: "Managing branches, resolving conflicts, and versioning.",
    proficiency: 85,
  },
  {
    name: "GitHub Repositories",
    img: "/images/github.webp",
    description: "Hosting and managing projects on GitHub.",
    proficiency: 85,
  },
  {
    name: "GitLab Collaboration",
    img: "/images/gitlap.png",
    description: "Working with teams effectively using GitLab.",
    proficiency: 80,
  },
  {
    name: "Next.js",
    img: "/images/nextjs.png",
    description: "Understanding of Next.js for server-side rendering.",
    proficiency: 60,
  },
];

const certificates = [
  {
    name: "Advanced React",
    img: "/images/meta.jpg",
    description: "Completed a comprehensive course on Advanced React by Meta.",
  },
  {
    name: "SQL Basic Queries",
    img: "/images/hackerrank-sql.jpg",
    description:
      "Gained proficiency in writing basic SQL queries on HackerRank.",
  },
  {
    name: "Web Development",
    img: "/images/udemy-web.jpg",
    description:
      "Certified in building dynamic web applications using React, HTML, CSS, and JavaScript on Udemy.",
  },
  {
    name: "Problem Solving Basic",
    img: "/images/hacker-cert2.png",
    description:
      "Proficient in solving algorithmic challenges and coding problems on HackerRank.",
  },
  {
    name: "JavaScript Fundamentals",
    img: "/images/hacker-cert3.png",
    description:
      "Strong understanding of JavaScript fundamentals from HackerRank.",
  },
  {
    name: "Python",
    img: "/images/hacker-cert4.png",
    description:
      "Proficient in building scalable backend applications with Python.",
  },
];
const SkillPage = () => {
  const [displayPercentage, setDisplayPercentage] = useState(0);

  const handleMouverEnter = (targetProficiency) => {
    let count = 0;
    const interval = setInterval(() => {
      if (count >= targetProficiency) {
        clearInterval(interval);
      } else {
        count++;
        setDisplayPercentage(count);
      }
    }, 15);
  };

  return (
    <div>
      <div className="bg-slate-200 pt-4 flex justify-center ">
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
          className="md:text-5xl text-[27px] text-slate-950 w-fit py-4 font-bold ">
          Technology stacks & Skills
        </motion.h2>
      </div>
      <div className="overflow-hidden">
        {/* React */}
        <div className="relative flex">
          <div className="absolute inset-0 blur-sm bg-[url('/images/skill-bg.jpg')] bg-fixed bg-no-repeat bg-cover z-[-10] opacity-80"></div>
          <div className="grid grid-cols-1 bg-transparent py-2 px-4 items-center md:grid-cols-2">
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
                      src={"/images/react-gif.gif"}
                      alt="Example"
                      className={`transition rounded-md `}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="p-3  md:border-r-[1px">
              <p className="!text-justify text-white">
                <strong className="text-2xl text-sky-400">R</strong>eact! Wow..!
                I chose React because it makes building modern web applications
                simple and efficient. Its component-based structure lets me
                break down the UI into smaller, reusable parts, making
                development faster. React&apos;s ability to update the page
                dynamically without reloading improves performance and user
                experience. It&apos;s also easy to learn and widely used in the
                industry, which makes it a great skill to have. you can reach
                here to know more about{" "}
                <a href="https://react.dev/reference/react" target="_blank">
                  React. <sub className="text-[10px]">[click]</sub>
                </a>
              </p>
              <div className="flex items-center gap-2">
                <span className="font-bold text-white">My Level:</span>
                <div className="h-2 w-60 rounded-lg border border-sky-500">
                  <div className="bg-sky-500 rounded-xl h-[7px] w-48"></div>
                </div>
                <span className="text-green-500">Expertise</span>
              </div>
            </div>
          </div>
        </div>

        {/* Express js */}
        <div className="grid grid-cols-1 bg-slate-200 py-2 px-4 items-center md:grid-cols-2">
          <div className="p-3  md:border-r-[1px">
            <p className="!text-justify text-black">
              <strong className="text-2xl ">E</strong>xpress! is the go-to
              framework for building server-side applications. Its simplicity
              and flexibility make it a favorite for creating APIs and managing
              backend logic efficiently. By using Express, I can structure my
              applications with clean routing and handle server requests
              seamlessly, which speeds up development and ensures scalability.{" "}
              <a
                href="https://expressjs.com/"
                target="_blank"
                className="font-bold text-black hover:text-black">
                Express.<sub className="text-[10px]">[click]</sub>
              </a>
            </p>
            <div className="flex items-center gap-2">
              <span className="font-bold">My Level:</span>
              <div className="h-2 w-60 rounded-lg border border-black">
                <div className="bg-black rounded-xl h-[7px] w-48"></div>
              </div>
              <span className="text-green-500">Good</span>
            </div>
          </div>
          <div>
            {/* Content inside */}
            <div className="relative flex h-[300px] w-full flex-col items-center justify-center">
              <motion.div
                initial={{ opacity: 0, x: +200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="card-wrapper motion-preset-slide-left relative h-[200px] w-[200px]">
                <div className="card-content rounded-md flex items-center justify-center text-xs">
                  <img
                    src={"/images/express.jpg"}
                    alt="Example"
                    className={`transition rounded-md `}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* MongoDB skill */}
        <div className="relative flex">
          <div className="absolute inset-0 blur-sm bg-[url('/images/full-stack-bg.jpg')] bg-fixed bg-no-repeat bg-cover z-[-10] opacity-80"></div>

          <div className="grid grid-cols-1  bg-transparent py-2 px-4 items-center md:grid-cols-2">
            <div className="bg-transparent">
              {/* Content inside */}
              <div className="relative flex h-[300px] w-full flex-col items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, x: -200 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  className="card-wrapper motion-preset-slide-left relative h-[200px] w-[270px]">
                  <div className="card-content rounded-md flex items-center justify-center text-xs">
                    <img
                      src={"/images/mongodb.gif"}
                      alt="Example"
                      className={`transition px-2 rounded-md `}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="p-3  md:border-r-[1px">
              <p className="!text-justify text-white">
                <strong className="text-2xl text-green-400">M</strong>ongoDB!
                stands out as a modern database solution tailored for dynamic
                applications. With its ability to store data in JSON-like
                documents, it naturally integrates with JavaScript-based
                technologies like React and Express. Its scalability and
                flexibility make it ideal for managing everything from small
                datasets to complex, high-traffic applications. you can reach
                here to know more about{" "}
                <a
                  href="https://www.mongodb.com/docs/manual/reference/database-references/"
                  target="_blank"
                  className="text-green-400">
                  MongoDB.<sub className="text-[10px]">[click]</sub>
                </a>
              </p>
              <div className="flex items-center gap-2">
                <span className="font-bold text-white">My Level:</span>
                <div className="h-2 w-60 rounded-lg border border-green-700">
                  <div className="bg-green-700 rounded-xl h-[7px] w-48"></div>
                </div>
                <span className="text-green-500">Good</span>
              </div>
            </div>
          </div>
        </div>

        {/* Redux js */}
        <div className="grid grid-cols-1 bg-slate-200 py-2 px-4 items-center md:grid-cols-2">
          <div className="p-3  md:border-r-[1px">
            <p className="!text-justify text-black">
              <strong className="text-2xl text-violet-700">R</strong>edux is a
              state management library used in JavaScript applications,
              particularly with React, to manage and maintain the state of an
              application in a predictable way. It helps manage the state
              centrally, making it easier to handle complex data and share it
              across different components of an application. Redux allows you to
              define actions, which are dispatched to update the state, and
              reducers, which specify how the state should change in response to
              those actions.{" "}
              <a
                href="https://redux-toolkit.js.org/introduction/getting-started"
                target="_blank"
                className="font-bold text-violet-700 hover:text-violet-700">
                Redux.<sub className="text-[10px]">[click]</sub>
              </a>
            </p>
            <div className="flex items-center gap-2">
              <span className="font-bold">My Level:</span>
              <div className="h-2 w-60 rounded-lg border border-black">
                <div className="bg-violet-700 rounded-xl h-[7px] w-48"></div>
              </div>
              <span className="text-green-500">Good</span>
            </div>
          </div>
          <div>
            {/* Content inside */}
            <div className="relative flex h-[300px] w-full flex-col items-center justify-center">
              <motion.div
                initial={{ opacity: 0, x: +200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="card-wrapper motion-preset-slide-left relative h-[200px] w-[200px]">
                <div className="card-content rounded-md flex items-center justify-center text-xs">
                  <img
                    src={"/images/redux.png"}
                    alt="Example"
                    className={`transition rounded-md `}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Others skills */}
        <div className="bg-sla text-white bg-slate-200 py-16 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-12">
              {skills.map((skill, index) => (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -100,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.7,
                  }}
                  key={index}
                  className="relative flex flex-col items-center rounded-xl text-center  p-8 shadow-lg hover:scale-105 transition-transform duration-300">
                  {/* Skill Image with Overlay */}
                  <div
                    className="relative w-24 h-24 mb-4 rounded-full overflow-hidden border-2 border-gray-500"
                    onMouseEnter={() => handleMouverEnter(skill.proficiency)}
                    onMouseLeave={() => displayPercentage}>
                    <img
                      src={skill.img}
                      alt={skill.name}
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute inset-0 bg-slate-900 bg-opacity-75 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-xl font-bold">
                        {displayPercentage}%
                      </span>
                    </div>
                  </div>

                  {/* Skill Name */}
                  <h3 className="text-2xl text-black font-semibold">
                    {skill.name}
                  </h3>

                  {/* Skill Description */}
                  <p className="text-gray-700 text-sm mt-2">
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* certificates */}
        <div>
          <div className="bg-slate-200 py-16 px-8">
            <div className="max-w-7xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl font-bold text-center mb-12 text-slate-950">
                My Certificates
              </motion.h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {certificates.map((certificate, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    key={index}
                    className="relative flex flex-col items-center rounded-xl text-center bg-gray-800 p-8 shadow-lg hover:scale-105 transition-transform duration-300">
                    <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden border-2 border-gray-500">
                      <img
                        src={certificate.img}
                        alt={certificate.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl text-white font-semibold">
                      {certificate.name}
                    </h3>
                    <p className="text-gray-400 text-sm mt-2">
                      {certificate.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SkillPage;
