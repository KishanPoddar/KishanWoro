import { lineChartData, lineChartDataLeads, pieChartData } from "../data";
import DoughnutChart from "./DoughnutChart";
import LeadsGeneration from "./LeadsGeneration";
import LineChart from "./LineChart";
import MonthlyIncone from "./MonthlyIncone";
import MonthlyTarget from "./MonthlyTarget";
import SalesActivity from "./SalesActivity";

const DashboardTables = () => {
    return (
        <div className="halfDashboard">
            <div className="dashboardLeftHalf">
                <div className="pieChartData">
                    {pieChartData.map((data) => (
                        <DoughnutChart
                            key={data.title}
                            percent={data.percent}
                            currentValue={data.currentValue}
                            totalValue={data.totalValue}
                            title={data.title}
                        />
                    ))}
                </div>
                <div className="lineChartData">
                    {lineChartDataLeads.map((data) => (
                        <LineChart
                            key={data.name}
                            name={data.name}
                            percent={data.percent}
                            currentValue={data.currentValue}
                            graph={data.graph}
                            arrow={data.arrow}
                            bgColor={data.bgColor}
                            fontColor={data.fontColor}
                        />
                    ))}
                </div>
                <div className="leadsGenerationData">
                    <LeadsGeneration />
                </div>
            </div>
            <div className="dashboardRightHalf">
                <div className="lineChartData">
                    {lineChartData.map((data) => (
                        <LineChart
                            key={data.name}
                            name={data.name}
                            percent={data.percent}
                            currentValue={data.currentValue}
                            graph={data.graph}
                            arrow={data.arrow}
                            bgColor={data.bgColor}
                            fontColor={data.fontColor}
                        />
                    ))}
                </div>
                <div className="monthlyIncomeData">
                    <MonthlyIncone />
                </div>
                <div className="monthlyTargetAndSales">
                    <MonthlyTarget />
                    <SalesActivity />
                </div>
            </div>
        </div>
    );
};

export default DashboardTables;
