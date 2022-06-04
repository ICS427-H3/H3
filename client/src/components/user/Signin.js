import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

function Signin() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);

  const addSticker = (event) => {
    console.log(email + password);
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
};

  return (
  <Container>
    <h3>Sign In</h3>
    <Form noValidate validated={validated} onSubmit={addSticker}>
        <Form.Group className="mb-3" controlId="validationCustom02">
            <Form.Label>Email</Form.Label>
            <Form.Control required type="text" placeholder="Enter Email" onChange={(event) => {
                setEmail(event.target.value);
            }}/>
            <Form.Control.Feedback type="invalid">
                 Please enter your email!
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="validationCustom02">
            <Form.Label>Password</Form.Label>
            <Form.Control required aria-describedby="passwordHelpBlock" type="password" placeholder="Enter Password" onChange={(event) => {
                setPassword(event.target.value);
            }}/>
            <Form.Control.Feedback type="invalid">
                Invalid Password 
            </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>
  </Container>

  );
}

export default Signin;
