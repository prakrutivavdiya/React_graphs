import React from "react";
import { Card, Col, Row } from "reactstrap";
import APSD from "../../assets/APSD.png";
const Average = ({ number }) => {
  return (
    <Card className="border-0 p-3 m-1 component">
      <Row className="col-12">
        <Col sm={4} className="py-4">
          <img src={APSD} alt="icon" />
        </Col>
        <Col>
          <h5>Average per store day</h5>
          <h4>${number}</h4>
        </Col>
      </Row>
    </Card>
  );
};

export default Average;
