import { DoughnutChartProps } from "../types/types";

const DoughnutChart = ({
    percent,
    currentValue,
    totalValue,
    title,
}: DoughnutChartProps) => {
    return (
        <div className="doughnutChartContainer">
            <div className="doughnutChart">
                <div
                    className="widget-circle"
                    style={{
                        background: `conic-gradient(#FFF ${
                            (Math.abs(percent) / 100) * 360
                        }deg, rgb(236,243,255) 0)`,
                    }}>
                    <span>{percent}%</span>
                </div>
            </div>

            <div className="doughnutChartData">
                <div className="doughnutNumber">
                    <span>{currentValue}/</span>
                    {totalValue}
                </div>
                <div className="doughnutNumberTitle">{title}</div>
            </div>
        </div>
    );
};

export default DoughnutChart;
