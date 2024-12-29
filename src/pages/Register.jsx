import React, { Suspense, useEffect } from "react";
import SkeletonLoader from "../Components/SkeletonLoading/SkeletonLoad";
import useMetaData from "../context/metaContext";

const RegisterBox = React.lazy(() =>
  import("../Components/Blogs/Register/RegisterPage")
);
const Register = () => {
  const { handleMetaData } = useMetaData();

  useEffect(() => {
    handleMetaData({
      title: "Register - Surya's Portfolio",
      description:
        "Create an account to get access to exclusive features and services on Surya's portfolio.",
      keywords: "Register, Sign Up, Create Account, Surya, Portfolio, Services",
      author: "surya.vme005@gmail.com",
    });
  }, []);
  return (
    <Suspense fallback={<SkeletonLoader variant={"form"} />}>
      <RegisterBox />
    </Suspense>
  );
};

export default Register;
