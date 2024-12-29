/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import Page404 from "../Components/common/page404";
import  useMetaData from "../context/metaContext";

export const PageNotFound = () => {
  const { handleMetaData } = useMetaData();

  useEffect(() => {
    handleMetaData({
      title: "404 - Page Not Found",
      description: "Sorry, the page you are looking for does not exist.",
      keywords: "404, Page Not Found, Error",
      author: "surya.vme005@gmail.com",
    });
  }, []);
  return (
    <div>
      <Page404 />
    </div>
  );
};
