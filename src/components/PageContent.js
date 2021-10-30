import React from "react";
import Row1 from "./row1/Row1";
import Row2 from "./row2/Row2";
import Row3 from "./row3/Row3";
import Row4 from "./row4/Row4";

const PageContent = ({ isOpen }) => {
  const style = {
    margin: "0",
  };
  return (
    <div
      style={style}
      className={
        isOpen ? "col-md-10 col-sm-6 m-0 border-left" : "col-12 m-0 border-left"
      }
    >
      <Row1 />
      <Row2 />
      <Row3 />
      <Row4 />
    </div>
  );
};

export default PageContent;
