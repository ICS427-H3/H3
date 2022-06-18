import React, { useState } from "react";
import '../css/Navigation.css';
import Button from 'react-bootstrap/esm/Button';
import Container from "react-bootstrap/esm/Container";
import Offcanvas from 'react-bootstrap/Offcanvas';
// import Navbar from 'react-bootstrap/Navbar';
import NavLink from 'react-bootstrap/NavLink';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FiMenu } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function Navigation() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container style={{ paddingTop: 10 }}>
            <NavLink as={Link} to='/' className="float-start"> Sticky Boiz </NavLink>
            <Button className="float-end" variant="light">
                <FiShoppingCart />
            </Button>
            <Button className="float-end" variant="light" onClick={handleShow}>
                <FiMenu />
            </Button>

            <Offcanvas show={show} onHide={handleClose} placement={'end'}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title> Sticky Boiz Menu </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="flex-column">
                        <NavLink as={Link} to='/'>Home</NavLink>
                        <NavLink as={Link} to='/Shop'>Shop</NavLink>
                        <NavLink as={Link} to='/CreateSticker'>Create Sticker</NavLink>
                        <NavDropdown title="Login" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/Signin">Sign In</NavDropdown.Item>
                            <NavDropdown.Item href="/Signup">Sign Up</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </Container>

        // <Navbar>
        //     <Container>
        //         <p style={{ margin: 8 }}>Sticky Boiz</p>

        //     </Container>
        // </Navbar>

        // <i class="bi bi-cart4"></i>
        // <i class="bi bi-list"></i>
    );
}

export default Navigation;
