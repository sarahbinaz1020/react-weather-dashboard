import React from "react";
import NavBar from "../Navbar/NavBar";
import SearchBar from "../SearchBar/SearchBar"
import { Row, Col } from "react-bootstrap";
import "./header.css";

function Header() {
  return (
    <div>
      <Row>
        <Col>Weather Dashboard</Col>
      </Row>
      <Row>
        <Col><SearchBar></SearchBar></Col>
        <Col>
          <NavBar></NavBar>
        </Col>
      </Row>
    </div>
  );
}

export default Header;
