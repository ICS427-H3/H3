import React from 'react';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/esm/Button';
import PropTypes from 'prop-types';

function StickerItem(props) {
  // console.log(props.sticker);
  return (
    <>
      <Card.Body>
      <Card.Title>{props.sticker.name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Price: ${props.sticker.price}</Card.Subtitle>
      <Card.Text>
        Description: {props.sticker.description}
      </Card.Text>
    </Card.Body>
    <Card.Img variant="bottom" src={props.sticker.image} />
    </>
  );
}

StickerItem.propTypes = {
  // sticker should be a object
  sticker: PropTypes.object.isRequired,
  // onAdd: PropTypes.func,
}

export default StickerItem;
