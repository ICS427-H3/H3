import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

function Signup() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [state, setState] = useState('');
  const [validated, setValidated] = useState(false);

  const addSticker = (event) => {
    console.log(name + email + password + address + zipcode + state);
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
};

  return (
  <Container>
    <h3>Sign Up</h3>
    <Form noValidate validated={validated} onSubmit={addSticker}>
        <Form.Group className="mb-3" controlId="validationCustom01">
            <Form.Label>Name</Form.Label>
            <Form.Control required type="text" placeholder="Enter Name" onChange={(event) => {
                setName(event.target.value);
            }}/>
            <Form.Control.Feedback type="invalid">
              Please enter your name!
            </Form.Control.Feedback>
        </Form.Group>
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
            <Form.Text id="passwordHelpBlock" muted>
                Your password must be 8-20 characters long, contain letters and numbers, and
                must not contain spaces, special characters, or emoji.
            </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="validationCustom03">
            <Form.Label>Address</Form.Label>
            <Form.Control required type="text" placeholder="Enter Address" onChange={(event) => {
                setAddress(event.target.value);
            }}/>
            <Form.Control.Feedback type="invalid">
            Please enter your address!
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="validationCustom04">
            <Row>
                <Col>
                    <Form.Label>Zipcode</Form.Label>
                    <Form.Control required type="number" placeholder="Enter Zipcode" onChange={(event) => {
                        setZipcode(event.target.value);
                    }}/>
                    <Form.Control.Feedback type="invalid">
                    Please enter your Zipcode!
                    </Form.Control.Feedback>
                </Col>
                <Col>
                    <Form.Label>State</Form.Label>
                    <Form.Control required type="text" placeholder="Enter State" onChange={(event) => {
                        setState(event.target.value);
                    }}/>
                    <Form.Control.Feedback type="invalid">
                    Please enter your state!
                    </Form.Control.Feedback>
                </Col>
            </Row>
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>
  </Container>

  );
}

export default Signup;
