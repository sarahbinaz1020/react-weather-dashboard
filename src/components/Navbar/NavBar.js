import React from "react";
import "./navbar.css";
import { Navbar, Nav } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Nav className="me-auto align-items-end justify-content-end">
        <Nav.Link href="#/" className="nav-text text-white ">
          Home
        </Nav.Link>
        <Nav.Link href="#/Daily" className="nav-text text-white">
          Daily Forecast
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
