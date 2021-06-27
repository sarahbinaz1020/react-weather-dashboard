import React from "react";
import "./App.css";
// import API from "./utils/API";
import { Container, Row, Col } from "react-bootstrap";
import { HashRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import Wrapper from "./components/Wrapper/Wrapper";
import Dashboard from "./pages/Dashboard/Dashboard";
import Daily from "./pages/Daily/Daily";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Container fluid>
          <Row>
            <Col>1 of 1</Col>
          </Row>
          <Wrapper>
            <Route exact path="/" component={Dashboard} />
            <Route path="/Daily" component={Daily} />
          </Wrapper>
        </Container>
      </Router>
    </>
  );
}

export default App;
