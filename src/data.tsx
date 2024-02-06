import { DoughnutChartProps, LineChartProps } from "./types/types";

export const pieChartData: DoughnutChartProps[] = [
    {
        percent: 68,
        currentValue: 1234,
        totalValue: 3000,
        title: "Close Rate",
    },
    {
        percent: 85,
        currentValue: 2459,
        totalValue: 3000,
        title: "Average Deal Size",
    },
    {
        percent: 25,
        currentValue: 1200,
        totalValue: 3000,
        title: "Revenue",
    },
    {
        percent: 34,
        currentValue: 125,
        totalValue: 365,
        title: "Days to Win",
    },
];

export const lineChartData: LineChartProps[] = [
    {
        name: "Total Deals Win",
        currentValue: "₹ 3,393.00",
        percent: 3.4,
        graph: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="219"
                height="77"
                viewBox="0 0 219 77"
                fill="none">
                <rect
                    x="2.52148"
                    y="0.5"
                    width="215.312"
                    height="76"
                    stroke="#ECECEC"
                />
                <path d="M2.02148 25.3593H218.333" stroke="#ECECEC" />
                <path d="M2.02148 12.9102H218.333" stroke="#ECECEC" />
                <path d="M2.02148 37.8084H218.333" stroke="#ECECEC" />
                <path d="M2.02148 50.2575H218.333" stroke="#ECECEC" />
                <path d="M2.02148 62.7066H218.333" stroke="#ECECEC" />
                <path d="M38.4104 0L38.4104 77" stroke="#ECECEC" />
                <path d="M74.1254 0L74.1254 77" stroke="#ECECEC" />
                <path d="M109.84 0L109.84 77" stroke="#ECECEC" />
                <path d="M145.555 0L145.555 77" stroke="#ECECEC" />
                <path d="M181.271 0L181.271 77" stroke="#ECECEC" />
                <ellipse
                    cx="2.35854"
                    cy="62.9371"
                    rx="2.35854"
                    ry="1.61377"
                    fill="#62912C"
                />
                <ellipse
                    cx="38.7475"
                    cy="50.488"
                    rx="2.35854"
                    ry="1.61377"
                    fill="#62912C"
                />
                <ellipse
                    cx="74.3585"
                    cy="12.6138"
                    rx="2.35854"
                    ry="1.61377"
                    fill="#62912C"
                />
                <ellipse
                    cx="110.178"
                    cy="13.1407"
                    rx="2.35854"
                    ry="1.61377"
                    fill="#62912C"
                />
                <ellipse
                    cx="145.893"
                    cy="38.0389"
                    rx="2.35854"
                    ry="1.61377"
                    fill="#62912C"
                />
                <ellipse
                    cx="181.359"
                    cy="63.6138"
                    rx="2.35854"
                    ry="1.61377"
                    fill="#62912C"
                />
                <path
                    d="M2.35852 63.1675L39.0844 50.2574L74.5 13L110.177 13.3711L145.893 37.8083L181.5 63L217.02 4.98708"
                    stroke="#62912C"
                    strokeWidth="2"
                />
            </svg>
        ),
        arrow: "up",
        bgColor: "#E1F4CB",
        fontColor: "#62912C",
    },
    {
        name: "Total Deals Lost",
        currentValue: "₹ 1,467.00",
        percent: 2.6,
        graph: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="219"
                height="77"
                viewBox="0 0 219 77"
                fill="none">
                <rect
                    x="2.85474"
                    y="0.5"
                    width="215.312"
                    height="76"
                    stroke="#ECECEC"
                />
                <path d="M2.35474 25.3593H218.667" stroke="#ECECEC" />
                <path d="M2.35474 12.9102H218.667" stroke="#ECECEC" />
                <path d="M2.35474 37.8084H218.667" stroke="#ECECEC" />
                <path d="M2.35474 50.2575H218.667" stroke="#ECECEC" />
                <path d="M2.35474 62.7066H218.667" stroke="#ECECEC" />
                <path d="M38.7437 0L38.7436 77" stroke="#ECECEC" />
                <path d="M74.4587 0L74.4587 77" stroke="#ECECEC" />
                <path d="M110.174 0L110.174 77" stroke="#ECECEC" />
                <path d="M145.889 0L145.889 77" stroke="#ECECEC" />
                <path d="M181.604 0L181.604 77" stroke="#ECECEC" />
                <ellipse
                    cx="2.69179"
                    cy="62.9371"
                    rx="2.35854"
                    ry="1.61377"
                    fill="#ED4D5C"
                />
                <ellipse
                    cx="38.3585"
                    cy="24.6138"
                    rx="2.35854"
                    ry="1.61377"
                    fill="#ED4D5C"
                />
                <ellipse
                    cx="74.7958"
                    cy="62.9371"
                    rx="2.35854"
                    ry="1.61377"
                    fill="#ED4D5C"
                />
                <ellipse
                    cx="110.511"
                    cy="13.1407"
                    rx="2.35854"
                    ry="1.61377"
                    fill="#ED4D5C"
                />
                <ellipse
                    cx="146.226"
                    cy="38.0389"
                    rx="2.35854"
                    ry="1.61377"
                    fill="#ED4D5C"
                />
                <ellipse
                    cx="181.941"
                    cy="25.5898"
                    rx="2.35854"
                    ry="1.61377"
                    fill="#ED4D5C"
                />
                <path
                    d="M2.69177 63.1675L38.5 24.5L74.7957 63.1675L110.511 13.3711L146.226 37.8083L181.941 25.5897L217.656 63.1675"
                    stroke="#ED4D5C"
                    strokeWidth="2"
                />
            </svg>
        ),
        arrow: "down",
        bgColor: "#FFE3E6",
        fontColor: "#ED4D5C",
    },
    {
        name: "Converted Leads",
        currentValue: "1,000",
        percent: 10,
        graph: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="219"
                height="78"
                viewBox="0 0 219 78"
                fill="none">
                <rect
                    x="3.18811"
                    y="1"
                    width="215.312"
                    height="75.875"
                    stroke="#ECECEC"
                />
                <path d="M2.68811 25.8181H219" stroke="#ECECEC" />
                <path d="M2.68811 13.3892H219" stroke="#ECECEC" />
                <path d="M2.68811 38.247H219" stroke="#ECECEC" />
                <path d="M2.68811 50.6759H219" stroke="#ECECEC" />
                <path d="M2.68811 63.1048H219" stroke="#ECECEC" />
                <path d="M39.077 0.5L39.077 77.375" stroke="#ECECEC" />
                <path d="M74.7921 0.5L74.7921 77.375" stroke="#ECECEC" />
                <path d="M110.507 0.5L110.507 77.375" stroke="#ECECEC" />
                <path d="M146.222 0.5L146.222 77.375" stroke="#ECECEC" />
                <path d="M181.937 0.5L181.937 77.375" stroke="#ECECEC" />
                <ellipse
                    cx="3.02517"
                    cy="63.335"
                    rx="2.35854"
                    ry="1.61115"
                    fill="#41A5FF"
                />
                <ellipse
                    cx="39.4141"
                    cy="50.9061"
                    rx="2.35854"
                    ry="1.61115"
                    fill="#41A5FF"
                />
                <ellipse
                    cx="75.1292"
                    cy="63.335"
                    rx="2.35854"
                    ry="1.61115"
                    fill="#41A5FF"
                />
                <ellipse
                    cx="110.359"
                    cy="63.6112"
                    rx="2.35854"
                    ry="1.61115"
                    fill="#41A5FF"
                />
                <ellipse
                    cx="146.359"
                    cy="37.6112"
                    rx="2.35854"
                    ry="1.61115"
                    fill="#41A5FF"
                />
                <ellipse
                    cx="182.274"
                    cy="26.0483"
                    rx="2.35854"
                    ry="1.61115"
                    fill="#41A5FF"
                />
                <path
                    d="M3.02515 63.565L39.751 50.6758L75.1291 63.565L110.5 63.5L146.5 38L182.274 26.0482L217.914 1.00047"
                    stroke="#41A5FF"
                    strokeWidth="2"
                />
            </svg>
        ),
        arrow: "up",
        bgColor: "#DBEEFF",
        fontColor: "#41A5FF",
    },
];

