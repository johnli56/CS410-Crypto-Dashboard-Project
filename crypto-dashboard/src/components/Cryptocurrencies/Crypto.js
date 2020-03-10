import React, {Button, Component} from 'react';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Crypto.css";

class Crypto extends Component {
    render() {
        return (
          <div className="CryptoCard">
            
            <p>
              {this.props.crypto.name} ({this.props.crypto.symbol})
            </p>
            <p>${this.props.crypto.quote.USD.price}</p>
            <p>{this.props.crypto.price}</p>
            
          </div>
        );
    }
}

export default Crypto;