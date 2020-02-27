import React from "react";
import ReactDOM from "react-dom";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { SocialIcon } from "react-social-icons";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">CryptBoard</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link className="navbarLinks" href="#home">
            Home
          </Nav.Link>
          <Nav.Link className="navbarLinks" href="#features">
            News
          </Nav.Link>
          <Nav.Link className="navbarLinks" href="#pricing">
            Pricing
          </Nav.Link>
          <Nav.Link className="navbarLinks" href="#contact">
            Contact
          </Nav.Link>
          <Nav.Link className="navbarLinks" href="#about">
            About us
          </Nav.Link>
          <Navbar.Brand href="#home" id="facebookLogo">
            <SocialIcon network="facebook"></SocialIcon>
          </Navbar.Brand>
          <Navbar.Brand href="#home" id="instagramLogo">
            <SocialIcon network="instagram"></SocialIcon>
          </Navbar.Brand>
          <Navbar.Brand href="#home" id="twitterLogo">
            <SocialIcon network="twitter"></SocialIcon>
          </Navbar.Brand>
          <Navbar.Brand href="#home" id="linkedinLogo">
            <SocialIcon network="linkedin"></SocialIcon>
          </Navbar.Brand>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Find Crypto</Button>
        </Form>
      </Navbar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Cryptocurrency Dashboard</p>
        <p>
          Edit <code>src/App.js</code> and save to reload
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
