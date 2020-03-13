import React from "react";
import Chart from "chart.js";


class Marketcap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      content: null,
      isLoaded: false
    };
  }

  componentDidMount() {
    var proxyUrl = "https://cors-anywhere.herokuapp.com/",
      targetUrl = ""//"https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";
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
          console.log(result);
        },
        // Handle errors here so that we do not swallow exceptions from component bug
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
      
      var ctx = document.getElementById("myChart").getContext("2d");
      var myChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [
            {
              label: "# of Votes",
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)"
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)"
              ],
              borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }
      });
  }

  render() {
    return (
      <div>
        <h1>Marketcap Page</h1>
        <p>Marketcap page body content</p>
        <canvas id="myChart" width="400" height="400"></canvas>
      </div>
    );
  }
}

export default Marketcap;
 