/* eslint-disable react-hooks/exhaustive-deps */
import React, { Suspense, useEffect } from "react";

import SkeletonLoader from "../Components/SkeletonLoading/SkeletonLoad";
import useMetaData from "../context/metaContext";

const EditServicePage = React.lazy(() =>
  import("../Components/EditServicePage/EditServicePage")
);
export const EditService = () => {
  const { handleMetaData } = useMetaData();

  useEffect(() => {
    handleMetaData({
      title: "Editing Service - Surya's Portfolio",
      description:
        "Offering professional editing services to enhance the quality and impact of your content, including text and multimedia.",
      keywords:
        "Editing Services, Content Editing, Multimedia Editing, Text Editing, Professional Editing",
      author: "surya.vme005@gmail.com",
    });
  }, []);
  return (
    <Suspense fallback={<SkeletonLoader variant={"content"} />}>
      <EditServicePage />
    </Suspense>
  );
};
