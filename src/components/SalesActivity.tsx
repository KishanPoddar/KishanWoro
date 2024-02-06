import { DoughnutChart } from "./Charts";

const SalesActivity = () => {
    return (
        <div className="salesActivity">
            <div className="salesActivityDoughnut">
                <DoughnutChart
                    data={[30, 10, 20, 40]}
                    labels={[
                        "Agent Name",
                        "Agent Name",
                        "Agent Name",
                        "Agent Name",
                    ]}
                    backgroundColor={[
                        "#9A55FF",
                        "#ED4D5C",
                        "#E441FF",
                        "#0094FF",
                    ]}
                />
                <span>28%</span>
            </div>
            <div className="salesActivityAgentName">
                <div>Activities By Sales Person</div>
                <div>
                    <li>Agent Name</li>
                    <li>Agent Name</li>
                    <li>Agent Name</li>
                    <li>Agent Name</li>
                </div>
            </div>
        </div>
    );
};

export default SalesActivity;
