import React from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

function CartItem(props) {
  // console.log(props.cartItem);
  return (
    <>
      <Card.Body>
        <Card.Title>{props.cartItem.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"> ${props.cartItem.price} x {props.cartItem.qty} </Card.Subtitle>
        <Card.Img variant="bottom" src={props.cartItem.image} />
      </Card.Body>
    </>
    // <>
    //   <Card.Body>
    //   <Card.Title>{props.cartItem.name}</Card.Title>
    //   <Card.Subtitle className="mb-2 text-muted">Price: ${props.cartItem.price}</Card.Subtitle>
    //   <Card.Text>
    //     Description: {props.cartItem.description}
    //     Quantity: {props.cartItem.qty}
    //   </Card.Text>
    // </Card.Body>
    // <Card.Img variant="bottom" src={props.cartItem.image} />
    // </>
  );
}

CartItem.propTypes = {
  // sticker should be a object
  cartItem: PropTypes.object.isRequired,
  // onAdd: PropTypes.func,
}

export default CartItem;