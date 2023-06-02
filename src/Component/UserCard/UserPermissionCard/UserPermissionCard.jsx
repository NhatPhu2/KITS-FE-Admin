import { Button, Space, Table, Badge } from "antd";
import styled from "styled-components";
const TablePermission = styled(Table)`
text-align: center;
`;

const UserPermissionCard = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      render: (text) => <a href="#">{text}</a>,
      align:"center"
    },
    {
      title: "Name",
      dataIndex: "name",
      render: (text) => <a href="#">{text}</a>,
      align:"center"
    },

    {
      title: "Age",
      dataIndex: "age",
      align:"center"
    },
    {
      title: "Address",
      dataIndex: "address",
      align:"center"
    },
    {
      title: "PhoneNumber",
      dataIndex: "phoneNumber",
      align:"center"
    },
    {
      title: "Role",
      dataIndex: "role",
      render: (role) => <Badge
      className="site-badge-count-109"
      count="role"
      style={{
        backgroundColor: '#52c41a',
      }}
    />,
    align:"center"
    },
    {
        title: "Active",
        dataIndex: "active",
        render: () => <Badge status="processing"/>,
        align:"center"
      },
    {
      dataIndex: "id",
      render: (text) => <Button type="primary">Change permission</Button>,
    },
  ];
  const data = [
    {
      id: "1",
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Par",
      phoneNumber: "0987453647",
      role: "User",
    },
    {
      id: "2",
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      phoneNumber: "0987453647",
      role: "User",
    },
    {
      id: "3",
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      phoneNumber: "0987453647",
      role: "User",
    },
    {
      id: "4",
      key: "4",
      name: "Disabled User",
      age: 99,
      address: "Sidney No. 1 Lake Park",
      phoneNumber: "0987453647",
      role: "User",
    },
  ];
  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
    }),
  };
  return (
    <TablePermission
      bordered={false}
      scroll={{ x: 1100 }}
      pagination={{
        defaultPageSize: 8,
        onChange: (event) => console.log(event),
      }}
      rowSelection={rowSelection}
      columns={columns}
      dataSource={data}
    />
  );
};

export default UserPermissionCard;
