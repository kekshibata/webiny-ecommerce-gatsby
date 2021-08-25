// Ant design
import {
  Avatar, Button, List, Modal,
} from 'antd';
// Context
import React, { useContext } from 'react';
import { navigate } from 'gatsby';
import { CartContext, TotalContext, ModalContext } from '../context/context';
// React

const Cart = () => {
  const [cart] = useContext(CartContext);
  const [visible, setVisible] = useContext(ModalContext);
  const [totalPrice, settotalPrice] = useContext(TotalContext);

  const checkout = () => {
    setVisible(false);
    navigate('/checkout');
  };

  return cart.length !== 0 ? (
    <Modal
      title="Products Cart"
      centered
      visible={visible}
      onSubmit={() => {
        setVisible(false);
      }}
      onCancel={() => setVisible(false)}
      width={1000}
      footer={[
        <h3>
          Total Price: $
          {totalPrice || '0'}
        </h3>,
        <Button type="primary" onClick={checkout}>
          Checkout
        </Button>,
      ]}
    >
      <List
        itemLayout="horizontal"
        dataSource={cart}
        renderItem={(item) => (
          <List.Item key={('item: ', item.title)}>
            <List.Item.Meta
              avatar={<Avatar src={item.image} />}
              title={<a href={item.title}>{item.title}</a>}
              description={item.description}
            />
          </List.Item>
        )}
      />
    </Modal>
  ) : (
    ''
  );
};

export default Cart;
