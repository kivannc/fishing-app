
import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Sidebar = () => (
    <div
        className="d-flex flex-column p-3 bg-light"
        style={{ height: "100vh" }}
    >
        <Nav className="flex-column">
            <Nav.Link as={Link} to="/dashboard">
                Dashboard
            </Nav.Link>
            <Nav.Link as={Link} to="/fishing-spots">
                Fishing Spots
            </Nav.Link>
        </Nav>
    </div>
);

export default Sidebar;
