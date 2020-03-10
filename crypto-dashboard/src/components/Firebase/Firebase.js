import app from 'firebase/app';
import 'firebase/auth';

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

class Firebase {

  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
  }

  // *** Firebase Auth API ***
  CreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  SignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  SignOut = () => this.auth.signOut();

  PasswordReset = email => this.auth.sendPasswordResetEmail(email);

  PasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}

export default Firebase;