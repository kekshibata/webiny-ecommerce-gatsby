import {
  Col, Row, Typography, Layout,
} from 'antd';
import React, { useState } from 'react';

// Header
import HeaderComponent from './header';
// Ant Design

const { Title } = Typography;

const { Content, Footer } = Layout;

function LayoutComponent(props) {
  const title = 'Webiny';
  return (
    <div>
      <HeaderComponent title={title} />
      <Content className="site-layout">
        <Layout
          className="site-layout-background"
          style={{
            padding: '24px 0',
            margin: 100,
            display: 'flex',
            minHeight: '400px',
            background: '#fff',
          }}
        >
          <Row gutter={[16, 24]}>
            <Col
              xs={{ span: 24, offset: 4 }}
              lg={{ span: 24, offset: 2 }}
              span={24}
            >
              <Title level={2} style={{ color: '#fa5723' }}>
                {' '}
                E-commerce website build with Webiny Headless
                CMS, Next.js, and Stripe
              </Title>
            </Col>
          </Row>
          <Content
            style={{
              padding: '24px',
            }}
          >
            {props.children}
          </Content>
        </Layout>
        <Footer style={{ textAlign: 'center', background: '#fff' }}>
          <a
            href="http://webiny.com/serverless-app/headless-cms?utm_source=Webiny-blog&utm_medium=webiny-website&utm_campaign=webiny-blog-e-commerce-oct-12&utm_content=webiny-blog-e-commerce-nextjs&utm_term=W00176"
            target="_blank"
            rel="noopener noreferrer"
          >
            Webiny Serverless Headless CMS @ 2020
          </a>
        </Footer>
      </Content>
    </div>
  );
}
export default LayoutComponent;
