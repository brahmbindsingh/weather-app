import React from "react";
import {
  getConvertedDate,
  getImageForWeather,
} from "../../utils/weather-utils";
import "./ForecastCard.css";
import sun from "../../assets/sun.png";
import mostlyClouded from "../../assets/mostly-clouded.png";
import rain from "../../assets/rainy.png";
import cloudy from "../../assets/cloudy.png";
import partialCloudy from "../../assets/partialCloudy.png";

interface Props {
  data: {
    day: string;
    date: number;
    low: number;
    high: number;
    text: string;
  };
}

const ForecastCard = (props: Props) => {
  const getImageForWeather = (weatherType: string) => {
    switch (weatherType.toLocaleLowerCase()) {
      case "fair":
        return sun;
      case "mostly cloudy":
        return mostlyClouded;
      case "rain":
        return rain;
      case "cloudy":
        return cloudy;
      case "partly cloudy":
        return partialCloudy;
      case "showers":
        return rain;
      case "scattered showers":
        return rain;
      default:
        return sun;
    }
  };

  return (
    <div className="forecast-card">
      <p className="day">{props.data.day}</p>
      <p className="date">{getConvertedDate(props.data.date)}</p>
      <div className="temprature">
        <p className="high">{props.data.high}</p>
        <p className="low">{props.data.low}</p>
      </div>
      <img src={getImageForWeather(props.data.text)} alt={props.data.text} />
    </div>
  );
};

export default ForecastCard;
