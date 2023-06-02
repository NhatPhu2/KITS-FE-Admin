import {
  Button,
  Space,
  Table,
  Row,
  Col,
  Input,
  Typography,
  Modal,
  Form,
} from "antd";
import { useState } from "react";
import styled from "styled-components";
const TableUserManagement = styled(Table)``;
const CustomerCard = () => {
  //   const onChange = (key) => {
  //     console.log(key);
  //   };
  //   const [isModalOpen, setIsModalOpen] = useState(false);
  //   const showModal = () => {
  //     setIsModalOpen(true);
  //   };
  //   // const handleOk = () => {
  //   //   setIsModalOpen(false);
  //   // };
  //   const handleCancel = () => {
  //     setIsModalOpen(false);
  //   };

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      render: (text) => <a href="#">{text}</a>,
    },
    {
      title: "Name",
      dataIndex: "name",
      render: (text) => <a href="#">{text}</a>,
    },

    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "PhoneNumber",
      dataIndex: "phoneNumber",
    },
    {
      title: "TotalOrdered",
      dataIndex: "totalOrdered",
    },
    {
      dataIndex: "id",
      render: (text) => (
        <Space>
          <Button>Send E-Invoice</Button>
          <Button>Export Invoice</Button>
        </Space>
      ),
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
      totalOrdered: 100,
    },
    {
      id: "2",
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      phoneNumber: "0987453647",
      totalOrdered: 100,
    },
    {
      id: "3",
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      phoneNumber: "0987453647",
      totalOrdered: 100,
    },
    {
      id: "4",
      key: "4",
      name: "Disabled User",
      age: 99,
      address: "Sidney No. 1 Lake Park",
      phoneNumber: "0987453647",
      totalOrdered: 100,
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
  const onFormFinish = (data) => {
    // setComponentSize(size);
    console.log(data);
  };
  return (
    <>
      <TableUserManagement
        title={() => (
          <Row justify={"end"}>
            <Col>
              <Space>
                <Button>Export excel</Button>
                <Button>Reload</Button>
              </Space>
            </Col>
          </Row>
        )}
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

      {/* <Modal
        onCancel={handleCancel}
        cancelButtonProps={{ style: { display: "none" } }}
        open={isModalOpen}
        okButtonProps={{ style: { display: "none" } }}
      >
        <Form
          onFinish={onFormFinish}
          fields={null}
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          initialValues={{
            size: "default",
          }}
          //   onValuesChange={onFormLayoutChange}
          //   onChange={onFormLayoutChange}
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item label="Id" name="userId">
            <Input />
          </Form.Item>
          <Form.Item label="Name" name="userName">
            <Input />
          </Form.Item>
          <Form.Item label="Age" name="userAge">
            <Input />
          </Form.Item>
          <Form.Item label="Address" name="userAddress">
            <Input />
          </Form.Item>
          <Form.Item label="PhoneNumber" name="phoneNumber">
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </Modal> */}
    </>
  );
};

export default CustomerCard;
