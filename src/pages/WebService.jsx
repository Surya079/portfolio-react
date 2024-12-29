/* eslint-disable react-hooks/exhaustive-deps */
import React, { Suspense, useEffect } from "react";
import SkeletonLoader from "../Components/SkeletonLoading/SkeletonLoad";
import useMetaData  from "../context/metaContext";

const WebServicePage = React.lazy(() =>
  import("../Components/WebservicePage/WebServicePage")
);
export const WebService = () => {
  const { handleMetaData } = useMetaData();

  useEffect(() => {
    handleMetaData({
      title: "Web Services by Surya",
      description:
        "We provide cutting-edge web development services to help your business thrive.",
      keywords: "Web Development, Web Services, Digital Solutions",
      author: "surya.vme005@gmail.com",
    });
  }, []);
  return (
    <Suspense fallback={<SkeletonLoader variant={"content"} />}>
      <WebServicePage />
    </Suspense>
  );
};
