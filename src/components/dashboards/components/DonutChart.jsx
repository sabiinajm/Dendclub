import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ["Qadın", "Uşaq", "Kişi"],
    datasets: [
        {
            data: [40, 28, 32],
            backgroundColor: ["#0D9CD8", "#838DFF", "#0D2FD8"],
            hoverBackgroundColor: ["#0D9CD8", "#838DFF", "#0D2FD8"],
            hoverBorderColor: ["#D3ECF6", "#B1BFFF", "#637BE8"],
            hoverBorderWidth: 5,
            borderWidth: 2,
        },
    ],
};

const options = {
    cutout: "72%",
    layout: {
        padding: 20
    },
    plugins: {
        legend: { display: false },
        tooltip: {
            enabled: true,
            backgroundColor: "#F2F5F8",
            titleColor: "#64717C",
            bodyColor: "#2C2C2E",
            borderColor: "#ddd",
            borderWidth: 1,
            titleFont: { size: 14, weight: "400" },
            bodyFont: { size: 16, weight: "600" },
            padding: 10,
            displayColors: false,
            callbacks: {
                label: () => {
                    return `1.890 növbə`;
                },
            },
        },
    },
    hover: {
        mode: "nearest",
        animationDuration: 300
    },
    elements: {
        arc: {
            hoverOffset: 12,
        },
    },
};


const DonutChart = () => {
    return (
        <div className="w-[250px] h-[250px]">
            <Doughnut data={data} options={options} />
        </div>
    );
};


export default DonutChart;
