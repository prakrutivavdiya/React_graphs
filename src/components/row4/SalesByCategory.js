import React from "react";
import { Card } from "reactstrap";
import { Doughnut } from "react-chartjs-2";
const SalesByCategory = ({ values, labels }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        data: values,
        backgroundColor: [
          "rgba(80, 80, 120, 1)",
          "rgba(255, 80, 51, 1)",
          "rgba(255, 218, 51, 1)",
          "rgba(65, 176, 91, 1)",
          "rgba(50, 134, 255, 1)",
        ],
        borderColor: [
          "rgba(80, 80, 120, 1)",
          "rgba(255, 80, 51, 1)",
          "rgba(255, 218, 51, 1)",
          "rgba(65, 176, 91, 1)",
          "rgba(50, 134, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Card className="border-0 p-3 col-xs-12 col-lg-6 m-1 component">
      <h4>Sales By Category</h4>
      <Doughnut data={data} className="m-lg-3 m-md-1" />
    </Card>
  );
};

export default SalesByCategory;
