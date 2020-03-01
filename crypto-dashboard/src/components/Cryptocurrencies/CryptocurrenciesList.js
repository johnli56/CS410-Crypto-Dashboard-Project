import React from "react";
import { NavLink } from "react-router-dom";
import { useAsync } from "react-async";

class CryptocurrenciesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://swapi.co/api/planets")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result.results
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

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading Cryptocurrencies List...</div>;
    } else {
      return (
        <ul>
          {items.map((
            item //error because item is not an array, but in string form.
          ) => (
            <li key={item.name}>
              name: {item.name} height: {item.name}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default CryptocurrenciesList;
