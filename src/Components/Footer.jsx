import { Link } from "react-router-dom";
import {
  CopyrightOutlined,
  GitHub,
  LinkedIn,
  Instagram,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center p-4 bg-slate-700 text-white">
      <div className="flex gap-2 ">
        <Link
          className="text-white hover:motion-preset-focus-lg hover:text-white"
          to="https://github.com/Surya079"
          target="_blank">
          <GitHub />
        </Link>
        <Link
          className="text-white hover:motion-preset-focus-lg hover:text-white"
          to="https://www.linkedin.com/in/surya-v-sv0009"
          target="_blank">
          <LinkedIn />
        </Link>
        <Link className="text-white hover:motion-preset-focus-lg hover:text-white">
          <Instagram />
        </Link>
      </div>
      <div className="">
        <CopyrightOutlined />
        2024 Hi There!. All Rights Reserved.
      </div>
      <div className="text-[10px]  flex gap-1  font-serif">
        <Link to={"/privacy-policy"} className="text-white hover:text-white">
          Privacy Policy
        </Link>
        <span className="border-l border-white h-4"></span>
        <Link
          to={"terms-and-conditions"}
          className="text-white hover:text-white">
          Terms & Conditions
        </Link>
      </div>
    </div>
  );
};

export default Footer;
