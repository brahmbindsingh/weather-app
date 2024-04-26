import './WeatherApp.css';
import { TCurrentObservationType } from '../../constants/weather-interfaces';
import CurrentObservationCard from '../CurrentObservationCard/CurrentObservationCard';
import CurrentConditions from '../CurrentConditions/CurrentConditions';
import LocationSearch from '../LocationSearch/LocationSearch';
import weatherData from '../../data.json';
import ForecastCard from '../ForecastCard/ForecastCard';
import WindCard from '../WindCard/WindCard';
import { useContext, useEffect, useRef } from 'react';
import CurrentForecastContext from '../../context/CurrentForecastContext/CurrentForecastContext';
import sunnyBg from '../../assets/sunny-day.jpg';
import rainyBg from '../../assets/raining-bg.jpg';
import cloudyBg from '../../assets/cloudy-bg.jpg';

const WeatherApp = () => {

  const forecastContext = useContext(CurrentForecastContext);

  const todayWeatherCards: TCurrentObservationType[] = ["humidity", "pressure", "visibility"]

  const appBackground = useRef<HTMLDivElement | null>(null);

  const getBgAccToWeather = () => {
    switch(forecastContext.currentForecast?.current_observation.condition.text) {
      case "Sunny": 
        return sunnyBg;

      case "Rain":
      case "Showers":
      case "Scattered Showers":
        return rainyBg

      case "Cloudy":
      case "Partly Cloudy":
      case "Mostly Cloudy":
        return cloudyBg;
      
      default: 
        return sunnyBg;
    }
  }

  useEffect(()=>{
    if(!forecastContext.loading){
      appBackground.current!.style.background = `url(${getBgAccToWeather()})`;
      appBackground.current!.style.backgroundSize = `cover`;
    }
  }, [forecastContext.loading])

  return (
    <div className="weather-app-background" ref={appBackground}>
      <div className="weather-app">
        <div className="today-weather">
          <LocationSearch />
          <div className="today-weather-side">
            {
              forecastContext.loading ?
                <p className = "loading-text">Loading...</p> :
                <CurrentConditions temprature={forecastContext.currentForecast!.current_observation.condition.temperature.toString()} weatherType={forecastContext.currentForecast!.current_observation.condition.text} />
            } 
            <div className="today-weather-cards">
              {
                forecastContext.loading ?
                  <p className = "loading-text">Loading...</p> :
                  todayWeatherCards.map((el: TCurrentObservationType)=>{
                    return <CurrentObservationCard key={el} type = {el} value={forecastContext.currentForecast!.current_observation.atmosphere[el].toString()} />
                })
              }
            </div>
          </div>
        </div>
        <div className="weather-forecast">
          <div className="ten-day-forecast">
              <div className="heading">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-5.0 -10.0 110.0 135.0">
                  <path className='svg-color' d="m87.891 13.762h-7.6094v-3.2617c0-3.25-2.6406-5.8906-5.8906-5.8906s-5.8906 2.6406-5.8906 5.8906v3.2617h-37v-3.2617c0-3.25-2.6406-5.8906-5.8906-5.8906s-5.8906 2.6406-5.8906 5.8906v3.2617h-7.6094c-4.8086 0-8.7188 3.9102-8.7188 8.7188v64.199c0 4.8086 3.9102 8.7188 8.7188 8.7188h75.789c4.8086 0 8.7188-3.9102 8.7188-8.7188v-64.199c-0.007813-4.8086-3.918-8.7188-8.7266-8.7188zm-17.121-3.2617c0-2 1.6211-3.6211 3.6211-3.6211s3.6211 1.6211 3.6211 3.6211v8.7891c0 2-1.6211 3.6211-3.6211 3.6211s-3.6211-1.6211-3.6211-3.6211zm-48.781 0c0-2 1.6211-3.6211 3.6211-3.6211s3.6211 1.6211 3.6211 3.6211v8.7891c0 2-1.6211 3.6211-3.6211 3.6211s-3.6211-1.6211-3.6211-3.6211zm-9.8789 5.5312h7.6094v3.2617c0 3.25 2.6406 5.8906 5.8906 5.8906s5.8906-2.6406 5.8906-5.8906v-3.2617h37v3.2617c0 3.25 2.6406 5.8906 5.8906 5.8906s5.8906-2.6406 5.8906-5.8906v-3.2617h7.6094c3.5508 0 6.4414 2.8906 6.4414 6.4414v8.6992h-88.672v-8.6992c0-3.5508 2.8906-6.4414 6.4492-6.4414zm75.781 77.09h-75.781c-3.5508 0-6.4414-2.8906-6.4414-6.4414l0.003906-53.23h88.672v53.23c-0.003906 3.5508-2.8945 6.4414-6.4531 6.4414zm-45.281-18.742h-6.4492c-2.1914 0-3.9805 1.7812-3.9805 3.9805v6.4492c0 2.1914 1.7812 3.9805 3.9805 3.9805h6.4492c2.1914 0 3.9805-1.7891 3.9805-3.9805v-6.4492c-0.011719-2.1875-1.7891-3.9805-3.9805-3.9805zm1.6992 10.43c0 0.94141-0.76172 1.7109-1.7109 1.7109h-6.4492c-0.94141 0-1.7109-0.76172-1.7109-1.7109v-6.4492c0-0.94141 0.76172-1.7109 1.7109-1.7109h6.4492c0.94141 0 1.7109 0.76172 1.7109 1.7109zm19.531-10.43h-6.4492c-2.1914 0-3.9805 1.7812-3.9805 3.9805v6.4492c0 2.1914 1.7812 3.9805 3.9805 3.9805h6.4492c2.1914 0 3.9805-1.7891 3.9805-3.9805v-6.4492c0-2.1875-1.7812-3.9805-3.9805-3.9805zm1.7109 10.43c0 0.94141-0.76172 1.7109-1.7109 1.7109h-6.4492c-0.94141 0-1.7109-0.76172-1.7109-1.7109v-6.4492c0-0.94141 0.76172-1.7109 1.7109-1.7109h6.4492c0.94141 0 1.7109 0.76172 1.7109 1.7109zm19.527-10.43h-6.4492c-2.1914 0-3.9805 1.7812-3.9805 3.9805v6.4492c0 2.1914 1.7812 3.9805 3.9805 3.9805h6.4492c2.1914 0 3.9805-1.7891 3.9805-3.9805v-6.4492c0-2.1875-1.7891-3.9805-3.9805-3.9805zm1.7109 10.43c0 0.94141-0.76172 1.7109-1.7109 1.7109h-6.4492c-0.94141 0-1.7109-0.76172-1.7109-1.7109v-6.4492c0-0.94141 0.76172-1.7109 1.7109-1.7109h6.4492c0.94141 0 1.7109 0.76172 1.7109 1.7109zm-65.418-28.73h-6.4492c-2.1914 0-3.9805 1.7812-3.9805 3.9805v6.4492c0 2.1914 1.7812 3.9805 3.9805 3.9805h6.4492c2.1914 0 3.9805-1.7812 3.9805-3.9805v-6.4492c0-2.1992-1.793-3.9805-3.9805-3.9805zm1.6992 10.434c0 0.94141-0.76172 1.7109-1.7109 1.7109h-6.4492c-0.94141 0-1.7109-0.76172-1.7109-1.7109v-6.4492c0-0.94141 0.76172-1.7109 1.7109-1.7109h6.4492c0.94141 0 1.7109 0.76172 1.7109 1.7109zm19.539-10.434h-6.4492c-2.1914 0-3.9805 1.7812-3.9805 3.9805v6.4492c0 2.1914 1.7812 3.9805 3.9805 3.9805h6.4492c2.1914 0 3.9805-1.7812 3.9805-3.9805v-6.4492c-0.011719-2.1992-1.7891-3.9805-3.9805-3.9805zm1.6992 10.434c0 0.94141-0.76172 1.7109-1.7109 1.7109h-6.4492c-0.94141 0-1.7109-0.76172-1.7109-1.7109v-6.4492c0-0.94141 0.76172-1.7109 1.7109-1.7109h6.4492c0.94141 0 1.7109 0.76172 1.7109 1.7109zm-1.6992-28.73h-6.4492c-2.1914 0-3.9805 1.7812-3.9805 3.9805v6.4492c0 2.1914 1.7812 3.9805 3.9805 3.9805h6.4492c2.1914 0 3.9805-1.7812 3.9805-3.9805v-6.4492c-0.011719-2.2031-1.7891-3.9805-3.9805-3.9805zm1.6992 10.418c0 0.94141-0.76172 1.7109-1.7109 1.7109h-6.4492c-0.94141 0-1.7109-0.76172-1.7109-1.7109v-6.4492c0-0.94141 0.76172-1.7109 1.7109-1.7109h6.4492c0.94141 0 1.7109 0.76172 1.7109 1.7109zm13.082 3.9805h6.4492c2.1914 0 3.9805-1.7812 3.9805-3.9805v-6.4492c0-2.1914-1.7812-3.9805-3.9805-3.9805h-6.4492c-2.1914 0-3.9805 1.7812-3.9805 3.9805v6.4492c0.011719 2.1992 1.7891 3.9805 3.9805 3.9805zm-1.6992-10.43c0-0.94141 0.76172-1.7109 1.7109-1.7109h6.4492c0.94141 0 1.7109 0.76172 1.7109 1.7109v6.4492c0 0.94141-0.76172 1.7109-1.7109 1.7109h-6.4492c-0.94141 0-1.7109-0.76172-1.7109-1.7109zm29.387-3.9688h-6.4492c-2.1914 0-3.9805 1.7812-3.9805 3.9805v6.4492c0 2.1914 1.7812 3.9805 3.9805 3.9805h6.4492c2.1914 0 3.9805-1.7812 3.9805-3.9805v-6.4492c0-2.2031-1.7891-3.9805-3.9805-3.9805zm1.7109 10.418c0 0.94141-0.76172 1.7109-1.7109 1.7109h-6.4492c-0.94141 0-1.7109-0.76172-1.7109-1.7109v-6.4492c0-0.94141 0.76172-1.7109 1.7109-1.7109h6.4492c0.94141 0 1.7109 0.76172 1.7109 1.7109zm-65.418 26.18h-6.4492c-2.1914 0-3.9805 1.7812-3.9805 3.9805v6.4492c0 2.1914 1.7812 3.9805 3.9805 3.9805h6.4492c2.1914 0 3.9805-1.7891 3.9805-3.9805v-6.4492c0-2.1875-1.793-3.9805-3.9805-3.9805zm1.6992 10.43c0 0.94141-0.76172 1.7109-1.7109 1.7109h-6.4492c-0.94141 0-1.7109-0.76172-1.7109-1.7109v-6.4492c0-0.94141 0.76172-1.7109 1.7109-1.7109h6.4492c0.94141 0 1.7109 0.76172 1.7109 1.7109zm44.621-25.66c0.39062 0.48828 0.30859 1.2109-0.17969 1.6016l-8.5898 6.8398c-0.21094 0.17188-0.46094 0.25-0.71094 0.25-0.32031 0-0.64063-0.14062-0.87109-0.39844l-3.7695-4.4609c-0.41016-0.48047-0.35156-1.1992 0.12891-1.6016 0.48047-0.41016 1.1992-0.35156 1.6016 0.12891l3.0586 3.6094 7.7305-6.1602c0.48828-0.37891 1.2109-0.29688 1.6016 0.19141zm17.387-3.0703h-6.4492c-2.1914 0-3.9805 1.7812-3.9805 3.9805v6.4492c0 2.1914 1.7812 3.9805 3.9805 3.9805h6.4492c2.1914 0 3.9805-1.7812 3.9805-3.9805v-6.4492c0-2.1992-1.7891-3.9805-3.9805-3.9805zm1.7109 10.434c0 0.94141-0.76172 1.7109-1.7109 1.7109h-6.4492c-0.94141 0-1.7109-0.76172-1.7109-1.7109v-6.4492c0-0.94141 0.76172-1.7109 1.7109-1.7109h6.4492c0.94141 0 1.7109 0.76172 1.7109 1.7109z"/>
                </svg>
                10 Day Forecast
              </div>
              <div className="forecast-list">
                {
                  forecastContext.loading ?
                    <p className = "loading-text">Loading...</p> :
                    forecastContext.currentForecast!.forecasts.map((el)=>{
                      return (
                        <ForecastCard data = {el} key={el.date} />
                      )
                    })
                }
              </div>
          </div>
          {
            forecastContext.loading ?
              <p className = "loading-text">Loading...</p> :
              <WindCard data = {forecastContext.currentForecast!.current_observation.wind} />
          }
        </div>
      </div>
    </div>
  )
}

export default WeatherApp