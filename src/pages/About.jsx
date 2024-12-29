import React, { Suspense, useEffect } from "react";
import SkeletonLoader from "../Components/SkeletonLoading/SkeletonLoad";
import useMetaData from "../context/metaContext";

const AboutPage = React.lazy(() =>
  import("../Components/common/AboutPage/index")
);
export const About = () => {
  const { handleMetaData } = useMetaData();

  useEffect(() => {
    handleMetaData({
      title: "About Surya",
      description:
        "Learn more about Surya, a web developer with a passion for building.",
      keywords: "Surya, About, Web Developer, Full Stack Developer",
      author: "surya.vme005@gmail.com",
    });
  }, []);
  return (
    <Suspense fallback={<SkeletonLoader variant={"content"} />}>
      <AboutPage />
    </Suspense>
  );
};
