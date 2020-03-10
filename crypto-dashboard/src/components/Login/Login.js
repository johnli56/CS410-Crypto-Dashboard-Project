import React, {useState, useEffect} from "react";
import "./Login.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from 'react-bootstrap'


// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");
// This configuration info was pulled from the google firebase console 
// under project general settings.
// Security issue API key is exposed, for testing purposes I will leave it here
// In the future I would not push the file containing the keys to Github.
var firebaseConfig = {
  
    apiKey: "AIzaSyBGBGgnvAEW9F9nQfT8Q9T9S7Watw-HcuM",
    authDomain: "cs410pcryptodashboard.firebaseapp.com",
    databaseURL: "https://cs410pcryptodashboard.firebaseio.com",
    projectId: "cs410pcryptodashboard",
    storageBucket: "cs410pcryptodashboard.appspot.com",
    messagingSenderId: "228697534181",
    appId: "1:228697534181:web:ee44060e3ba6f852076e0c",
    measurementId: "G-P6EVXY71G6"
  
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


//Simple login UI where the user can login to see their saved crypto assets
//These assets will be entered manually
class Login extends React.Component {

    constructor() {
      super();
      this.state= {
      isLoading: false,
    
      };
    }
  
    // Time out the button for 1 second to display Loading instead of 
    // Signup on the button state
    simulateSignupRequest() {
      return new Promise(resolve => setTimeout(resolve, 1000));
    }
//           alert('Verification Email Has been Sent')

    // When the loading button is detected to be true( onClick in this case ) then
    // we will wait for the simiulateSignUpRequest promise to return then toggle it back
    // to false, which will end up showing the "Sign Up" text on the button
    LoadingButton() {

      useEffect(() => {
      if (this.state.isLoading) {
        this.simulateSignupRequest().then(() => {
          this.setState({isLoading: false});
          });
        }
      });
    }
    // on Button Click, we set the state of isLoading to true, triggering the above
    // LoadingButton() function.
    handleSignUp = () => {
      this.setState({isLoading: true});
    }

    render() {
    return (
      <div className="Login">

        <div className="Header">
          <h2>Email &amp; Password Authentication using Firebase</h2>
        </div>

        <div className="signIn">
  
          {/* Right here I use a react-bootstrap Email and Password Form Group because it looks great
            The email and password data is collected by the form and then submitted to the google firebase for authentication
            
            Note: Each email is unique and cannot be signed up twice. This is for security issues with different types of
            authentication in the future.

            Next Step: Add Google Authentication
          */}
          <Form className="signInForm">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
               Email info will not be shared with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Subscribe to hear about the latest crypto news!" />
            </Form.Group>
            <Button id="signInButton" variant="primary" type="submit" active>
              Sign In
            </Button>
            <Button id="signUpButton" onClick={this.handleSignUp} variant="primary" type="submit" active>
              {!this.state.isLoading ? 'Sign Up' : 'Loading...'}
            </Button>
            <Form.Text id="uniqueEmailText" className="text-muted">
               Note: Each email is considered unique and cannot be signed up twice.
            </Form.Text>
          </Form>
        </div>


      </div>
    )
  }
}

export default Login;
