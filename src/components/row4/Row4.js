import React from "react";
import { CardGroup } from "reactstrap";
import SalesByCategory from "./SalesByCategory";
import StoresRevenue from "./StoresRevenue";
import TodaysWeather from "./TodaysWeather";
import data from "../../data.json";
const Row4 = () => {
  return (
    <CardGroup className="col-12 p-0 m-0">
      <SalesByCategory
        values={data.salesByCategory.data}
        labels={data.salesByCategory.labels}
      />
      <TodaysWeather
        temp={data.todaysWeather.temperature}
        data={data.todaysWeather.data}
      />
      <StoresRevenue
        values={data.storesRevenue.data}
        labels={data.storesRevenue.labels}
      />
    </CardGroup>
  );
};

export default Row4;
