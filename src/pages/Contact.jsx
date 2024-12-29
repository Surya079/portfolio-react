import React, { Suspense, useEffect } from "react";
import SkeletonLoader from "../Components/SkeletonLoading/SkeletonLoad";
import useMetaData from "../context/metaContext";

const ContactPage = React.lazy(() =>
  import("../Components/common/ContactPage/index")
);
export const Contact = () => {
  const { handleMetaData } = useMetaData();

  useEffect(() => {
    handleMetaData({
      title: "Contact - Surya's Portfolio",
      description:
        "Get in touch with Surya for collaboration, job opportunities, or general inquiries.",
      keywords: "Contact, Surya, Portfolio, Collaboration, Job Opportunities",
      author: "surya.vme005@gmail.com",
    });
  }, []);
  return (
    <Suspense fallback={<SkeletonLoader variant={"form"} />}>
      <ContactPage />
    </Suspense>
  );
};
