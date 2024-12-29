import React, { Suspense } from "react";
import SkeletonLoader from "../Components/SkeletonLoading/SkeletonLoad";

const WebServicePage = React.lazy(() =>
  import("../Components/WebservicePage/WebServicePage")
);
export const WebService = () => {
  return (
    <Suspense fallback={<SkeletonLoader variant={"content"} />}>
      <WebServicePage />
    </Suspense>
  );
};
