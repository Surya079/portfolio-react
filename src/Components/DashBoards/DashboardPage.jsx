import { DashboardCard } from "../common/DashboardCards";

export const DashboardPage = () => {
  return (
    <div className="grid grid-rows-2">
      <div className="grid md:grid-cols-3">
        <div className="w-full p-2">
          <DashboardCard
            title={"Investment"}
            amount={"300000"}
            color={"#adcced"}
          />
        </div>
        <div className="w-full p-2">
          <DashboardCard title={"Revenue"} amount={"300000"} color={"#adcced"} />
        </div>
        <div className="w-full p-2">
          <DashboardCard title={"Profit"} amount={"300000"} color={"#adcced"} />
        </div>
      </div>
      <div className="flex md:flex-row flex-col ">
        <div className="w-full p-2">
          <DashboardCard title={"Loss"} amount={"300000"} color={"#adcced"} />
        </div>
        <div className="w-full p-2">
          <DashboardCard title={"Loan"} amount={"300000"} color={"#adcced"} />
        </div>
      </div>
    </div>
  );
};
