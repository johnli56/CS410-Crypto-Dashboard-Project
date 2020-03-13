import React from "react";

import {Pie} from 'react-chartjs-2';




const data = {
	labels: [
		'Red',
		'Blue',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};




class Marketcap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>Marketcap Page</h1>
        <p>Marketcap page body content</p>

        <div>
        <h2>Pie Example</h2>
        <Pie data={data} />
      </div>





      </div>
    );
  }
}

export default Marketcap;
 