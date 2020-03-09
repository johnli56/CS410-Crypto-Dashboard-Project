import React, { Component } from "react";
import { BrowserRouter, Link, NavLink, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { SocialIcon } from "react-social-icons";
import LandingPage from "./components/LandingPage/LandingPage";
import News from "./components/News/News";
import CryptocurrenciesList from "./components/Cryptocurrencies/CryptocurrenciesList";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">CryptoBoard</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} className="navbarLinks" to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} className="navbarLinks" to="/news">
              News
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              className="navbarLinks"
              to="/cryptocurrencies"
            >
              Cryptocurrencies
            </Nav.Link>
            <Nav.Link as={NavLink} className="navbarLinks" to="/contact">
              Contact
            </Nav.Link>
            <Nav.Link as={NavLink} className="navbarLinks" to="/about">
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
            <Button className="loginButton" variant="outline-info">
              Login
            </Button>
          </Form>
        </Navbar>
        <Route path="/home" component={LandingPage} />
        <Route path="/news" exact component={News} />
        <Route path="/cryptocurrencies" component={CryptocurrenciesList} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
      </div>
    </BrowserRouter>
  );
}

export default App;
