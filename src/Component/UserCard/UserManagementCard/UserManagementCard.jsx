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
import { useState, useReducer } from "react";
import styled from "styled-components";
const TableUserManagement = styled(Table)``;

const initState = {
  products: [
    {
      id: "1",
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Par",
      phoneNumber: "0987453647",
    },
    {
      id: "2",
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      phoneNumber: "0987453647",
    },
    {
      id: "3",
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      phoneNumber: "0987453647",
    },
    {
      id: "4",
      key: "4",
      name: "Disabled User",
      age: 99,
      address: "Sidney No. 1 Lake Park",
      phoneNumber: "0987453647",
    },
  ],
};
const SET_PRODUCT = "set_product";
const ADD_PRODUCT = "add_product";
const DELETE_PRODUCT = "delete_product";

const setProduct = (payload) => {
  return {
    type: SET_PRODUCT,
    payload,
  };
};

const addProduct = (payload) => {
  return {
    type: ADD_PRODUCT,
    payload,
  };
};

const deleteProduct = (payload) => {
  return {
    type: DELETE_PRODUCT,
    payload,
  };
};

const reducer = (state, action) => {
  let newState;
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case SET_PRODUCT:
      newState = {
        ...state,
        product: action.payload
      }  
    default:
      throw new Error("invalid action");
  }
  console.log(newState)
};

const UserManagementCard = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  const onChange = (key) => {
    console.log(key);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    dispatch(
      addProduct({
        id: "5",
        key: "4",
        name: "Disabled User",
        age: 99,
        address: "Sidney No. 1 Lake Park",
        phoneNumber: "0987453647",
      })
    );
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
      dataIndex: "id",
      render: (text) => (
        <Space>
          <Button>Delete</Button>
          <Button>Update</Button>
        </Space>
      ),
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
                <Button onClick={showModal}>Add new user</Button>
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
        dataSource={state.products}
      />

      <Modal
        onCancel={handleCancel}
        cancelButtonProps={{ style: { display: "none" } }}
        open={isModalOpen}
        okButtonProps={{ style: { display: "none" } }}
      >
        <Form
          onFinish={onFormFinish}
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

export default UserManagementCard;
