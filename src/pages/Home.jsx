/* eslint-disable react-hooks/exhaustive-deps */
import React, { Suspense, useEffect } from "react";
import SkeletonLoader from "../Components/SkeletonLoading/SkeletonLoad";
import  useMetaData  from "../context/metaContext";

const HomePage = React.lazy(() => import("../Components/HomePage"));

const Home = () => {
  const { handleMetaData } = useMetaData();
  useEffect(() => {
    handleMetaData({
      title: "Welcome to Surya's Portfolio",
      description: "Explore Surya's projects, skills, and experience.",
      keywords: "Surya, Portfolio, Web Developer, Projects",
      author: "surya.vme005@gmail.com",
    });
  }, []);
  return (
    <>
      <Suspense fallback={<SkeletonLoader variant={"content"} />}>
        <HomePage />
      </Suspense>
    </>
  );
};

export default Home;
