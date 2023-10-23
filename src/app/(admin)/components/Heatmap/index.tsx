"use client";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Heatmap, G2, HeatmapConfig } from "@ant-design/plots";
import { Card } from "@douyinfe/semi-ui";
// TypeScript function to generate data
function generateCommitData(startDate: Date, endDate: Date) {
  const data = [];
  let currentDate = new Date(startDate);
  let week = 0;
  while (currentDate <= endDate) {
    const commits = Math.floor(Math.random() * 10); // Generate random commits for each day
    const date = currentDate.toISOString().slice(0, 10); // Format date as "YYYY-MM-DD"
    const month = currentDate.getMonth(); // Get month (1-12)
    const day = currentDate.getDay(); // Get day of the month

    data.push({
      date,
      commits,
      month,
      day,
      week,
    });

    currentDate.setDate(currentDate.getDate() + 1); // Move to the next day
    if (day === 6) {
      week++; // Increment week counter at the end of the week (assuming Sunday is the last day of the week)
    }
  }

  return data;
}

// Example usage:
const startDate = new Date("2023-01-01");
const endDate = new Date("2023-12-31");
const data = generateCommitData(startDate, endDate);

const PostHeatmap = () => {
  const config: HeatmapConfig = {
    data,
    height: 140,
    xField: "week",
    yField: "day",
    colorField: "commits",
    reflect: "y",
    sizeRatio: 0.8,
    shape: "square",
    meta: {
      day: {
        type: "cat",
        values: [
          "星期日",
          "星期一",
          "星期二",
          "星期三",
          "星期四",
          "星期五",
          "星期六",
        ],
      },
      week: {
        type: "cat",
      },
      commits: {
        sync: true,
      },
      date: {
        type: "cat",
      },
    },
    yAxis: {
      grid: null,
    },
    tooltip: {
      title: "date",
      showMarkers: false,
    },
    interactions: [
      {
        type: "element-active",
      },
    ],
    xAxis: {
      position: "top",
      tickLine: null,
      line: null,
      label: {
        // offset: 12,
        autoHide: false,
        offsetX: 4,
        style: {
          fontSize: 12,
          fill: "#666",
          textBaseline: "top",
        },
        formatter: (val) => {
          const monthMapping = {
            0: "JAN",
            4: "FEB",
            8: "MAR",
            12: "APR",
            17: "MAY",
            21: "JUN",
            25: "JUL",
            30: "AUG",
            34: "SEP",
            38: "OCT",
            42: "NOV",
            46: "DEC",
          } as const;

          // 计算月份
          return monthMapping[val as unknown as keyof typeof monthMapping];
        },
      },
    },
  };

  return (
    <Card className="w-1/2">
      <Heatmap {...config} />
    </Card>
  );
};

export default PostHeatmap;
