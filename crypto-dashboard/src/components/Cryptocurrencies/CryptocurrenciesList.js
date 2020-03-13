import React from "react";
import { NavLink } from "react-router-dom";
import { useAsync } from "react-async";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Crypto from "./Crypto.js"

class CryptocurrenciesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      content: null
    };
  }

  // When the component is loaded in, we want to grab the latest data from CoinMarketCap API
  // We will then store this data and pass it in to separate "Crypto Card Components"

  componentDidMount() {
    var proxyUrl = "https://cors-anywhere.herokuapp.com/",
      targetUrl = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";
    //"https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/historical";
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
            items: result.data //store the results in the items array which we will process later
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
  }

  // There are three potential states here:
  // 1. If there is an error getting the CoinMarketCap Data, we want to display the error
  // 2. Else if the list is not loaded yet, show the user it is "Loading..."
  // 3. Normal Case: Will show all 100 cards of the top 100 cryptos from CoinMarketCap Latest API Call
  // Each cryptocurrency will display its current price against yesterday's price / last week's price

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      // When there is an error we want to display to user to let them know what happened.
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) { 
      // Show a loading message while we retrieve the data.
      return <div>Loading Cryptocurrencies List... Please wait a moment.</div>;
    } else {
      return (
        <Container fluid="md">
          <Row>
            {items.map(crypto => ( // Pass in each cryptocurrency to the Crypto component for 
            // rendering in nice looking cards. Use react-bootstrap grid to look prettier.
              <Crypto crypto={crypto} />
            ))}
          </Row>
          {/*// TODO: Need to insert each piece of data received into a separate card component
            (
              <li key={item.name}>
                {item.name}: Price: {item.quote.USD.price}
            </li>*/}
        </Container>
      );
    }
  }
}

export default CryptocurrenciesList;
