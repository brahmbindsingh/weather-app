import React from "react";
import './CurrentConditions.css';

interface Props{
    temprature: string,
    weatherType: string,
}

const CurrentConditions = (props: Props) => {
  return (
    <div className="today-weather-detail">
      <h1 className="temprature">{props.temprature}</h1>
      <h3 className="weather-type">{props.weatherType}</h3>
      <p className="weather-description">
        Today, expect a rainy day with tempratures reaching a maximum of 28°C.
        Make sure to grab an umbrella and raincoat before heading out
      </p>
    </div>
  );
};

export default CurrentConditions;
