import { Tabs, Button, Space, Table, Row, Col, Input, Typography } from "antd";
import styled from "styled-components";
import UserManagementCard from "../../Component/UserCard/UserManagementCard/index";
import UserPermissionCard from "../../Component/UserCard/UserPermissionCard/index";
const TabsSyled = styled(Tabs)`
  background-color: #ffff;
  padding: 20px;
`;
const RowStyled = styled(Row)`
  background-color: white;
  margin: 20px 0px;
  padding: 20px 0px;
`;
const { Search } = Input;

const UserManagement = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: `UserManagement`,
      children: <UserManagementCard />,
    },
    {
      key: "2",
      label: `Permission`,
      children: <UserPermissionCard />,
    },
  ];
  return (
    <>
      <RowStyled justify="center">
        <Col xl={8} xxl={8} lg={12}>
          <Space>
            <Typography.Text>Enter name search</Typography.Text>
            <Search
              placeholder="input search text"
              onSearch={(value) => console.log(value)}
              //   style={{ width: 200 }}
            />
          </Space>
        </Col>
        <Col xl={8} xxl={8} lg={12}>
          <Space>
            <Typography.Text>Enter name search</Typography.Text>
            <Search
              placeholder="input search text"
              onSearch={(value) => console.log(value)}
              //   style={{ width: 200 }}
            />
          </Space>
        </Col>
        <Col xl={8} xxl={8} lg={24}>
          <Space>
            <Button danger>Do Somthing??</Button>
            <Button danger>Do Somthing??</Button>
          </Space>
        </Col>
      </RowStyled>
      <TabsSyled defaultActiveKey="1" items={items} onChange={onChange} />
    </>
  );
};

export default UserManagement;