export const lineChartDataLeads: LineChartProps[] = [
    {
        name: "Today's Leads",
        currentValue: "+10",
        percent: 3.4,
        graph: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="201"
                height="87"
                viewBox="0 0 201 87"
                fill="none">
                <rect
                    x="2.36102"
                    y="0.5"
                    width="198.139"
                    height="86"
                    stroke="#ECECEC"
                />
                <path d="M1.86102 28.6527H201" stroke="#ECECEC" />
                <path d="M1.86102 14.5868H201" stroke="#ECECEC" />
                <path d="M1.86102 42.7186H201" stroke="#ECECEC" />
                <path d="M1.86102 56.7844H201" stroke="#ECECEC" />
                <path d="M1.86102 70.8503H201" stroke="#ECECEC" />
                <path d="M35.361 0L35.361 87" stroke="#ECECEC" />
                <path d="M68.2407 0L68.2407 87" stroke="#ECECEC" />
                <path d="M101.12 0L101.12 87" stroke="#ECECEC" />
                <path d="M134 0L134 87" stroke="#ECECEC" />
                <path d="M166.88 0L166.88 87" stroke="#ECECEC" />
                <ellipse
                    cx="2.1713"
                    cy="71.1108"
                    rx="2.1713"
                    ry="1.82335"
                    fill="#62912C"
                />
                <ellipse
                    cx="35.6713"
                    cy="57.0449"
                    rx="2.17129"
                    ry="1.82335"
                    fill="#62912C"
                />
                <ellipse
                    cx="68.551"
                    cy="71.1108"
                    rx="2.17129"
                    ry="1.82335"
                    fill="#62912C"
                />
                <ellipse
                    cx="101.431"
                    cy="14.8473"
                    rx="2.17129"
                    ry="1.82335"
                    fill="#62912C"
                />
                <ellipse
                    cx="134.31"
                    cy="42.9791"
                    rx="2.1713"
                    ry="1.82335"
                    fill="#62912C"
                />
                <ellipse
                    cx="167.19"
                    cy="28.9132"
                    rx="2.1713"
                    ry="1.82335"
                    fill="#62912C"
                />
                <path
                    d="M2.17126 71.3711L35.9815 56.7843L68.5509 71.3711L101.431 15.1077L134.31 42.7184L167.19 28.913L199.79 5.63477"
                    stroke="#62912C"
                    strokeWidth="2"
                />
            </svg>
        ),
        arrow: "up",
        bgColor: "#E1F4CB",
        fontColor: "#62912C",
    },
    {
        name: "This Week's Leads",
        currentValue: "30",
        percent: 2.6,
        graph: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="201"
                height="77"
                viewBox="0 0 201 77"
                fill="none">
                <rect
                    x="2.36102"
                    y="0.5"
                    width="198.139"
                    height="76"
                    stroke="#ECECEC"
                />
                <path d="M1.86102 25.3593H201" stroke="#ECECEC" />
                <path d="M1.86102 12.9102H201" stroke="#ECECEC" />
                <path d="M1.86102 37.8084H201" stroke="#ECECEC" />
                <path d="M1.86102 50.2575H201" stroke="#ECECEC" />
                <path d="M1.86102 62.7066H201" stroke="#ECECEC" />
                <path d="M35.3611 0L35.361 77" stroke="#ECECEC" />
                <path d="M68.2407 0L68.2407 77" stroke="#ECECEC" />
                <path d="M101.12 0L101.12 77" stroke="#ECECEC" />
                <path d="M134 0L134 77" stroke="#ECECEC" />
                <path d="M166.88 0L166.88 77" stroke="#ECECEC" />
                <ellipse
                    cx="2.1713"
                    cy="62.9371"
                    rx="2.1713"
                    ry="1.61377"
                    fill="#ED4D5C"
                />
                <ellipse
                    cx="35.6713"
                    cy="50.488"
                    rx="2.17129"
                    ry="1.61377"
                    fill="#ED4D5C"
                />
                <ellipse
                    cx="68.551"
                    cy="62.9371"
                    rx="2.17129"
                    ry="1.61377"
                    fill="#ED4D5C"
                />
                <ellipse
                    cx="101.431"
                    cy="13.1407"
                    rx="2.17129"
                    ry="1.61377"
                    fill="#ED4D5C"
                />
                <ellipse
                    cx="134.31"
                    cy="38.0389"
                    rx="2.1713"
                    ry="1.61377"
                    fill="#ED4D5C"
                />
                <ellipse
                    cx="167.19"
                    cy="25.5898"
                    rx="2.1713"
                    ry="1.61377"
                    fill="#ED4D5C"
                />
                <path
                    d="M2.17126 63.1675L35.9815 50.2574L68.5509 63.1675L101.431 13.3711L134.31 37.8083L167.19 25.5897L200.069 63.1675"
                    stroke="#ED4D5C"
                    strokeWidth="2"
                />
            </svg>
        ),
        arrow: "down",
        bgColor: "#FFE3E6",
        fontColor: "#ED4D5C",
    },
    {
        name: "Converted Leads",
        currentValue: "1,000",
        percent: 10,
        graph: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="201"
                height="87"
                viewBox="0 0 201 87"
                fill="none">
                <rect
                    x="2.36102"
                    y="1"
                    width="198.139"
                    height="85.5"
                    stroke="#ECECEC"
                />
                <path d="M1.86102 28.988H201" stroke="#ECECEC" />
                <path d="M1.86102 15.003H201" stroke="#ECECEC" />
                <path d="M1.86102 42.9731H201" stroke="#ECECEC" />
                <path d="M1.86102 56.9581H201" stroke="#ECECEC" />
                <path d="M1.86102 70.9431H201" stroke="#ECECEC" />
                <path d="M35.361 0.5L35.361 87" stroke="#ECECEC" />
                <path d="M68.2407 0.5L68.2407 87" stroke="#ECECEC" />
                <path d="M101.12 0.5L101.12 87" stroke="#ECECEC" />
                <path d="M134 0.5L134 87" stroke="#ECECEC" />
                <path d="M166.88 0.5L166.88 87" stroke="#ECECEC" />
                <ellipse
                    cx="2.1713"
                    cy="71.2021"
                    rx="2.1713"
                    ry="1.81288"
                    fill="#41A5FF"
                />
                <ellipse
                    cx="35.6713"
                    cy="57.2171"
                    rx="2.17129"
                    ry="1.81288"
                    fill="#41A5FF"
                />
                <ellipse
                    cx="69.1713"
                    cy="42.8129"
                    rx="2.17129"
                    ry="1.81288"
                    fill="#41A5FF"
                />
                <ellipse
                    cx="101.171"
                    cy="56.8129"
                    rx="2.17129"
                    ry="1.81288"
                    fill="#41A5FF"
                />
                <ellipse
                    cx="134.171"
                    cy="14.8129"
                    rx="2.1713"
                    ry="1.81287"
                    fill="#41A5FF"
                />
                <ellipse
                    cx="167.19"
                    cy="29.247"
                    rx="2.1713"
                    ry="1.81288"
                    fill="#41A5FF"
                />
                <path
                    d="M2.17126 71.4609L35.9815 56.958L68.5 43L101.5 56.958L134.5 14.5L167.19 29.2469L200 1.06314"
                    stroke="#41A5FF"
                    strokeWidth="2"
                />
            </svg>
        ),
        arrow: "up",
        bgColor: "#DBEEFF",
        fontColor: "#41A5FF",
    },
];
