import React from "react";
import { Pie, Bar } from "react-chartjs-2";
import "./Charts.css";

class Charts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      content: null,
      items: [],
      marketshareData: {
        datasets: [{}],
        labels: []
      },
      tradeVolumeData: {
        datasets: [{}],
        labels: []
      },
      percentChange1HRData: {
        datasets: [{}],
        labels: []
      },
      percentChange24HRData: {
        datasets: [{}],
        labels: []
      },
      percentChange7DAYData: {
        datasets: [{}],
        labels: []
      }
    };
  }

  componentDidMount() {
    var proxyUrl = "https://cors-anywhere.herokuapp.com/",
      targetUrl =
        "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";
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
          var topTenCryptocurrency24HRTradeVolume = [];
          var topTenCryptocurrency24HRPercentChange = [];
          var topTenCryptocurrency1HRPercentChange = [];
          var topTenCryptocurrency7DAYPercentChange = [];

          var topTenCryptocurrencyColorArray = [
            "#fcba03",
            "#03b5fc",
            "#4d788a",
            "#33FF4F",
            "#FFA233",
            "#33A2FF",
            "#FFF633",
            "#858585",
            "#F0D661",
            "#4879D5"
          ];

          // This for loop initializes the cryptocurrency array to the top 10 crypto names
          // Also grab the latest respective prices for each cryptocurrency
          // Grabs each currency's:
          // Crypto Name
          // Cryptocurrency Marketcap
          // 24HR Trade volume
          // 1HR Percent change
          // 24HR Percent change
          // 7day Percent change
          for (i = 0; i < 10; i++) {
            topTenCryptocurrencyArray.push(this.state.items[i].name);
            topTenCryptocurrencyMarketcapArray.push(
              this.state.items[i].quote.USD.market_cap
            );
            topTenCryptocurrency24HRTradeVolume.push(
              this.state.items[i].quote.USD.volume_24h
            );
            topTenCryptocurrency1HRPercentChange.push(
              this.state.items[i].quote.USD.percent_change_1h
            );
            topTenCryptocurrency24HRPercentChange.push(
              this.state.items[i].quote.USD.percent_change_24h
            );
            topTenCryptocurrency7DAYPercentChange.push(
              this.state.items[i].quote.USD.percent_change_7d
            );
          }

          // DEBUG: Testing if we are fetching the correct data and storing them
          //console.log(result);
          console.log(result.data);
          console.log(topTenCryptocurrencyArray);
          console.log(topTenCryptocurrencyMarketcapArray);
          console.log(topTenCryptocurrency24HRTradeVolume);
          console.log(topTenCryptocurrency1HRPercentChange);
          console.log(topTenCryptocurrency24HRPercentChange);
          console.log(topTenCryptocurrency7DAYPercentChange);
          console.log("before the setState" + this.state.simpleData);

          // Initialize the local component state variables with the data gathered
          this.setState({
            marketshareData: {
              labels: topTenCryptocurrencyArray,
              datasets: [
                {
                  data: topTenCryptocurrencyMarketcapArray,
                  backgroundColor: topTenCryptocurrencyColorArray
                }
              ]
            },

            tradeVolumeData: {
              labels: topTenCryptocurrencyArray,
              datasets: [
                {
                  data: topTenCryptocurrency24HRTradeVolume,
                  backgroundColor: topTenCryptocurrencyColorArray
                }
              ]
            },

            percentChange1HRData: {
              labels: topTenCryptocurrencyArray,
              datasets: [
                {
                  data: topTenCryptocurrency1HRPercentChange,
                  backgroundColor: topTenCryptocurrencyColorArray
                }
              ]
            },

            percentChange24HRData: {
              labels: topTenCryptocurrencyArray,
              datasets: [
                {
                  data: topTenCryptocurrency24HRPercentChange,
                  backgroundColor: topTenCryptocurrencyColorArray
                }
              ]
            },

            percentChange7DAYData: {
              labels: topTenCryptocurrencyArray,
              datasets: [
                {
                  data: topTenCryptocurrency7DAYPercentChange,
                  backgroundColor: topTenCryptocurrencyColorArray
                }
              ]
            }
          });

          // Replace with the new data, double check it's what we want it to be.
          console.log(this.state.marketshareData);
          console.log("Trade Volume data and other data below: ");
          console.log(this.state.tradeVolumeData);
          console.log(this.state.percentChange1HRData);
          console.log(this.state.percentChange24HRData);
          console.log(this.state.percentChange7DAYData);
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
    // TODO: Make a button where it can display a minimized "grid-like form" of the graphs/charts
    // and a "expanded enlarged view" where the graphs can be more closely examined.
    return (
      <div className="ChartsPage">
        <h1>Cryptocurrency Charts</h1>
        <p>
          Charts display Top 10 Cryptocurrency's Marketshare, Trade volume, and
          Percent Change of Price.
        </p>

        <div className="MarketSharePieChart">
          <h2>Pie Chart of top 10 Cryptocurrency Marketshare in USD ( $ )</h2>
          <Pie id="top10MarketcapPieChart" data={this.state.marketshareData} />
        </div>

        <div className="TradeVolume24HRBarGraph">
          <h2>
            Bar Graph of top 10 Cryptocurrency 24 Hour Trade Volume in USD ( $ )
          </h2>
          <Bar
            id="top10TradeVolume24HRBarGraph"
            data={this.state.tradeVolumeData}
          >
            hi
          </Bar>
        </div>

        <div className="PercentChange1HRLineGraph">
          <h2>
            Line Graph of top 10 Cryptocurrency 1 Hour Price % Change in USD ( $
            )
          </h2>
          <Bar
            id="top10PercentChange1HRBarGraph"
            data={this.state.percentChange1HRData}
          ></Bar>
        </div>

        <div className="PercentChange24HRLineGraph">
          <h2>
            Line Graph of top 10 Cryptocurrency 24 Hour Price % Change in USD (
            $ )
          </h2>
          <Bar
            id="top10PercentChange24HRBarGraph"
            data={this.state.percentChange24HRData}
          ></Bar>
        </div>

        <div className="PercentChange7DAYBarGraph">
          <h2>
            Bar Graph of top 10 Cryptocurrency 7 Day Price % Change in USD ( $ )
          </h2>
          <Bar
            id="top10PercentChange7DAYBarGraph"
            data={this.state.percentChange7DAYData}
          ></Bar>
        </div>
      </div>
    );
  }
}

export default Charts;
