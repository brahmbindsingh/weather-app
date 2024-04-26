import axios from "axios";
import qs from "qs";
import { ApiConstants } from "../constants/api-constants";
import {
  TLocationData,
  TSearchLocationData,
  TWeatherData,
} from "../constants/weather-interfaces";

export class WeatherActions {

  constructor(){
    this.getTokenForCityList = this.getTokenForCityList.bind(this);
    this.getWeatherDataByCity = this.getWeatherDataByCity.bind(this);
    this.getWeatherDataByCordinates = this.getWeatherDataByCordinates.bind(this);
    this.getAllCity = this.getAllCity.bind(this);
  }

  public async getWeatherDataByCity(cityName: string) {
    const options = {
      method: "GET",
      url: ApiConstants.WEATHER_API,
      params: {
        location: cityName,
        format: "json",
        u: "f",
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_XRapidAPIKey!,
        "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      return response.data as TWeatherData;
    } catch (error) {
      console.error(error);
      return {} as TWeatherData;
    }
  }

  public async getWeatherDataByCordinates(lat: number, long: number) {
    console.log(lat, long);

    const options = {
      method: "GET",
      url: "https://yahoo-weather5.p.rapidapi.com/weather",
      params: {
        lat: "40.712",
        long: "-74.006",
        format: "json",
        u: "f",
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_XRapidAPIKey,
        "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      sessionStorage.setItem("cityForecast", JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  public async getTokenForCityList(){
    const options = {
      method: "POST",
      maxBodyLength: Infinity,
      url: "https://test.api.amadeus.com/v1/security/oauth2/token",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: qs.stringify({
        "grant_type": "client_credentials",
        "client_id": process.env.REACT_APP_AMADEUS_CLIENT_ID,
        "client_secret": process.env.REACT_APP_AMADEUS_CLIENT_SECRET
      })
    }

    const response = await axios.request(options);
    if (response.status === 200) {
      return response.data.access_token;
    } else {
      return "";
    }
  }

  public async getAllCity(city: string): Promise<TSearchLocationData[]> {

    const token = await this.getTokenForCityList();

    const options = {
      method: "GET",
      maxBodyLength: Infinity,
      url: `https://test.api.amadeus.com/v1/reference-data/locations/cities?keyword=${city}&max=10`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.request(options);
    if (response.status === 200) {
      const locationList = response.data.data as TSearchLocationData[];
      console.log(locationList);

      return locationList;
    } else if(response.status === 401) {
      return [];
    } else {
      return [];
    }
  }

}
