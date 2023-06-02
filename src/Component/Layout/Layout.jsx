import {
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  DesktopOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme, Grid } from "antd";
import { useState, useEffect } from "react";
import HeaderDashboard from "../Header/index";
import Dashboard from "../../Container/Dashboard/index";
import UserManagement from "../../Container/UserManagement/index";
import CustomerManagement from "../../Container/CustomerManagement/index";
import ProductManagement from "../../Container/ProductManagement/index";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Dashboard", "1", <PieChartOutlined />),
  getItem("User", "2", <UserOutlined />),
  getItem("Customers", "3", <DesktopOutlined />),
  getItem("Product", "4", <DesktopOutlined />),
  getItem("Orders", "5", <DesktopOutlined />),
  getItem("Coupon", "6", <DesktopOutlined />),
];
const { useBreakpoint } = Grid;
const PrimaryLayout = () => {
  const screens = useBreakpoint();
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("1");
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const onBreakPoint = (event) => {
    // console.log(event)
  };
  useEffect(() => {}, [screens]);
  const onSelectMenuKey = (event) => {
    setSelectedMenu(event.key);
  };
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        breakpoint="lg"
        onCollapse={(value) => setCollapsed(value)}
      >
        {/* <div className="demo-logo-vertical" /> */}
        <Menu
          theme="dark"
          onSelect={onSelectMenuKey}
          selectedKeys={selectedMenu}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            xs: 24,
            sm: 32,
            md: 40,
            lg: 64,
            xl: 80,
            xxl: 100,
          }}
          children={<HeaderDashboard />}
        />

        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          {selectedMenu === "1" && <Dashboard />}
          {selectedMenu === "2" && <UserManagement />}
          {selectedMenu === "3" && <CustomerManagement />}
          {selectedMenu === "4" && <ProductManagement />}
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default PrimaryLayout;
