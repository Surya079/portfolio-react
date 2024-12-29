import React, { Suspense } from "react";
import SkeletonLoader from "../Components/SkeletonLoading/SkeletonLoad";

const RegisterBox = React.lazy(() =>
  import("../Components/Blogs/Register/RegisterPage")
);
const Register = () => {
  return (
    <Suspense fallback={<SkeletonLoader variant={"form"} />}>
      <RegisterBox />
    </Suspense>
  );
};

export default Register;
