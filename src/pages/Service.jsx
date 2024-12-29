/* eslint-disable react-hooks/exhaustive-deps */
import React, { Suspense, useEffect } from "react";
import SkeletonLoader from "../Components/SkeletonLoading/SkeletonLoad";
import  useMetaData  from "../context/metaContext";

const ServiceCard = React.lazy(() =>
  import("../Components/common/ServiceCard")
);

export const Service = () => {
  const { handleMetaData } = useMetaData();

  useEffect(() => {
    handleMetaData({
      title: "Our Services",
      description:
        "Explore the services we offer to help you grow your business.",
      keywords: "Services, Web Development, Digital Solutions",
      author: "surya.vme005@gmail.com",
    });
  }, []);
  return (
    <div className="bg-slate-400">
      <Suspense fallback={<SkeletonLoader variant={"content"} />}>
        <ServiceCard />
      </Suspense>
    </div>
  );
};
