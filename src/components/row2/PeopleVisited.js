import React from "react";
import { Card, Col, Row } from "reactstrap";
import peopleVisited from "../../assets/people-visited.png";
const PeopleVisited = ({ number }) => {
  return (
    <Card className="border-0 p-3 m-1 component">
      <Row className="col-12">
        <Col sm={4} className="py-4">
          <img src={peopleVisited} alt="icon" />
        </Col>
        <Col>
          <h5>People visited</h5>
          <h4>{number}</h4>
        </Col>
      </Row>
    </Card>
  );
};

export default PeopleVisited;
