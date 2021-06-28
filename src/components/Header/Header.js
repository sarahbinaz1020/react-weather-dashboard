import React from "react";
import NavBar from "../Navbar/NavBar";
import SearchBar from "../SearchBar/SearchBar";
import { Container, Row, Col } from "react-bootstrap";
import "./header.css";

function Header() {
  return (
    <div>
      <Container className="header" fluid>
        <Row>
          <Col>
            <p className="header-text text-center mt-2 mb-4">
              Weather Dashboard
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <SearchBar></SearchBar>
          </Col>
          <Col></Col>
          <Col>
            <NavBar></NavBar>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
