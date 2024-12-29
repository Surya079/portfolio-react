import React, { Suspense } from "react";
import SkeletonLoader from "../Components/SkeletonLoading/SkeletonLoad";

const ServiceCard = React.lazy(() =>
  import("../Components/common/ServiceCard")
);

export const Service = () => {
  return (
    <div className="bg-slate-400">
      <Suspense fallback={<SkeletonLoader variant={"content"} />}>
        <ServiceCard />
      </Suspense>
    </div>
  );
};
