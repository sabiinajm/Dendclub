import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineGraph = () => {
    const data = {
        labels: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun", "İyul", "Sentyabr", "Oktyabr"],
        datasets: [
            {
                data: [1000, 3000, 3000, 3200, 3000, 4000, 4200, 2000, 3500, 3500],
                borderColor: (context) => {
                    const chart = context.chart;
                    const { ctx, chartArea } = chart;
                    if (!chartArea) return "#624DE3";
                    const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
                    gradient.addColorStop(0, "#624DE3");
                    gradient.addColorStop(1, "#87CBF1");

                    return gradient;
                },
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                tension: 0,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { display: false },
            tooltip: {
                enabled: true,
                backgroundColor: "#F2F5F8",
                titleColor: "#624DE3",
                bodyColor: "#333", 
                borderWidth: 1, 
                padding: 10,
            },
        },
        scales: {
            x: { grid: { display: false } },
            y: {
                beginAtZero: false,
                min: 1000,
                max: 6000,
                ticks: {
                    stepSize: 1000,
                },
            },
        },
    };

    return <Line data={data} options={options} />;
};

export default LineGraph;
