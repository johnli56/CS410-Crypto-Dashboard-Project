import React, {useState, useEffect} from "react";
import "./Login.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from 'react-bootstrap';
import { Firebase } from "../Firebase/Firebase.js";


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
const firebaseConfig = {
  
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

    constructor(props) {
      super(props);
      this.state= {
      isLoading: false,
      authUser: null,
      email: null,
      password: null,
      error: null,
      };
    }


    componentDidMount() {
    
      // Listening for auth state changes.
      // [START authstatelistener]
      firebase.auth().onAuthStateChanged(function(user) {
        // [START_EXCLUDE silent]
        document.getElementById('quickstart-verify-email').disabled = true;
        // [END_EXCLUDE]
        if (user) {
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          // [START_EXCLUDE]
          document.getElementById('quickstart-sign-in-status').textContent = 'Signed in';
          document.getElementById('quickstart-sign-in').textContent = 'Sign out';
          document.getElementById('quickstart-account-details').textContent = JSON.stringify(user, null, '  ');
          if (!emailVerified) {
            document.getElementById('quickstart-verify-email').disabled = false;
          }
          // [END_EXCLUDE]
        } else {
          // User is signed out.
          // [START_EXCLUDE]
          document.getElementById('quickstart-sign-in-status').textContent = 'Signed out';
          document.getElementById('quickstart-sign-in').textContent = 'Sign in';
          document.getElementById('quickstart-account-details').textContent = 'null';
          // [END_EXCLUDE]
        }
        // [START_EXCLUDE silent]
        document.getElementById('quickstart-sign-in').disabled = false;
        // [END_EXCLUDE]
      });
      // [END authstatelistener]
    }


    // Time out the button for 1 second to display Loading instead of 
    // Signup on the button state
    simulateSignupRequest() {
      return new Promise(resolve => setTimeout(resolve, 3000));
    }

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
    /**
     * Handles the sign in button press by checking with Firebase the entered
     * credentials. Also does basic error checking on email and password inputs.
     */
     handleSignIn() {


      if (firebase.auth().currentUser) {
        // [START signout]
        firebase.auth().signOut();
        // [END signout]
      } else {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        console.log("Email: " + email);
        console.log("Password: " + password);
        this.props.firebase
          .signInWithEmailAndPassword(email, password)
          .then(() => {
            this.setState({email: email, password: password });
          })
          .catch(error => {
            this.setState({ error });
          });

        if (email.length < 5) {
          alert('Please enter a valid email address.');
          return;
        }
        if (password.length < 8) {
          alert('Please enter a valid password.');
          return;
        }
        // Sign in with email and password
        // [START authwithemail]
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
          document.getElementById('quickstart-sign-in').disabled = false;
          // [END_EXCLUDE]
        });
        // [END authwithemail]
      }
      document.getElementById('quickstart-sign-in').disabled = true;
    }

    /**
     * Sends an email verification to the user. Will use this later on to 
     */
    sendEmailVerification() {
      // [START sendemailverification]
      firebase.auth().currentUser.sendEmailVerification().then(function() {
        // Email Verification sent!
        // [START_EXCLUDE]
        alert('Email Verification Sent!');
        // [END_EXCLUDE]
      });
      // [END sendemailverification]
    }

    // on Button Click, we set the state of isLoading to true, triggering the above
    // LoadingButton() function.
    handleSignUp = () => {
       this.setState({isLoading: true});
      
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        console.log("Email: " + email);
        console.log("Password: " + password);

        // Basic input checking before we try to signUp
        // Email and Passwords should have a minimum length of at least 5 and 8 respectively
        if (email.length < 5) {
          alert('Please enter a valid email address.');
          return;
        }
        if (password.length < 8) {
          alert('Please enter a password with more than 8 characters.');
          return;
        }
        // Create user with email and password through firebase
        // Parameters: Email address and Password
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // Start check for weak / easy to guess passwords
          if (errorCode == 'auth/weak-password') {
            alert('The password is too easy to guess, please choose another password.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
          // End check
        });
        alert('If the email exists, a verification email was sent to: ' + email);
        this.setState({isLoading: false});
    }
    

    render() {
      const { email, password, error } = this.state;

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

            TODO: Next step, Add Google Authentication
          */}
          <Form className="signInForm">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control id="email" type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
               Email info will not be shared with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control id="password" type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Subscribe to hear about the latest crypto news!" />
            </Form.Group>
            <Button id="signInButton" onClick={this.handleSignIn} variant="primary" type="submit" active>
              Sign In
            </Button>
            <Button id="signUpButton" onClick={this.handleSignUp} variant="primary" type="submit" active>
              {!this.state.isLoading ? 'Sign Up' : 'Loading...'}
            </Button>
            <Form.Text id="uniqueEmailText" className="text-muted">
               Note: Each email is considered unique and cannot be signed up twice.
            </Form.Text>
          </Form>


          {/* Delete this later after testing authentication
          <!-- Container where we'll display the user details -->*/}
          <div class="quickstart-user-details-container">
          <button disabled class="mdl-button mdl-js-button mdl-button--raised" id="quickstart-sign-in" name="signin">Sign In</button>
          <button class="mdl-button mdl-js-button mdl-button--raised" disabled id="quickstart-verify-email" name="verify-email">Send Email Verification</button>

            Firebase sign-in status: <span id="quickstart-sign-in-status">Unknown</span>
            <div>Firebase auth <code>currentUser</code> object value:</div>
            <pre><code id="quickstart-account-details">null</code></pre>

            {error && <p>Error: {error.message}</p>}
            {email && <p>Email successfully signed in: {email}</p>}
            {password && <p>Password successfully signed in: {password}</p>}

          </div>
        </div>


      </div>
    )
  }
}

export default Login;
