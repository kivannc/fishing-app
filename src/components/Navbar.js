import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComponent = () => (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand as={Link} to="/dashboard">
            Fishing App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/dashboard">
                    Dashboard
                </Nav.Link>
                <Nav.Link as={Link} to="/fishing-spots">
                    Fishing Spots
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default NavbarComponent;
