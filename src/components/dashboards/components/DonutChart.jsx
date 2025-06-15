import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useLocation } from "react-router-dom";

ChartJS.register(ArcElement, Tooltip, Legend);
const chartConfigs = {
    "/Həkim-Dashboard": {
        data: {
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
        },
        options: {
            cutout: "72%",
            layout: {
                padding: 20,
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
                        label: function () {
                            return "1.890 növbə";
                        },
                    },
                },
            },
            hover: {
                mode: "nearest",
                animationDuration: 300,
            },
            elements: {
                arc: {
                    hoverOffset: 12,
                },
            },
        },
    },

    "/Ümumi-Admin-Panel": {
        data: {
            labels: ["Endokrinologiya", "Pediatriya", "Kardiologiya", "Nevrologiya", "Digər"],
            datasets: [
                {
                    data: [30, 20, 10, 10, 40],
                    backgroundColor: ["#92BFFF", "#94E9B8", "#AEC7ED", "#9F9FF8", "#96E2D6"],
                    hoverBackgroundColor: ["#6DA6FF", "#71C996", "#8BB8FF", "#8E90FF", "#70D6CA"],
                    hoverBorderColor: ["#AECFFF", "#A0E0BC", "#BBD3FF", "#B0B3FF", "#A1E9E4"],
                    hoverBorderWidth: 5,
                    borderRadius: 6,
                    borderWidth: 2,
                },
            ],
        },
        options: {
            cutout: "50%",
            layout: {
                padding: 25,
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    enabled: true,
                    backgroundColor: "#ffffff",
                    titleColor: "#444",
                    bodyColor: "#000",
                    borderColor: "#ccc",
                    borderWidth: 1,
                    titleFont: { size: 14, weight: "bold" },
                    bodyFont: { size: 14, weight: "normal" },
                    padding: 8,
                    displayColors: false,
                    callbacks: {
                        label: function (context) {
                            const dataset = context.dataset;
                            const data = dataset.data;
                            const percentage = data[context.dataIndex];
                            return `${percentage}%`;
                        }
                    },
                },
            },
            hover: {
                mode: "nearest",
                animationDuration: 250,
            },
            elements: {
                arc: {
                    hoverOffset: 10,
                },
            },
        },
    },
};

function DonutChart() {
    const location = useLocation();
    const path = location.pathname;

    const normalizedPath = decodeURIComponent(path).toLowerCase();

    const chart =
        Object.entries(chartConfigs)
            .find(([key]) => normalizedPath.includes(key.toLowerCase()))?.[1] ||
        chartConfigs["/Həkim-Dashboard"];


    return (
        <div style={{ width: "250px", height: "250px" }}>
            <Doughnut data={chart.data} options={chart.options} />
        </div>
    );
}


export default DonutChart;
