import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import StickerItem from '../components/sticker/StickerItem';
import { globalCartList } from './Shop';


function Cart() {

  return (
    <Container className="p-5 text-center">
      <h1 style={{ paddingTop: 10 }}> Your Sticker Cart </h1>
      <Row xs={1} md={4} className="g-4">
          {globalCartList.map((val, key) =>
            <Col key={key}>
              <Card>
                <StickerItem sticker={val}/>
              </Card>
            </Col>
          )}
        </Row>
    </Container>
  );
}

export default Cart;