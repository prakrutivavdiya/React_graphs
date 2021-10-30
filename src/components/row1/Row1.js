import React from "react";
import SelectOptions from "./SelectOptions";
import { Row } from "reactstrap";
const Row1 = () => {
  return (
    <Row className="col-12 p-0 m-0">
      <div className="col-lg-5 col-md-3 col-sm-12 h4 py-3">Dashboard</div>
      <div className="col-lg-7 col-md-9 col-sm-12 px-0">
        <SelectOptions />
      </div>
    </Row>
  );
};

export default Row1;
