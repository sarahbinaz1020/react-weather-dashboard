import React from "react";
import "./App.css";
// import API from "./utils/API";
import { Container } from "react-bootstrap";
import { HashRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import Wrapper from "./components/Wrapper/Wrapper";
import Dashboard from "./pages/Dashboard/Dashboard";
import Daily from "./pages/Daily/Daily";
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Container className="App-header" fluid>
          <Wrapper>
            <Route exact path="/" component={Dashboard} />
            <Route path="/Daily" component={Daily} />
          </Wrapper>
        </Container>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
