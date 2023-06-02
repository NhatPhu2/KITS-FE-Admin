import styled from "styled-components";
import { Row, Col, Typography, Space,Button,Input } from "antd";

const RowStyled = styled(Row)`
  background-color: white;
  margin: 20px 0px;
  padding: 20px 0px;
`;
const {Search} = Input
const FilterProduct = () => {
  return (
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
  );
};

export default FilterProduct;
