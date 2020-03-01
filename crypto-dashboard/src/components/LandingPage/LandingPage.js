import React, { Component } from "react";
import "./LandingPage.css";
import bitcoinLogo from "./../../BTC_logo.svg";
import TodoList from "./../Moon/Moon.js";
import CryptocurrenciesList from "../Cryptocurrencies/CryptocurrenciesList.js";

//TODO: insert moon logo

const LandingPage = () => {
  return (
    <div>
      <p>Insert Scrolling bar of Cryptocurrencies here.</p>
      <h2>It's going to the moon</h2>
      <TodoList></TodoList>
      <CryptocurrenciesList></CryptocurrenciesList>

      <a
        className="Home-link"
        href="https://github.com/johnli56/CS410-Crypto-Dashboard-Project"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github Link
      </a>
      <header className="App-header">
        <img
          src={bitcoinLogo}
          className="App-logo"
          width="50%"
          height="50%"
          alt="logo"
          id="BTCLogo"
        />
        <p>Cryptocurrency Dashboard</p>
        <p>By: John Li</p>
      </header>
    </div>
  );
};

export default LandingPage;
