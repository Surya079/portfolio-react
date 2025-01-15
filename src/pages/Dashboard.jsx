import { Outlet } from "react-router-dom";
import DashBoardNavbar from "../Components/DashBoards/DashboardNavbar";

const Dashboard = () => {
  return (
    <div className="mt-5">
      <DashBoardNavbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
