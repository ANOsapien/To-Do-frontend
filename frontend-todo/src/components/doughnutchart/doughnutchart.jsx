import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
    const data = {
      labels: ["Completed", "Due", "Overdue"],
      datasets: [
        {
          data: [60, 20, 20], // Percentage values
          backgroundColor: ["#B7E1CD", "#A5B4FC", "#F4A6A6"], // Colors matching your image
          hoverOffset: 4,
        },
      ],
    };
  
    const options = {
      cutout: "60%", // Creates the donut hole effect
      plugins: {
        legend: {
          display: false, // Hides default legend
        },
      },
    };
  
    return (
      <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
        <div style={{ width: "150px", height: "150px" }}>
          <Doughnut data={data} options={options} />
        </div>
        <div>
          <LegendItem color="#B7E1CD" label="completed" />
          <LegendItem color="#A5B4FC" label="due" />
          <LegendItem color="#F4A6A6" label="overdue" />
        </div>
      </div>
    );
};

const LegendItem = ({ color, label }) => (
    <div style={{ display: "flex", alignItems: "center", marginBottom: "8px", marginLeft: "15px" }}>
      <span
        style={{
          width: "18px",
          height: "18px",
          backgroundColor: color,
          borderRadius: "50%",
          display: "inline-block",
          marginRight: "10px",
        }}
      ></span>
      <span div className="label">{label}</span>
    </div>
);
  
export default DonutChart;