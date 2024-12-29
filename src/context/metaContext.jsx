/* eslint-disable react/prop-types */
import { createContext, useContext, useMemo, useState } from "react";

// Create the Metadata context
const MetaDataContext = createContext();

// Metadata Provider component
export const MetaDataProvider = ({ children }) => {
  const [metaData, setMetaData] = useState({
    title: "Hi there - Surya's Portfolio",
    description: "This is the default description for Surya's portfolio.",
    keywords: "Portfolio, Web Developer, Full Stack Developer",
    author: "surya.vme005@gmail.com",
  });

  const handleMetaData = ({ title, description, keywords, author }) => {
    setMetaData({
      title: title,
      description: description,
      keywords: keywords,
      author: author,
    });
  };
  const contextValue = useMemo(
    () => ({ metaData, handleMetaData }),
    [metaData]
  );
  return (
    <MetaDataContext.Provider value={contextValue}>
      {children}
    </MetaDataContext.Provider>
  );
};

// Custom hook to use the Metadata context
const useMetaData = () => {
  const context = useContext(MetaDataContext);
  if (!context) {
    throw new Error("useMetaData must be used within a MetaDataProvider");
  }
  return context;
};
export default useMetaData;
