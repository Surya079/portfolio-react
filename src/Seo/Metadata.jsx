import { Helmet } from "react-helmet";
import useMetaData from "../context/metaContext";

const Metadata = () => {
  const { metaData } = useMetaData(); // Use metadata from the context
  return (
    <Helmet>
      <title>{metaData.title}</title>
      <meta name="description" content={metaData.description} />
      <meta name="keywords" content={metaData.keywords} />
      <meta name="author" content={metaData.author} />
    </Helmet>
  );
};

export default Metadata;
