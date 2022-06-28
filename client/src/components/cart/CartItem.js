import React from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

function CartItem(props) {
  // console.log(props.sticker);
  return (
    <>
      <Card.Body>
        <Card.Title>{props.cartItem.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"> ${props.cartItem.price} x {props.cartItem.Quantity} </Card.Subtitle>
        <Card.Img variant="bottom" src={props.cartItem.image} />
      </Card.Body>
    </>
  );
}

CartItem.propTypes = {
  // sticker should be a object
  cartItem: PropTypes.object.isRequired,
  // onAdd: PropTypes.func,
}

export default CartItem;