/* eslint-disable react-hooks/exhaustive-deps */
import React, { Suspense, useEffect } from "react";
import SkeletonLoader from "../Components/SkeletonLoading/SkeletonLoad";
import useMetaData from "../context/metaContext";

const SkillPage = React.lazy(() => import("../Components/common/SkillPage"));

export const Skills = () => {
  const { handleMetaData } = useMetaData();

  useEffect(() => {
    handleMetaData({
      title: "Skills - Surya's Portfolio",
      description:
        "Explore the technical skills that Surya has mastered, including web development, full-stack development, and programming languages.",
      keywords:
        "Skills, Web Development, Full Stack Developer, Programming, React, Django, Python",
      author: "surya.vme005@gmail.com",
    });
  }, []);

  return (
    <Suspense fallback={<SkeletonLoader variant={"content"} />}>
      <SkillPage />
    </Suspense>
  );
};
