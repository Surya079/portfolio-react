import React, { Suspense } from "react";
import SkeletonLoader from "../Components/SkeletonLoading/SkeletonLoad";

const AboutPage = React.lazy(() =>
  import("../Components/common/AboutPage/index")
);
export const About = () => {
  return (
    <Suspense fallback={<SkeletonLoader variant={"content"} />}>
      <AboutPage />
    </Suspense>
  );
};
