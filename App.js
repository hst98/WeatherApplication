import React, { Component } from 'react'
import './App.css';
import Weather from './components/Weather';
import "bootstrap/dist/css/bootstrap.min.css";
import "open-weather-icons/dist/css/open-weather-icons.css"

class App extends Component {

  render() {
    return (
      <div className="App">
        <Weather />
        
      </div>
    );
  }
}

export default App;
