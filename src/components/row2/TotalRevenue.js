import React from "react";
import { Card, Col, Row } from "reactstrap";
import totalRev from "../../assets/total-revenues.png";
const TotalRevenue = ({ totalRevenue, deposits }) => {
  return (
    <Card className="border-0 p-3 m-1 component">
      <Row className="col-12">
        <Col sm={4} className="py-4">
          <img src={totalRev} alt="icon" />
        </Col>
        <Col>
          <h5>Total Revenues</h5>
          <h4>${totalRevenue}</h4>
          <span className="text-grey">Deposits-${deposits}</span>
        </Col>
      </Row>
    </Card>
  );
};

export default TotalRevenue;
