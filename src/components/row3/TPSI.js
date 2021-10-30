import React, { useState, useEffect } from "react";
import { Card, Table, Progress } from "reactstrap";

const TPSI = ({ data }) => {
  const [table, setTable] = useState([]);
  useEffect(() => {
    const table1 = data?.map((i) => {
      return (
        <tr key={i.Category}>
          <th scope="row">{i.Category}</th>
          <td>{i.APSD}</td>
          <td>{i.UPSD}</td>
          <td>
            <Progress multi>
              <Progress bar color="success" value={i.SKU}>
                {i.SKU}
              </Progress>
              <Progress bar color="danger" value={100 - i.SKU} />
            </Progress>
          </td>
        </tr>
      );
    });
    setTable(table1);
  }, [data]);
  return (
    <Card className="border-0 p-3 col-xs-12 col-lg-6 m-1 component">
      <h4>Top Popular Sale Items</h4>
      <Table responsive className="component">
        <thead className="text-grey">
          <tr>
            <th>Item Category</th>
            <th>APSD</th>
            <th>UPSD</th>
            <th>SKU Stock</th>
          </tr>
        </thead>
        <tbody>{table}</tbody>
      </Table>
    </Card>
  );
};

export default TPSI;
