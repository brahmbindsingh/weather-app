import React from "react";
import { TCurrentObservationType } from "../../constants/weather-interfaces";
import './CurrentObservationCard.css'

interface Props {
    type: TCurrentObservationType,
    value: string
}

const CurrentObservationCard = (props: Props) => {

  const getSVG = (type: TCurrentObservationType) => {
    switch (type.toLowerCase()) {
      case "humidity":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 80"
            x="0px"
            y="0px"
          >
            <path
              className="svg-color"
              d="M32,62c10.477,0,19-8.812,19-19.643C51,27.844,33.554,3.447,32.812,2.416a1.038,1.038,0,0,0-1.624,0C30.446,3.447,13,27.844,13,42.357,13,53.188,21.523,62,32,62ZM32,4.745c3.486,5.062,17,25.466,17,37.612C49,52.085,41.374,60,32,60S15,52.085,15,42.357C15,30.216,28.514,9.808,32,4.745Z"
            />
          </svg>
        );
      
      case "pressure":
        return (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 63.957 105" x="0px" y="0px"><path className="svg-color" d="M21.4,28.1a2,2,0,0,0-3.465,0L2.661,54.548A19.635,19.635,0,0,0,19.666,84,19.635,19.635,0,0,0,36.671,54.548ZM33.207,72.182a15.635,15.635,0,0,1-27.081,0,15.474,15.474,0,0,1,0-15.635L19.666,33.1l13.54,23.453A15.468,15.468,0,0,1,33.207,72.182Z"/><path className="svg-color" d="M62.267,38.551,53.2,22.852a2,2,0,0,0-3.465,0l-9.065,15.7a12.467,12.467,0,1,0,21.594,0ZM58.8,49.019a8.467,8.467,0,1,1-14.664-8.468l7.332-12.7,7.332,12.7A8.383,8.383,0,0,1,58.8,49.019Z"/><path className="svg-color" d="M33.966,29.476a10.492,10.492,0,0,0,9.087-15.738L35.7,1a2,2,0,0,0-3.465,0L24.879,13.738a10.492,10.492,0,0,0,9.087,15.738ZM28.344,15.738,33.966,6l5.622,9.738a6.492,6.492,0,1,1-11.244,0Z"/></svg>
        )

      case "visibility": 
        return (
            <svg xmlns="http://purl.org/dc/elements/1.1/" version="1.1" x="0px" y="0px" viewBox="0 0 100 125"><g transform="translate(0,-952.36218)"><path className="svg-color" d="M 50 26 C 32.107308 26 16.231379 34.97424 6.375 48.8125 A 2.0002 2.0002 0 0 0 6.375 51.15625 C 16.231377 64.99475 32.10731 74 50 74 C 67.892689 74 83.768622 64.99475 93.625 51.15625 A 2.0002 2.0002 0 0 0 93.625 48.8125 C 83.768621 34.97424 67.892691 26 50 26 z M 50 30 C 66.030013 30 80.237355 37.83309 89.4375 50 C 80.236993 62.1588 66.023635 70 50 70 C 33.976364 70 19.763006 62.1588 10.5625 50 C 19.762644 37.83309 33.969986 30 50 30 z M 50 36 C 42.291702 36 36 42.29168 36 50 C 36 57.7083 42.291702 64 50 64 C 57.708298 64 64 57.7083 64 50 C 64 42.29168 57.708298 36 50 36 z M 50 40 C 55.546537 40 60 44.45344 60 50 C 60 55.5465 55.546537 60 50 60 C 44.453463 60 40 55.5465 40 50 C 40 44.45344 44.453463 40 50 40 z " transform="translate(0,952.36218)"/></g></svg>
        )
      default:
        return null;
    }
  };

  const getSuffix = (type: TCurrentObservationType) => {
    switch (type) {
      case "humidity":
        return "%";
      case "pressure":
        return "hPa";
      case "visibility":
        return "mi";
      default:
        break;
    }
  }

  const getDescription = (type: TCurrentObservationType) => {
    switch (type) {
      case "humidity":
        return "Humidity is making it feel warmer"

      case "pressure":
        return ""

      case "visibility":
        return ""
    
      default:
        break;
    }
  }

  return (
    <div className="card">
      <div className="card-heading">
        {getSVG(props.type)}
        <p>{props.type}</p>
      </div>
      <div className="card-value">
        {props.value} {getSuffix(props.type)}
      </div>
      <div className="card-description">
        {getDescription(props.type)}
      </div>
    </div>
  );
};

export default CurrentObservationCard;
