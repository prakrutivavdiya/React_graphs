import React, { useState, useEffect } from "react";
import { Card, Table } from "reactstrap";
const TodaysWeather = ({ temp, data }) => {
  const [table, setTable] = useState([]);
  useEffect(() => {
    const table1 = data?.map((i) => {
      return (
        <tr key={i.category}>
          <td>{i.category}</td>
          <td className={i.inStock ? "text-success" : "text-danger"}>
            {i.inStock ? "In Stock" : "Out of Stock"}
          </td>
        </tr>
      );
    });
    setTable(table1);
  }, [data]);

  return (
    <Card className="border-0 p-3 col-xs-12 col-lg-6 m-1 component">
      <h4>{`Today's Weather - ${temp}° C`}</h4>
      <h6 className="text-grey">
        People always buy below items in this weather
      </h6>
      <Table responsive className="component">
        <thead className="text-grey">
          <tr>
            <th>Item Category</th>
            <th>Stock Status</th>
          </tr>
        </thead>
        <tbody>{table}</tbody>
      </Table>
    </Card>
  );
};

export default TodaysWeather;
