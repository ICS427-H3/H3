import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Axios from 'axios';
import { useNavigate } from "react-router-dom";

export let isSignedIn = {
    Status: 0,
    UserID: null,
    ErrorMessage: '',
};

function Signin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();

    const addSticker = (event) => {
        console.log(event);
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
        event.preventDefault();
        Axios.post('http://localhost:3001/Signin', {
            email: email,
            password: password,
        }).then((response) => {
            if (response.data[0].Status == 1) {
                isSignedIn.Status = 1;
                isSignedIn.UserID = response.data[0].UserID;
                navigate("/");
            }
        })
    };

    const SignoutComponent = () => {
        isSignedIn.Status = 0;
        window.location.reload();
    }

  return (
  <Container>
    {isSignedIn ? (
        <div>
         <SignoutComponent/>
        </div>
    ) : (
        <Form noValidate validated={validated} onSubmit={addSticker}>
        <Form.Group className="mb-3" controlId="validationCustom02">
            <br/>
            <br/>
            <h4>Sign In</h4>
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
    )}

  </Container>

  );
}

export default Signin;
