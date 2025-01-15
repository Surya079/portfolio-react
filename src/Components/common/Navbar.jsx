import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../redux/authCustomHooks";
import { selectAuth } from "../../redux/slice/authSlice";

// eslint-disable-next-line react/prop-types
export const Navbar = ({ container }) => {
  const { token, role } = useAppSelector(selectAuth);
  return (
    <div className={`${container}`}>
      {token && role === "admin" && (
        <NavLink
          to="/admin-dashboard/dashboard"
          end
          className={({ isActive }) =>
            isActive
              ? "text-light-blue border border-white hover:text-white px-6 py-1"
              : "text-white px-6 py-1 hover:text-sky-blue  transition duration-300"
          }>
          DashBoard
        </NavLink>
      )}
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "text-light-blue border border-white hover:text-white px-6 py-1"
            : "text-white px-6 py-1 hover:text-sky-blue  transition duration-300"
        }>
        About
      </NavLink>
      <NavLink
        to="/service"
        className={({ isActive }) =>
          isActive
            ? "text-light-blue border border-white hover:text-white px-6 py-1"
            : "text-white px-6 py-1 hover:text-sky-blue  transition duration-300"
        }>
        Services
      </NavLink>
      <NavLink
        to="/blogs"
        className={({ isActive }) =>
          isActive
            ? "text-light-blue border border-white hover:text-white px-6 py-1"
            : "text-white px-6 py-1 hover:text-sky-blue  transition duration-300"
        }>
        Blogs
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) =>
          isActive
            ? "text-light-blue border border-white hover:text-white px-6 py-1"
            : "text-white px-6 py-1 hover:text-sky-blue  transition duration-300"
        }>
        Projects
      </NavLink>
      <NavLink
        to="/skills"
        className={({ isActive }) =>
          isActive
            ? "text-light-blue border border-white hover:text-white px-6 py-1"
            : "text-white px-6 py-1 hover:text-sky-blue  transition duration-300"
        }>
        Skills
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive
            ? "text-light-blue border border-white hover:text-white px-6 py-1"
            : "text-white px-6 py-1 hover:text-sky-blue  transition duration-300"
        }>
        Contact
      </NavLink>
    </div>
  );
};
