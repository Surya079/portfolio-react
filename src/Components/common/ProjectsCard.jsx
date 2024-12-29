/* eslint-disable react/prop-types */
import { FavoriteBorder, FavoriteOutlined } from "@mui/icons-material";
import LinkIcon from "@mui/icons-material/Link";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

export const ProjectsCard = ({
  name,
  description,
  techStacks,
  link,
  image,
}) => {
  const [isLike, setIsLike] = useState(false);

  const handleLike = () => {
    // Like api
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -200,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{ duration: 0.7 }}
      className="flex md:flex-row flex-col motion-preset-slide-down border max-w-[600px] bg-slate-800 overflow-hidden shadow-2xl rounded-2xl gap-2 border-black  p-3 text-white m-2 justify-around">
      <div className="flex  justify-start">
        <div className="w-[340px] h-[200px] ">
          <img src={image} className="object-contain w-full h-full" />
        </div>
      </div>
      <div className="flex flex-col  justify-between">
        <div className="flex flex-col mx-auto p-2 w-fit gap-2">
          <div className="flex justify-between  gap-x-6">
            <div className="font-bold md:text-center text-sm">
              Project Name:
            </div>
            <div className="text-[10px]">{name}</div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="font-bold text-sm">Tech Stacks :</div>
            <div className="text-[10px] ">{techStacks.join(", ")}</div>
          </div>
          <div className="flex flex-col justify-between ">
            <div className="font-bold  text-sm">Desciptions:</div>
            <div className="text-justify w-[200px]  text-[10px]">
              {description}
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-5 justify-end">
          <div className="flex flex-col  justify-center items-center">
            <Link to={link}>
              <LinkIcon /> <span className="text-[10px]">view</span>
            </Link>
          </div>
          <div className="flex flex-col justify-center">
            <span onClick={handleLike}>
              {isLike ? (
                <FavoriteOutlined className="text-red-600" />
              ) : (
                <FavoriteBorder />
              )}
              4
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
