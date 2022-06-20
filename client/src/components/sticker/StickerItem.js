import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import PropTypes from 'prop-types';

function StickerItem(props) {
  return (
  <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>{props.sticker.name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Price: ${props.sticker.price}</Card.Subtitle>
      <Card.Text>
        Description: {props.sticker.description}
      </Card.Text>
      <Button variant="success" className='float-end'>Add to Cart</Button>
    </Card.Body>
    <Card.Img variant="bottom" src={props.sticker.image} />
  </Card>
  );
}

StickerItem.propTypes = {
  sticker: PropTypes.object.isRequired,
}

export default StickerItem;
