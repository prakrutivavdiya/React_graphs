import React from "react";
import { Card, Col, Row } from "reactstrap";
import UPSD from "../../assets/UPSD.png";
const Unit = ({ number }) => {
  return (
    <Card className="border-0 p-3 m-1 component">
      <Row className="col-12">
        <Col sm={4} className="py-4">
          <img src={UPSD} alt="total revenue" />
        </Col>
        <Col>
          <h5>Units per store day</h5>
          <h4>${number}</h4>
        </Col>
      </Row>
    </Card>
  );
};

export default Unit;
