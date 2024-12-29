import React, { Suspense } from "react";

import SkeletonLoader from "../Components/SkeletonLoading/SkeletonLoad";

const EditServicePage = React.lazy(() =>
  import("../Components/EditServicePage/EditServicePage")
);
export const EditService = () => {
  return (
    <Suspense fallback={<SkeletonLoader variant={"content"} />}>
      <EditServicePage />
    </Suspense>
  );
};
