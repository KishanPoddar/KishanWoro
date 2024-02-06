export type SidebarItem = {
    icon: JSX.Element;
    iconActive: JSX.Element;
    name: string;
};

export type DoughnutChartProps = {
    percent: number;
    currentValue: number;
    totalValue: number;
    title: string;
};

export type LineChartProps = {
    name: string;
    currentValue: string;
    percent: number;
    graph: JSX.Element;
    arrow: "up" | "down";
    bgColor: string;
    fontColor: string;
};

export type MonthlyInconeProps = {
    heading: string;
    currentValue: string;
    arrow: "up" | "down";
    percent: number;
    para: string;
    name: string;
    date: string;
};
