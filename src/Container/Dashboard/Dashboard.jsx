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
import DashboardCard from "../../Component/DashboardCard/index";
import { RadialChart,LinePlotChart,PositiveAndNegativeBarChart } from "../../Component/Chart/index";
const dataChart = [
  {
    type: "1-3秒",
    value: 0.16,
  },
  {
    type: "4-10秒",
    value: 0.125,
  },
  {
    type: "11-30秒",
    value: 0.24,
  },
  {
    type: "31-60秒",
    value: 0.19,
  },
  {
    type: "1-3分",
    value: 0.22,
  },
  {
    type: "3-10分",
    value: 0.05,
  },
  {
    type: "10-30分",
    value: 0.01,
  },
  {
    type: "30+分",
    value: 0.015,
  },
];
const paletteSemanticRed = "#F4664A";
const brandColor = "#5B8FF9";
const configChart = {
  data: dataChart,
  xField: "type",
  yField: "value",
  seriesField: "",
  color: ({ type }) => {
    if (type === "10-30分" || type === "30+分") {
      return paletteSemanticRed;
    }

    return brandColor;
  },
  label: {
    content: (originData) => {
      const val = parseFloat(originData.value);

      if (val < 0.05) {
        return (val * 100).toFixed(1) + "%";
      }
    },
    offset: 10,
  },
  legend: false,
  xAxis: {
    label: {
      autoHide: true,
      autoRotate: false,
    },
  },
};
const onChangeTabs = (key) => {
  console.log(key);
};
const dataList = [
  {
    title: "Title 1",
  },
  {
    title: "Title 2",
  },
  {
    title: "Title 3",
  },
  {
    title: "Title 4",
  },
];
const ProductStatistics = () => {
  return (
    <Row
      justify="space-around"
      gutter={[
        {
          xs: 8,
          sm: 16,
          md: 30,
          lg: 38,
        },
        24,
      ]}
    >
      <Col sm={24} xl={16} md={16} lg={16} xs={24}>
        <PositiveAndNegativeBarChart/>
      </Col>
      <Col xl={8} xs={24} sm={24} md={8} lg={8}>
        <Typography.Title style={{ margin: "0 0 7px" }} level={5}>
          Top sản phẩm bán chạy
        </Typography.Title>
        <List
          grid={{
            gutter: 16,
            column: 1,
          }}
          dataSource={dataList}
          renderItem={(item) => (
            <List.Item>
              <Space>
                <Typography.Text>1</Typography.Text>
                <Typography.Paragraph
                  style={{ margin: 0 }}
                  ellipsis={{
                    rows: 3,
                    expandable: true,
                  }}
                >
                  Cửa hàng 0, đường Gongzhuan
                </Typography.Paragraph>
                <Typography.Text>1234545</Typography.Text>
              </Space>
            </List.Item>
          )}
        />
      </Col>
    </Row>
  );
};
const items = [
  {
    key: "1",
    label: `Số lượng sản phẩm bán ra`,
    children: <ProductStatistics />,
  },
  {
    key: "2",
    label: `Tab 2`,
    children: `Content of Tab Pane 2`,
  },
  {
    key: "3",
    label: `Tab 3`,
    children: `Content of Tab Pane 3`,
  },
];
const DashboardStyled = styled.div``;
const MyTabsStyled = styled(Tabs)`
  background-color: #ffff;
  padding: 20px;
`;
const Dashboard = () => {
  return (
    <DashboardStyled>
      <Row
        gutter={[
          {
            xs: 8,
            sm: 16,
            md: 30,
            lg: 32,
          },
          24,
        ]}
        justify={{
          xl: "center",
          lg: "space-between",
          md: "space-between",
          sm: "space-between",
        }}
        align="middle"
        wrap={true}
      >
        <Col className="gutter-row" xl={6} lg={12} md={12} sm={12} xs={24}>
          <DashboardCard title="Số lượng người dùng" value={12345} />
        </Col>
        <Col className="gutter-row" xl={6} lg={12} md={12} sm={12} xs={24}>
          <DashboardCard title="Số lượng Sản phẩm" value={12345} />
        </Col>
        <Col className="gutter-row" xl={6} lg={12} md={12} sm={12} xs={24}>
          <DashboardCard title="Số lượng Đơn hàng" value={5679} />
        </Col>
        <Col className="gutter-row" span={24}>
          <MyTabsStyled
            defaultActiveKey="1"
            items={items}
            onChange={onChangeTabs}
          />
        </Col>
        <Col className="gutter-row" span={12}>
          <LinePlotChart/>
        </Col>
        <Col className="gutter-row" span={12}>
          <RadialChart/>
        </Col>
      </Row>
    </DashboardStyled>
  );
};

export default Dashboard;
