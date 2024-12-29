import React, { Suspense } from "react";

import SkeletonLoader from "../Components/SkeletonLoading/SkeletonLoad";
const PostPage = React.lazy(() => import("../Components/Blogs/BlogPage"));

const Blogs = () => {
  return (
    <Suspense fallback={<SkeletonLoader variant={"blogs"} />}>
      <PostPage />
      {/* Pass rawContent to PostPage */}
    </Suspense>
  );
};

export default Blogs;
