import React, { useState } from "react";
import Axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

function CreateSticker() {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [validated, setValidated] = useState(false);

  const addSticker = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    console.log(image);
      Axios.post('http://localhost:3001/CreateSticker', {
      name: name,
      description: description,
      price: price,
      image: image
    })};

  return (
  <Container style={{ paddingTop: 50 }}>
    <h3>Create Sticker</h3>
    <Form noValidate validated={validated} onSubmit={addSticker}>
        <Form.Group className="mb-3" controlId="validationCustom01">
            <Form.Label>Item Name</Form.Label>
            <Form.Control required type="text" placeholder="Enter Name" onChange={(event) => {
                setName(event.target.value);
            }}/>
            <Form.Control.Feedback type="invalid">
              Please enter the item name!
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="validationCustom02">
            <Form.Label>Description</Form.Label>
            <Form.Control required type="text" placeholder="Enter Description" onChange={(event) => {
                setDescription(event.target.value);
            }}/>
            <Form.Control.Feedback type="invalid">
            Please enter the description!
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="validationCustom03">
            <Form.Label>Price</Form.Label>
            <Form.Control required type="number" step="0.01" placeholder="Enter Price" onChange={(event) => {
                setPrice(event.target.value);
            }}/>
            <Form.Control.Feedback type="invalid">
            Please enter the price!
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="validationCustom03">
            <Form.Label>Image</Form.Label>
            <Form.Control required type="text" placeholder="Enter Image URL" onChange={(event) => {
                setImage(event.target.value);
            }}/>
            <Form.Control.Feedback type="invalid">
            Please enter an image!
            </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>
  </Container>

  );
}

export default CreateSticker;
