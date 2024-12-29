import React, { Suspense } from "react";
import SkeletonLoader from "../Components/SkeletonLoading/SkeletonLoad";

const ContactPage = React.lazy(() =>
  import("../Components/common/ContactPage/index")
);
export const Contact = () => {
  return (
    <Suspense fallback={<SkeletonLoader variant={"form"} />}>
      <ContactPage />
    </Suspense>
  );
};
