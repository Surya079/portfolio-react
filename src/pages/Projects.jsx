import React, { Suspense } from "react";
import SkeletonLoader from "../Components/SkeletonLoading/SkeletonLoad";

const ProjectsPage = React.lazy(() =>
  import("../Components/common/ProjectPage")
);
export const Projects = () => {
  return (
    <Suspense fallback={<SkeletonLoader variant={"content"} />}>
      <ProjectsPage />
    </Suspense>
  );
};
