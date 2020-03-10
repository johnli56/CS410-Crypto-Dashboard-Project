import React from "react";

import { NavLink } from "react-router-dom";

const News = () => {
  return (
    <div>
      <h1>News page</h1>
      <p><NavLink to="/">Home</NavLink></p>
      <p><NavLink to="/about">About</NavLink></p>
      <p><NavLink to="/contact">Contact</NavLink></p>
    </div>
  );
};

export default News;
