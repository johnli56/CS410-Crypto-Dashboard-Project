import React from "react";
import { NavLink } from "react-router-dom";

import './News.css'; 
import newspic1 from './newspic1.png'; 
import newspic2 from './newspic2.png';
import newspic3 from './newspic3.png';  




const News = () => {
  return (
    
	<div class="grid-container">
		<div class="grid-item">	<a href="https://cointelegraph.com/news/us-woman-funding-isis-with-bitcoin-gets-13-year-jail-sentence">US Woman Funding ISIS With Bitcoin Gets 13-Year Jail Sentence </a><img class="newspic" src={newspic1}></img>
    </div>
		<div class="grid-item"> <a href="https://cointelegraph.com/news/bill-gates-departs-microsoft-board-after-pledging-14m-to-african-blockchain">Bill Gates Departs Microsoft Board After Pledging $1.4M to African Blockchain </a><img class="newspic" src={newspic2}></img>
		</div>
		<div class="grid-item">
		Crypto Prepped Before Coronavirus Went Global <img class="newspic" src={newspic3}></img>
		</div>
		<div class="grid-item">
			Blockchain Africa Conference Showcases How Tech Can Change the Continent <img class="newspic" src={newspic1}></img>
		</div>
		<div class="grid-item">
			2 Months Ago, Andreas Antonopoulos Explained Why Bitcoin Would  <img class="newspic" src={newspic1}></img>
		</div>
		<div class="grid-item">
      2 Months Ago, Andreas Antonopoulos Explained Why Bitcoin Would Crash <img class="newspic" src={newspic1}></img>
		</div>
	</div>
   
  );
};

export default News;
