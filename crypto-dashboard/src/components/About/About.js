import React from "react";
import "./About.css";

const About = () => {

  function handleEmailClick() {
    
  }

  return (
    <div className="AboutPage">
      <h1>About Us</h1>
      <p className="Author">Created by: John Li and Steven Schulze</p>
      <p id="DashboardDescription">
        {" "}
        A minimalistic Cryptocurrency Dashboard complete with Newsfeed,
        Cryptocurrencies latest price list, and Charts of important
        Cryptocurrency data metrics for the user's needs. Future implementations
        will include:
        <p id="FutureImplementations">
        <ul>
          <li>A searchbar for each individual cryptocurrency</li>
          <li>
            Full login authentication storing your own entered crypto asset data
          </li>
          <li>
            A more Responsive, more Robust UI is always in continuous
            development.
          </li>
        </ul>
        </p>
        Any suggestions for improvements would be appreciated!
        <p id="ContactEmail">
          Please let me know what I can add or improve at: 
          <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=li.johnny34@gmail.com"> Click here </a>
        </p>
      </p>
    </div>
  );
};

export default About;
