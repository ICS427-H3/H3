import React from 'react';
// import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CartItem from '../components/cart/CartItem'
import { globalCartList } from './Shop';

function Cart() {

  let currentCart = globalCartList;
  console.log(currentCart);

  // const [cartList, setCartList] = useState([]);
  const onAddCart = (sticker) => {
    const exist = currentCart.find((x) => x.name === sticker.name);
    console.log(exist);
    if (exist) {
      currentCart.map((x) =>
          x.name === sticker.name ? { ...exist, qty: exist.qty + 1 } : x
      );
    } else {
      [...currentCart, { ...sticker, qty: 1 }];
    }
    console.log(currentCart);
  };

  const onRemove = (sticker) => {
    const exist = currentCart.find((x) => x.id === sticker.id);
    console.log(exist);

    // if (exist.qty === 1) {
    //   currentCart.filter((x) => x.id !== sticker.id);
    // } else {
    //   currentCart.map((x) =>
    //     x.id === sticker.id ? { ...exist, qty: exist.qty - 1 } : x
    //   );
    // }
  };

  return (
    <Container className="p-5 text-center">
      <h1 style={{ paddingTop: 10 }}> Your Sticker Cart </h1>
      <Row xs={1} md={3} className="g-4" style={{ paddingTop: 40 }}>
        {globalCartList.map((val, key) =>
          <Col key={key}>
            <Card>
              <CartItem cartItem={val} />
              <Button variant="success" size="sm" onClick={() => onAddCart(val)}>Add to Cart</Button>
              <Button variant="danger" size="sm" onClick={() => onRemove(val)}>Remove from Cart</Button>
            </Card>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default Cart;