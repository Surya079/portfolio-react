import React, { Suspense } from "react";
import SkeletonLoader from "../Components/SkeletonLoading/SkeletonLoad";

const LoginBox = React.lazy(() =>
  import("../Components/Blogs/login/LoginPage")
);
const Login = () => {
  return (
    <Suspense fallback={<SkeletonLoader variant={"form"} />}>
      <LoginBox />
    </Suspense>
  );
};

export default Login;
