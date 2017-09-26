import React, { Component } from 'react';
import { Player } from 'video-react';
import logo from './logo.svg';
import './App.css';
import "../node_modules/video-react/dist/video-react.css"; // import css

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Player
          className="video-player"
          playsInline
          poster="/assets/poster.png"
          src="http://kimispencer.com/media/video/raxx.mp4"
          />
      </div>
    );
  }
}

export default App;
