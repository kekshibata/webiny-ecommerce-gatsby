// Ant design
import {
  Button, Form, Col, Row,
} from 'antd';
import React, { useContext, useState } from 'react';

// Components
import styled from 'styled-components';
import { BillingDetailsFields } from './billing-details-field';
// styled components
import { CartContext, TotalContext } from '../context/context';

const iframeStyles = {
  base: {
    color: '#ff748c',
    fontSize: '16px',
    iconColor: '#ff748c',
    '::placeholder': {
      color: '#87bbfd',
    },
    border: '1px solid gray',
  },
  invalid: {
    iconColor: '#ff748c',
    color: '#ff748c',
  },
  complete: {
    iconColor: '#ff748c',
  },
};

const cardElementOpts = {
  iconStyle: 'solid',
  style: iframeStyles,
  hidePostalCode: true,
};

const CardElementContainer = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    & .StripeElement {
        width: 100%;
        padding: 15px;
    }
`;

const CheckoutForm = () => {
  const [form] = Form.useForm();
  const [cart, setCart] = useContext(CartContext);
  const [totalPrice, settotalPrice] = useContext(TotalContext);
  const [isProcessing, setProcessingTo] = useState(false);

  const [checkoutError, setCheckoutError] = useState();
  const handleCardDetailsChange = (ev) => {
    ev.error ? setCheckoutError(ev.error.message) : setCheckoutError();
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();

    const billingDetails = {
      name: e.name.value,
      email: e.email.value,
      address: {
        city: e.city.value,
        state: e.state.value,
        postal_code: e.zip.value,
      },
    };
  };

  return (
    <>
      <Row>
        <Col
          xs={{ span: 10, offset: 4 }}
          lg={{ span: 10, offset: 6 }}
          span={24}
        >
          <Form
            form={form}
            name="checkout"
            onFinish={handleSubmit}
            scrollToFirstError
          >
            <BillingDetailsFields />
            <CardElementContainer />
            {' '}
            {checkoutError && (
            <span style={{ color: 'red' }}>
              {checkoutError}
            </span>
            )}
            <br />
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                disabled={isProcessing}
              >
                {isProcessing
                  ? 'Processing...'
                  : `Pay ${totalPrice}`}
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default CheckoutForm;
