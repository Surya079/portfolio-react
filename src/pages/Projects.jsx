/* eslint-disable react-hooks/exhaustive-deps */
import React, { Suspense, useEffect } from "react";
import SkeletonLoader from "../Components/SkeletonLoading/SkeletonLoad";
import  useMetaData from "../context/metaContext";

const ProjectsPage = React.lazy(() =>
  import("../Components/common/ProjectPage")
);
export const Projects = () => {
  const { handleMetaData } = useMetaData();

  useEffect(() => {
    handleMetaData({
      title: "Surya's Projects",
      description: "Discover the various projects that Surya has worked on.",
      keywords: "Surya, Projects, Web Development, React, Full Stack",
      author: "surya.vme005@gmail.com",
    });
  }, []);
  return (
    <Suspense fallback={<SkeletonLoader variant={"content"} />}>
      <ProjectsPage />
    </Suspense>
  );
};
