import React, { Suspense } from "react";
import SkeletonLoader from "../Components/SkeletonLoading/SkeletonLoad";

const HomePage = React.lazy(() => import("../Components/HomePage"));

const Home = () => {
  return (
    <Suspense fallback={<SkeletonLoader variant={"content"} />}>
      <HomePage />
    </Suspense>
  );
};

export default Home;
