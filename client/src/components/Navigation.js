import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavLink from 'react-bootstrap/NavLink';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";

function Navigation () {
    return (
        <Navbar>
            <Container>
                <p style={{ margin: 8 }}>Sticky Boiz</p>
                <Nav>
                    <NavLink as={Link} to='/'>Home</NavLink>
                    <NavLink as={Link} to='/Shop'>Shop</NavLink>
                    <NavLink as={Link} to='/CreateSticker'>Create Sticker</NavLink>
                    <NavDropdown title="Login" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/Signin">Sign In</NavDropdown.Item>
                        <NavDropdown.Item href="/Signup">Sign Up</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Navigation;
