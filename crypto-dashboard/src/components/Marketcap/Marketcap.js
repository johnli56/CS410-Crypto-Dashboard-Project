import React from "react";
import {Pie} from 'react-chartjs-2';






class Marketcap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      content: null,
      items: [],
      simpleData: {
        datasets: [{

        }],
        labels: []
      },
      pieChartData: {
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
      },

    }
  }

  

  componentDidMount() {
    
    var proxyUrl = "https://cors-anywhere.herokuapp.com/",
      targetUrl = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";
      //""; 
    //"https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";
    fetch(proxyUrl + targetUrl, {
      headers: {
        "X-CMC_PRO_API_KEY": "373c7ff4-d424-44d1-8160-b334c2d678d9"
      }
    })
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            content: result,
            items: result.data
          });
          
          var i;
          var topTenCryptocurrencyArray = [];
          var topTenCryptocurrencyMarketcapArray = [];
          
          // This for loop initializes the cryptocurrency array to the top 10 crypto names
          // Also grab the latest respective prices for each cryptocurrency
          for (i = 0; i < 10; i++)
          {
            topTenCryptocurrencyArray.push(this.state.items[i].name);
            topTenCryptocurrencyMarketcapArray.push(this.state.items[i].quote.USD.market_cap);
            console.log(this.state.items[i].quote.market_cap);
          }

          // DEBUG: Testing results
          //console.log(result);
          //console.log(result.data);
          console.log(topTenCryptocurrencyArray);
          console.log(topTenCryptocurrencyMarketcapArray);
          console.log("before the setState" + this.state.simpleData);

          this.setState({
            simpleData:{
              labels: topTenCryptocurrencyArray,
              datasets: [{
                
                data: topTenCryptocurrencyMarketcapArray,
                backgroundColor: '#FF6384' }, 
                
              ]
            }
          })
          
          // Replace with the new data, double check it's what we want it to be.
          console.log(this.state.simpleData);
          
        },
        // Handle errors here so that we do not swallow exceptions from component bug
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    return (
      <div>
        <h1>Marketcap Page</h1>
        <p>Marketcap page body content</p>

        <div>
        <h2>Pie Example</h2>
        <Pie id="top10MarketcapPieChart" data={this.state.simpleData} />
      </div>





      </div>
    );
  }
}

export default Marketcap;
 