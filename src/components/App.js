import React from 'react';
import '../asset/App.css';
import WeatherCard from './WeatherCard.js';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
      <WeatherCard></WeatherCard>
    </div>
  );
}

export default App;
