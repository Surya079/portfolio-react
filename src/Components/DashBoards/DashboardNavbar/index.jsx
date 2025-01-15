import { NavLink } from "react-router-dom";

const DashBoardNavbar = () => {
  return (
    <div className="mt-5 bg-black flex justify-center text-[10px] md:text-lg">
      <div className="md:px-4 py-2">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-light-blue border border-white hover:text-white md:px-3 px-1 md:text-xl text-[8px] py-1"
              : " md:px-3 px-1 md:text-xl text-[8px] py-1 text-blue-200 hover:text-blue-200  transition duration-300"
          }
          to={"/admin-dashboard/dashboard"}
          end>
          Dashboard
        </NavLink>
      </div>
      <div className="px-4 py-2">
        <NavLink
          to={"/admin-dashboard/investment"}
          className={({ isActive }) =>
            isActive
              ? "text-light-blue border border-white hover:text-white md:px-3 px-1 md:text-xl text-[8px] py-1"
              : " md:px-3 px-1 md:text-xl text-[8px] py-1 text-blue-200 hover:text-blue-200  transition duration-300"
          }>
          Investment
        </NavLink>
      </div>
      <div className="px-4 py-2">
        <NavLink
          to={"/admin-dashboard/revenue"}
          className={({ isActive }) =>
            isActive
              ? "text-light-blue border border-white hover:text-white md:px-3 px-1 md:text-xl text-[8px] py-1"
              : " md:px-3 px-1 md:text-xl text-[8px] py-1 text-blue-200 hover:text-blue-200  transition duration-300"
          }>
          Revenue
        </NavLink>
      </div>
      <div className="px-4 py-2">
        <NavLink
          to={"/admin-dashboard/profit"}
          className={({ isActive }) =>
            isActive
              ? "text-light-blue border border-white hover:text-white md:px-3 px-1 md:text-xl text-[8px] py-1"
              : " md:px-3 px-1 md:text-xl text-[8px] py-1 text-blue-200 hover:text-blue-200  transition duration-300"
          }>
          Profit
        </NavLink>
      </div>
      <div className="px-4 py-2">
        <NavLink
          to={"/admin-dashboard/loss"}
          className={({ isActive }) =>
            isActive
              ? "text-light-blue border border-white hover:text-white md:px-3 px-1 md:text-xl text-[8px] py-1"
              : " md:px-3 px-1 md:text-xl text-[8px] py-1 text-blue-200 hover:text-blue-200  transition duration-300"
          }>
          Loss
        </NavLink>
      </div>
      <div className="px-4 py-2">
        <NavLink
          to={"/admin-dashboard/loan"}
          className={({ isActive }) =>  
            isActive
              ? "text-light-blue border border-white hover:text-white md:px-3 px-1 md:text-xl text-[8px] py-1"
              : " md:px-3 px-1 md:text-xl text-[8px] py-1 text-blue-200 hover:text-blue-200  transition duration-300"
          }>
          Loan
        </NavLink>
      </div>
    </div>
  );
};

export default DashBoardNavbar;
