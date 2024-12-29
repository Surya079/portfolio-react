import React, { Suspense } from "react";
import SkeletonLoader from "../Components/SkeletonLoading/SkeletonLoad";

const SkillPage = React.lazy(() => import("../Components/common/SkillPage"));

export const Skills = () => {
  return (
    <Suspense fallback={<SkeletonLoader variant={"content"} />}>
      <SkillPage />
    </Suspense>
  );
};
