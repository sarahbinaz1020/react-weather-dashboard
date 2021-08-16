import React from "react";
import "./navbar.css";
import { Navbar, Nav } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar className="justify-content-end" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Nav className="align-items-end justify-content-center">
        <Nav.Link href="#/" className="nav-text text-danger ml-2">
          Home
        </Nav.Link>
        <Nav.Link href="#/Daily" className="nav-text text-danger mr-2">
          Daily Forecast
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
