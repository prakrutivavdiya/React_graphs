import React from "react";
import { Card } from "reactstrap";
import { Bar } from "react-chartjs-2";
const TR = ({ labels, values, average }) => {
  const style = {
    marginRight: "2%",
    marginLeft: "auto",
  };
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Revenue $",
        data: values,

        backgroundColor: ["rgba(124, 210, 255, 1)"],
      },
    ],
  };
  return (
    <Card className="border-0 p-3 col-xs-12 col-lg-6 m-1 component">
      <h4>Total Revenues</h4>
      <span style={style}>
        {"Average: "}
        <span className="text-warning">${average}</span>
      </span>
      <Bar data={data} />
    </Card>
  );
};

export default TR;
