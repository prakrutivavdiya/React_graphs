import React from "react";
import { CardGroup } from "reactstrap";
import TPSI from "./TPSI";
import TR from "./TR";
import data from "../../data.json";
const Row3 = () => {
  return (
    <CardGroup className="col-12 p-0 m-0">
      <TR
        labels={data.TR.labels}
        values={data.TR.data}
        average={data.TR.average}
      />
      <TPSI data={data.TPSI} />
    </CardGroup>
  );
};

export default Row3;
