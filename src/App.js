import React, { Component } from 'react';
import customLogo from './carry.png';
import './App.css';
import LoginSignup from './Components/LoginSignup/LoginSignup';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={customLogo} className="App-logo" alt="logo" />
          <h2 className="Welcome">Welcome to Carry!</h2>
        </div>
        <div className="Login-Signup">
          <LoginSignup/>
        </div>
      </div>
    );
  }
}

export default App;
