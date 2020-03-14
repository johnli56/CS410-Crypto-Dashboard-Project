import React from "react";
import { NavLink } from "react-router-dom";

import './News.css'; 
import newspic1 from './newspic1.png'; 
import newspic2 from './newspic2.png';
import newspic3 from './newspic3.png';  
import newspic4 from './newspic4.png';  
import newspic5 from './newspic5.png';  
import newspic6 from './newspic6.png';  



const News = () => {
  return (
    
	<div class="grid-container">
		<div class="grid-item">	<a href="https://cointelegraph.com/news/us-woman-funding-isis-with-bitcoin-gets-13-year-jail-sentence">US Woman Funding ISIS With Bitcoin Gets 13-Year Jail Sentence </a><img class="newspic" src={newspic1}></img>
  	    </div>
		<div class="grid-item"> <a href="https://cointelegraph.com/news/bill-gates-departs-microsoft-board-after-pledging-14m-to-african-blockchain">Bill Gates Departs Microsoft Board After Pledging $1.4M to African Blockchain </a><img class="newspic" src={newspic2}></img>
		</div>
		<div class="grid-item"> <a href="https://cointelegraph.com/news/bitcoin-mempool-briefly-drops-to-zero-on-blockchaincom">Bitcoin Mempool Briefly Drops to Zero on Blockchain.​com </a><img class="newspic" src={newspic3}></img>
		</div>
		<div class="grid-item"> <a href="https://cointelegraph.com/news/mike-novogratz-says-that-investors-have-lost-confidence-in-bitcoin">Mike Novogratz Says That Investors Have Lost Confidence in Bitcoin </a><img class="newspic" src={newspic4}></img>
		</div>
		<div class="grid-item"> <a href="https://cointelegraph.com/news/as-ether-price-drop-pressures-defi-developers-remain-confident-in-its-success">As ETH Prices Drop, DeFi Developers Remain Confident in the Ecosystem </a><img class="newspic" src={newspic5}></img>
		</div>
		<div class="grid-item"> <a href="https://cointelegraph.com/news/bitcoin-price-correlates-with-traditional-assets-but-not-entirely">Bitcoin Price Correlates With Traditional Assets, but Not Entirely </a><img class="newspic" src={newspic6}></img>
		</div>
	</div>
  );
};

export default News;
