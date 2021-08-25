import {
  Col, Row, Typography, Input,
} from 'antd';
import React, { useState } from 'react';

// Products
import ProductList from '../components/product-list';

const { Title } = Typography;

const { Search } = Input;

export default function IndexPage() {
  const [query, updateQuery] = useState('');
  return (
    <>
      <Row gutter={[16, 24]}>
        <Col
          xs={{ span: 24, offset: 4 }}
          lg={{ span: 24, offset: 2 }}
          span={24}
        >
          <Title level={2} style={{ color: '#fa5723' }}>
            {' '}
            E-commerce website build with Webiny Headless CMS,
            Next.js, and Stripe
          </Title>
        </Col>
      </Row>
      <Row>
        <Col
          xs={{ span: 12, offset: 6 }}
          lg={{ span: 24, offset: 8 }}
          span={24}
        >
          <Title level={4} type="success">
            {' '}
            Buy Swag from the best Open Source Projects
          </Title>
        </Col>
      </Row>
      <Row>
        <Col
          xs={{ span: 12, offset: 6 }}
          lg={{ span: 24, offset: 7 }}
          span={24}
        >
          <Search
            placeholder="Search for products"
            onSearch={(value) => console.log(value)}
            style={{
              maxWidth: 500,
            }}
            onChange={(e) => updateQuery(e.target.value.toLocaleLowerCase())}
            value={query}
          />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <ProductList search={query} />
        </Col>
      </Row>
    </>
  );
}
