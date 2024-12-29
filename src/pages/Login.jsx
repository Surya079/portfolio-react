/* eslint-disable react-hooks/exhaustive-deps */
import React, { Suspense, useEffect } from "react";
import SkeletonLoader from "../Components/SkeletonLoading/SkeletonLoad";
import  useMetaData  from "../context/metaContext";

const LoginBox = React.lazy(() =>
  import("../Components/Blogs/login/LoginPage")
);
const Login = () => {
  const { handleMetaData } = useMetaData();

  useEffect(() => {
    handleMetaData({
      title: "Login - Surya's Portfolio",
      description: "Login to access Surya's portfolio and features.",
      keywords: "Login, Surya, Portfolio, Web Developer",
      author: "surya.vme005@gmail.com",
    });
  }, []);
  return (
    <Suspense fallback={<SkeletonLoader variant={"form"} />}>
      <LoginBox />
    </Suspense>
  );
};

export default Login;
