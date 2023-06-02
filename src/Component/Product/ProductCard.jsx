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
  Badge,
} from "antd";
import { useState } from "react";
import styled from "styled-components";
import FilterProduct from "./FilterProduct";
const TableProduct = styled(Table)``;
const ProductCard = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      render: (text) => <a href="#">{text}</a>,
      align: "center",
    },
    {
      title: "Photo",
      dataIndex: "photo",
      render: (url) => <img src={url} />,
      align: "center",
    },
    {
      title: "Name",
      dataIndex: "name",
      render: (text) => <a href="#">{text}</a>,
      align: "center",
    },

    {
      title: "Quantity",
      dataIndex: "quantity",
      align: "center",
    },
    {
      title: "Price",
      dataIndex: "price",
      align: "center",
    },
    {
      title: "Active",
      dataIndex: "active",
      render: (active) =>
        active ? <Badge status="processing" /> : <Badge status="default" />,
      align: "center",
    },
    {
      dataIndex: "id",
      render: (text) => (
        <Space direction="vertical">
          <Space>
            <Button>Delete</Button>
            <Button>Update</Button>
          </Space>
          <Space>
            <Button>ShowDetail</Button>
          </Space>
        </Space>
      ),
      align: "center",
    },
  ];
  const data = [
    {
      id: "1",
      photo: "1",
      name: "John Brown",
      quantity: 32,
      price: 12345454,
      active: false,
    },
    {
      id: "2",
      photo: "2",
      name: "Jim Green",
      quantity: 42,
      price: 12345454,
      active: true,
    },
    {
      id: "3",
      photo: "3",
      name: "Joe Black",
      quantity: 32,
      price: 12345454,
      active: true,
    },
    {
      id: "4",
      photo: "4",
      name: "Disabled User",
      quantity: 99,
      price: 12345454,
      active: true,
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
      <FilterProduct />
      <TableProduct
        title={() => (
          <Row justify={"end"}>
            <Col>
              <Space>
                <Button onClick={showModal}>Add new product</Button>
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

      <Modal
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
      </Modal>
    </>
  );
};

export default ProductCard;
