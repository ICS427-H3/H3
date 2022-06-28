import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CartItem from '../components/cart/CartItem'
import Axios from 'axios';
import { isSignedIn } from "../components/user/Signin";

function Cart() {

    const [CartList, setCartList] = useState([]);
    
    Axios.post('http://localhost:3001/Cart', {
        UserID: isSignedIn.UserID,
    }).then((response) => {
        if (CartList.length === 0) {
            console.log(response.data);
            setCartList(response.data);
        }
    });

    return (
      <Container className="p-5 text-center">
        <h1 style={{ paddingTop: 10 }}> Your Sticker Cart </h1>
        <Row xs={1} md={3} className="g-4" style={{ paddingTop: 40 }}>
          {CartList.map((val, key) =>
            <Col key={key}>
              <Card>
                <CartItem cartItem={val} />
                <Button variant="danger" size="sm">Remove from Cart</Button>
                {/* <Button variant="danger" size="sm" onClick={() => onRemove(val)}>Remove from Cart</Button> */}
              </Card>
            </Col>
          )}
        </Row>
      </Container>
    );
}

export default Cart;