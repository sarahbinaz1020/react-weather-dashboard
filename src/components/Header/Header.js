import React from "react";
import NavBar from "../Navbar/NavBar";
import SearchBar from "../SearchBar/SearchBar";
import { Container, Row, Col } from "react-bootstrap";
import "./header.css";

function Header() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>Weather Dashboard</Col>
        </Row>
        <Row>
          <Col>
            <SearchBar></SearchBar>
          </Col>
          <Col>
            <NavBar></NavBar>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
