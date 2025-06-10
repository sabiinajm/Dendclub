import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart() {
  const data = {
    labels: ["Adil Əliyev", "Adil Əliyev", "Adil Əliyev", "Adil Əliyev", "Adil Əliyev"],
    datasets: [
      {
        data: [20, 40, 30, 45, 20],
        backgroundColor: ["#9F9FF8", "#96E2D6", "#5F81BD", "#92BFFF", "#E994D2"],
        hoverBackgroundColor: ["#B9B9FA", "#A8E8DD ", "#7295CB", "#A8CDFF", "#C1D5F2"],
        borderWidth: 0,
        hoverBorderWidth: 0,
        borderRadius:8,
        barThickness: 28
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
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
          label: (context) => {
            return `${context.raw} növbə`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        barPercentage: 0.2,
        categoryPercentage: 0.8, 
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "#F2F5F8",
        },
      },
    },
  };

  return (
    <div className="w-[90%] h-[250px]">
      <Bar data={data} options={options} />
    </div>
  );
}

export default BarChart;