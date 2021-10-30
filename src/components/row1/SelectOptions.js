import React, { useState, useEffect } from "react";
import { Input, Row } from "reactstrap";
import data from "../../data.json";
const SelectOptions = () => {
  const [storeOp, setStoreOp] = useState([]);
  const [dateFromOp, setDateFromOp] = useState([]);
  const [dateToOp, setDateToOp] = useState([]);
  useEffect(() => {
    setStoreOp(data.storeOptions);
    setDateFromOp(data.dateFromOptions);
    setDateToOp(data.dateToOptions);
  }, []);
  const store = storeOp?.map((i) => {
    return (
      <option key={i} value={i}>
        {i}
      </option>
    );
  });
  const from = dateFromOp?.map((i) => {
    return (
      <option key={i} value={i}>
        {i}
      </option>
    );
  });
  const to = dateToOp?.map((i) => {
    return (
      <option key={i} value={i}>
        {i}
      </option>
    );
  });
  return (
    <Row className="col-12 d-flex justify-content-end p-0 m-0">
      <div className="col-sm-4 col-lg-3 p-1">
        <span className="text-grey">Select a store</span>
        <Input type="select" className="border-0 component">
          {store}
        </Input>
      </div>
      <div className="col-sm-4 col-lg-3 p-1">
        <span className="text-grey">Select a date from</span>
        <Input type="select" className="border-0 component">
          {from}
        </Input>
      </div>
      <div className="col-sm-4 col-lg-3 p-1">
        <span className="text-grey">Select a date to</span>
        <Input type="select" className="border-0 component">
          {to}
        </Input>
      </div>
    </Row>
  );
};

export default SelectOptions;
