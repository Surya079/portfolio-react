/* eslint-disable react-hooks/exhaustive-deps */
import React, { Suspense, useEffect } from "react";

import SkeletonLoader from "../Components/SkeletonLoading/SkeletonLoad";
import  useMetaData  from "../context/metaContext";
const PostPage = React.lazy(() => import("../Components/Blogs/BlogPage"));

const Blogs = () => {
  const { handleMetaData } = useMetaData();

  useEffect(() => {
    handleMetaData({
      title: "Surya's Blogs",
      description:
        "Read Surya's latest thoughts, tutorials, and technical articles.",
      keywords: "Blogs, Tutorials, Articles, Web Development",
      author: "surya.vme005@gmail.com",
    });
  }, []);
  return (
    <Suspense fallback={<SkeletonLoader variant={"blogs"} />}>
      <PostPage />
      {/* Pass rawContent to PostPage */}
    </Suspense>
  );
};

export default Blogs;
