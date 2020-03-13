import React from "react";

import { NavLink } from "react-router-dom";

import './News.css'; // Tell webpack that Button.js uses these styles


const News = () => {
  return (
    <div>
      <h1>News page</h1>
      <p><NavLink to="/">Home</NavLink></p>
      <p><NavLink to="/about">About</NavLink></p>
      <p><NavLink to="/contact">Contact</NavLink></p>


      <body>

<div class="grid-container">
  <div class="grid-item">How to Survive The Crypto Bloodbath: Market Expert Take</div>
  <div class="grid-item">Voatz ‘Blockchain’ App Used in US Elections Has Numerous Security Issues, Says Report</div>
  <div class="grid-item">Bitcoin Bottomed in ‘Final Capitulation’ but $5K Dip Likely: Tone Vays</div>  
  <div class="grid-item">Blockchain Africa Conference Showcases How Tech Can Change the Continent</div>
  <div class="grid-item">2 Months Ago, Andreas Antonopoulos Explained Why Bitcoin Would Crash</div>
  <div class="grid-item">6</div>  
  <div class="grid-item">7</div>
  <div class="grid-item">8</div>
  <div class="grid-item">9</div>  
  <div class="grid-item">9</div>  
</div>


</body>


      
    </div>
  );
};

export default News;
