import React from "react";
import "./App.css";
// import API from "./utils/API";
import Header from "./components/Header/Header";
import Dashboard from "./pages/Dashboard/Dashboard";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <Dashboard></Dashboard>
      <Footer />
    </>
  );
}

export default App;
