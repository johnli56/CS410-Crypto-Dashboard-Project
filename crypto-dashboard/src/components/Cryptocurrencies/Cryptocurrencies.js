import React from "react";

import { NavLink } from "react-router-dom";

const Cryptocurrencies = () => {
  return (
    <div>
      <NavLink to="/">Bitcoin</NavLink>
      <NavLink to="/">Ethereum</NavLink>
      <NavLink to="/">Ripple</NavLink>
    </div>
  );
};

export default Cryptocurrencies;
