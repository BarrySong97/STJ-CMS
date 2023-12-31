"use client";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Area, AreaConfig } from "@ant-design/plots";

const LineChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch(
      "https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };
  const config: AreaConfig = {
    data,
    height: 200,
    xField: "Date",
    yField: "scales",
    yAxis: {
      grid: null,
    },
    xAxis: {
      range: [0, 1],

      tickCount: 5,
    },
    areaStyle: () => {
      return {
        fill: "l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff",
      };
    },
  };

  return <Area {...config} />;
};

export default LineChart;
