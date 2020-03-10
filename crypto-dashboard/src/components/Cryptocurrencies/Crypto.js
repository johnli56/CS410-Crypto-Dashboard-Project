import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Crypto.css";

class Crypto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          
        };
      }

    FindMatchingLogo() {

    }
    render() {
        return (
          <div className="CryptoCard">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>({this.props.crypto.symbol})</Card.Title>
                <Card.Title>{this.props.crypto.name}</Card.Title>
                <Card.Text>
                  Today's Price: 
                  Cost/Unit ${this.props.crypto.quote.USD.price}
                </Card.Text>
                <Card.Link href={"https://coinmarketcap.com/"}>CoinMarketCap Link</Card.Link>
                <Button variant="primary">Add {this.props.crypto.symbol} to List</Button>
                
              </Card.Body>
            </Card>
          </div>
        );
    }
}

/*<p>
              {this.props.crypto.name} ({this.props.crypto.symbol})
            </p>
            <p>${this.props.crypto.quote.USD.price}</p>
            <p>{this.props.crypto.price}</p>
            */


export default Crypto;