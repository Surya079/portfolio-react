import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-[15px] md:text-2xl text-center mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-[--blue] text-white rounded-2xl hover:text-light-blue motion-preset-shake transition">
        Go Back Home
      </Link>
    </div>
  );
};

export default Page404;
