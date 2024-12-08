import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

const WeatherApp = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [delayTimer, setDelayTimer] = useState(null);

  const API_KEY = '03b5eb016fbff7d6e19e5f381ce45777'; // Replace with your actual API key

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    clearTimeout(delayTimer);
    setDelayTimer(
      setTimeout(() => {
        fetchWeatherData(e.target.value);
      }, 2000)
    );
  };

  const fetchWeatherData = async (location) => {
    try {
      setLoading(true);
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`);
      setWeatherData(response.data);
      setError(null);
      setLoading(false);
    } catch (error) {
      setError('Error fetching weather data. Please try again.');
      setWeatherData(null);
      setLoading(false);
    }
  };

  return (
    <div className='container banner'>
      <div className='inp mt-3 w-100 d-flex justify-content-center  '>
        <input
          type="text"
          value={location}
          onChange={handleLocationChange}
          placeholder="Enter location"
          className='text-center border fs-4 rounded-5 inpf'
        />
      </div>
      {loading && (
        <div className='lod w-100 d-flex justify-content-center fs-3 '>
          <div>Loading...</div>
        </div>
      )}
      {weatherData && (
        <div>
          <div className='d-flex justify-content-around main'>
            <div>
              <h2 className='loc'>{weatherData.name}</h2>
              <p className='temp'>{weatherData.main.temp}</p>
            </div>
            <div>
              <p>{weatherData.weather[0].description}</p>
            </div>
          </div>
          <div className='d-flex justify-content-around footer'>
            <p className='fp'>Feels Like: {weatherData.main.feels_like}</p>
            <p className='fp'>Humidity: {weatherData.main.humidity}</p>
            <p className='fp'>Wind Speed: {weatherData.wind.speed} </p>
          </div>
        </div>
      )}
      {error && <div>{error}</div>}
    </div>
  );
};

const App = () => {
  return <WeatherApp />;
};

export default App;