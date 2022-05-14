import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

type Props = {};

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Stats Bar Chart",
    },
  },
};

const DataGraph = (props: Props) => {
  const stats = useSelector((state: RootState) => state.data.stats);
  const currentCountry = useSelector(
    (state: RootState) => state.data.currentCountry
  );
  const labels = stats.map((item) => item.title);

  console.log(labels);

  const data = {
    labels,
    datasets: [
      {
        label: currentCountry,
        data: stats.map((item) => item.value),
        backgroundColor: [
          "rgba(0, 0, 255, 0.4)",
          "rgba(0, 255, 0, 0.4)",
          "rgba(255, 0, 0, 0.4)",
          "rgba(255, 100, 0, 0.4)",
        ],
      },
    ],
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default DataGraph;
