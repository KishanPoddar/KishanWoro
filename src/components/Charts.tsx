import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartData,
    ChartOptions,
    ArcElement,
    PointElement,
    LineElement,
    Filler,
} from "chart.js";
import { Bar, Doughnut, Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    PointElement,
    LineElement,
    Filler
);

interface BarChartProps {
    horizontal: boolean;
    data_1: number[];
    title_1: string;
    bgColor_1: string[];
    labels?: string[];
}

export const BarChart = ({
    horizontal,
    data_1 = [],
    title_1,
    bgColor_1 = [],
    labels = [],
}: BarChartProps) => {
    const options: ChartOptions<"bar"> = {
        responsive: true,
        indexAxis: horizontal ? "y" : "x",
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
        },

        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: false,
                },
            },
        },
    };

    const data: ChartData<"bar", number[], string> = {
        labels,
        datasets: [
            {
                label: title_1,
                data: data_1,
                backgroundColor: bgColor_1,
                barThickness: 25,
                barPercentage: 1,
                categoryPercentage: 0.5,
            },
        ],
    };

    return <Bar height={"100%"} options={options} data={data} />;
};

interface DoughnutChartProps {
    labels: string[];
    data: number[];
    backgroundColor: string[];
    // legends?: boolean;
}

export const DoughnutChart = ({
    labels,
    data,
    backgroundColor,
}: // legends = true,
DoughnutChartProps) => {
    const doughnutData: ChartData<"doughnut", number[], string> = {
        labels,
        datasets: [
            {
                data,
                backgroundColor,
                borderWidth: 0,
            },
        ],
    };

    const doughnutOptions: ChartOptions<"doughnut"> = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            // legend: {
            //     display: legends,
            //     position: "right",
            //     labels: {
            //         padding: 40,
            //     },
            // },
        },
    };

    return <Doughnut data={doughnutData} options={doughnutOptions} />;
};

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

interface LineChartProps {
    data: number[];
    label: string;
    backgroundColor: string;
    borderColor: string;
    labels?: string[];
}

export const LineChartComponent = ({
    data,
    label,
    backgroundColor,
    borderColor,
    labels = months,
}: LineChartProps) => {
    const options: ChartOptions<"line"> = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
        },

        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: true,
                },
            },
            x: {
                grid: {
                    display: true,
                },
            },
        },
    };

    const lineChartData: ChartData<"line", number[], string> = {
        labels,
        datasets: [
            {
                label,
                data,
                backgroundColor,
                borderColor,
            },
        ],
    };

    return <Line options={options} data={lineChartData} />;
};
