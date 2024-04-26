import React, { useContext, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { WeatherActions } from './actions/weather-actions';
import WeatherApp from './components/weather-app/WeatherApp';
import CurrentforecastContext from './context/CurrentForecastContext/CurrentForecastContext';

function App() {

  const weatherActions: WeatherActions = new WeatherActions();

  const currentforecastContext = useContext(CurrentforecastContext);

  const [error, setError] = useState('');

  useEffect(() => {

    if(sessionStorage.getItem('cityForecast')){
      currentforecastContext.updateLoading(true);
      currentforecastContext.updateCurrentForecast(JSON.parse(sessionStorage.getItem('cityForecast')!));
      currentforecastContext.updateLoading(false);
    }
    else{
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
      } else {
        setError("Geolocation is not supported by this browser.");
      }
    }

  }, []);

  const showPosition = async (position: any) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    currentforecastContext.updateLoading(true);
    const weatherData = await weatherActions.getWeatherDataByCordinates(19.090, 72.871);
    currentforecastContext.updateCurrentForecast(weatherData);
    currentforecastContext.updateLoading(false);
  };

  const showError = (error: any) => {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        setError("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        setError("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        setError("The request to get user location timed out.");
        break;
      default:
        setError("An unknown error occurred.");
        break;
    }
  };


  useEffect(()=>{
    const fetchWeatherData = () => {
      // weatherActions.getWeatherDataByCity("paris")
    }
    fetchWeatherData()
    // weatherActions.getAllCity("par")
  }, [])

  return (
    <WeatherApp />
  );
}

export default App;
