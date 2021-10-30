import React from "react";
import { CardGroup } from "reactstrap";
import Average from "./Average";
import PeopleVisited from "./PeopleVisited";
import TotalRevenue from "./TotalRevenue";
import Unit from "./Unit";
import data from "../../data.json";

const Row2 = () => {
  return (
    <CardGroup className="col-12 p-0 m-0">
      <TotalRevenue totalRevenue={data.totalRevenue} deposits={data.deposits} />
      <PeopleVisited number={data.peopleVisited} />
      <Average number={data.APSD} />
      <Unit number={data.UPSD} />
    </CardGroup>
  );
};

export default Row2;
