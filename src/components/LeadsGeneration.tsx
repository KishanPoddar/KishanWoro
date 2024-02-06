import { BiUpArrowAlt } from "react-icons/bi";
import { BarChart } from "./Charts";

const LeadsGeneration = () => {
    return (
        <div className="leadsGenerationTargetContainer">
            <div className="leadsGenerationBox">
                <div className="leadsGenerationHeading">
                    Leads Generation Target
                </div>
                <div className="leadsGenerationValue">
                    <div className="leadsGenerationValueNumber">10,000+</div>
                    <div className="leadsGenerationValuePercent">
                        <span>
                            <BiUpArrowAlt />
                        </span>
                        <span>5.6%</span>
                    </div>
                </div>
                <div className="leadsGenerationSentence">
                    Compared to the previous year
                </div>
            </div>
            <div className="leadsGenerationGraph">
                <BarChart
                    horizontal={true}
                    data_1={[200, 584, 343]}
                    title_1="Leads Generation"
                    bgColor_1={["#55E0FF", "#E441FF", "#77ED4D"]}
                    labels={["2023", "2022", "2021"]}
                />
            </div>
        </div>
    );
};

export default LeadsGeneration;
