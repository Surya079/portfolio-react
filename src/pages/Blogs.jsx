/* eslint-disable react-hooks/exhaustive-deps */
import React, { Suspense, useEffect } from "react";
import SkeletonLoader from "../Components/SkeletonLoading/SkeletonLoad";
import useMetaData from "../context/metaContext";
const PostPage = React.lazy(() => import("../Components/Blogs/BlogPage"));

const Blogs = () => {
  const { handleMetaData } = useMetaData();

  useEffect(() => {
    handleMetaData({
      title: "Blogs - Surya's Portfolio",
      description:
        "Explore the blogs by Surya, covering various topics in web development, technology, and more.",
      keywords: "Blogs, Surya, Portfolio, Web Development, Technology, Coding",
      author: "surya.vme005@gmail.com",
    });
  }, []);
  return (
    <Suspense fallback={<SkeletonLoader variant={"blogs"} />}>
      <PostPage />
    </Suspense>
  );
};

export default Blogs;
