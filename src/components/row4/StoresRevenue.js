import React from "react";
import { Card } from "reactstrap";
import { Bar } from "react-chartjs-2";

const StoresRevenue = ({ values, labels }) => {
  const options = {
    indexAxis: "y",
    responsive: true,
  };
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Revenue $",
        data: values,
        backgroundColor: [
          "rgba(85, 205, 81, 1)",
          "rgba(255, 218, 51, 1)",
          "rgba(80, 80, 120, 1)",
          "rgba(50, 134, 255, 1)",
          "rgba(255, 80, 51, 1)",
          "rgba(10, 24, 135, 1)",
        ],
        borderColor: [
          "rgba(85, 205, 81, 1)",
          "rgba(255, 218, 51, 1)",
          "rgba(80, 80, 120, 1)",
          "rgba(50, 134, 255, 1)",
          "rgba(255, 80, 51, 1)",
          "rgba(10, 24, 135, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <Card className="border-0 py-3 col-xs-12 col-lg-6 m-1  component">
      <h4 className="px-2">Stores Revenues</h4>
      <Bar data={data} options={options} className="my-3" />
    </Card>
  );
};

export default StoresRevenue;
