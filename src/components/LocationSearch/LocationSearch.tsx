import React, { useContext, useState } from "react";
import { WeatherActions } from "../../actions/weather-actions";
import { TSearchLocationData, TWeatherData } from "../../constants/weather-interfaces";
import "./LocationSearch.css";
import CurrentForecastContext from "../../context/CurrentForecastContext/CurrentForecastContext";

const LocationSearch = () => {

  const weatherActions: WeatherActions = new WeatherActions();

  const forecastContext = useContext(CurrentForecastContext);

  const [cityList, setCityList] = useState<TSearchLocationData[]>([]);

  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
    if (e.currentTarget.value.length >= 3) {
      debouncedGetAllCity(e.currentTarget.value)
    }
    else{
      if(cityList.length !== 0){
        setCityList([]);
      }
    }
  };

  const debounce = (func: (inputLocation: string) => Promise<TSearchLocationData[]>, delay: number): (inputLocation: string) => void => {
    let timeout: NodeJS.Timeout | null = null;
    return (inputLocation: string) => {
      if (timeout) clearTimeout(timeout);

      timeout = setTimeout(async () => {
        console.log("func called");
        const result = await func(inputLocation);
        setCityList(result);
        timeout=null;
      }, delay);
    };
  };

  const handleClick = async (e: React.MouseEvent<HTMLLIElement, MouseEvent>, cityName: string) => {
    e.preventDefault();
    setCityList([]);
    forecastContext.updateLoading(true);
    const weatherData: TWeatherData = await weatherActions.getWeatherDataByCity(cityName.toLowerCase());
    console.log(weatherData);
    forecastContext.updateCurrentForecast(weatherData);
    sessionStorage.setItem('cityForecast', JSON.stringify(weatherData));
    forecastContext.updateLoading(false);
  }

  const debouncedGetAllCity = debounce(weatherActions.getAllCity, 1000);

  return (
    <div className="location-search">
      <div className="search-bar">
        <i className="fa-solid fa-location-dot"></i>
        <input
          type="text"
          placeholder="Search your location..."
          value={inputValue}
          onChange={handleChange}
        />
      </div>
      {
        (inputValue.length >= 3 && cityList.length > 0) &&
          <ul className="search-list">
            {
              cityList.map((el: TSearchLocationData)=>{
                return <li key={el.iataCode} onClick = {(e)=>handleClick(e, el.name)}>{el.name}</li>
              })
            }
          </ul> 

      }
    </div>
  );
};

export default LocationSearch;
