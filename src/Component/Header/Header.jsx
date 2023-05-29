// import styled from "styled-components";
import { AntDesignOutlined, DownOutlined } from "@ant-design/icons";
import { Avatar, Button, Divider, Dropdown, Space, theme } from "antd";
import React from "react";
const { useToken } = theme;
const items = [
  {
    key: "1",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
        Logout
      </a>
    ),
  },
  //   {
  //     key: "2",
  //     label: (
  //       <a
  //         target="_blank"
  //         rel="noopener noreferrer"
  //         href="https://www.aliyun.com"
  //       >
  //         2nd menu item (disabled)
  //       </a>
  //     ),
  //     disabled: false,
  //   },
  //   {
  //     key: "3",
  //     label: (
  //       <a
  //         target="_blank"
  //         rel="noopener noreferrer"
  //         href="https://www.luohanacademy.com"
  //       >
  //         3rd menu item (disabled)
  //       </a>
  //     ),
  //     disabled: false,
  //   },
];
const HeaderDashboard = () => {
  const { token } = useToken();
  const contentStyle = {
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
  };
  const menuStyle = {
    boxShadow: "none",
  };

  return (
    <Dropdown
      menu={{
        items,
      }}
      dropdownRender={(menu) => (
        <div style={contentStyle}>
          {React.cloneElement(menu, {
            style: menuStyle,
          })}
          <Divider
            style={{
              margin: 0,
            }}
          />
          <Space
            style={{
              padding: 8,
            }}
          ></Space>
        </div>
      )}
    >
      <Space style={{ marginRight: "30px" }}>
        <Avatar
          size={{
            xs: 24,
            sm: 32,
            md: 40,
            lg: 64,
            xl: 50,
            xxl: 100,
          }}
          icon={<AntDesignOutlined />}
        />
      </Space>
    </Dropdown>
  );
};

export default HeaderDashboard;
