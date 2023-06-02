import {
  Typography,
  Space,
  Card,
  Statistic,
  Col,
  Divider,
  Row,
  Tabs,
  List,
} from "antd";
import React, { useState, useEffect } from "react";
import { TinyArea, Column } from "@ant-design/plots";
import styled from "styled-components";

const DashboardCard = ({ title, value }) => {
  const data = [
    264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513,
    546, 983, 340, 539, 243, 226, 192, 264, 417, 438, 887, 309, 397, 550, 575,
    563, 430, 525, 592, 492, 467, 513, 546, 983, 340, 539, 243, 226, 192, 264,
    417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513, 546,
    983, 340, 539, 243, 226, 192, 264, 417, 438, 887, 309, 397, 550, 575, 563,
    430, 525, 592, 492, 467, 513, 546, 983, 340, 539, 243, 226, 192,
  ];
  const config = {
    height: 60,
    autoFit: true,
    data,
    smooth: true,
    color: "#E5EDFE",
    pattern: {
      type: "line",
      cfg: {
        stroke: "#5B8FF9",
      },
    },
  };

  return (
    <Card bordered={false}>
      <Statistic title={title} value={value} />
      <TinyArea
        style={{ verticalAlign: "middle", cursor: "default" }}
        {...config}
      />
    </Card>
  );
};
export default DashboardCard;
