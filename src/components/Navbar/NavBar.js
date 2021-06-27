import React from 'react'
import { Container, Navbar, Nav } from "react-bootstrap";

function NavBar() {
    return (
        <Navbar expand="lg">
  <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#/">Home</Nav.Link>
        <Nav.Link href="#/Daily">Daily Forecast</Nav.Link>
    
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default NavBar
