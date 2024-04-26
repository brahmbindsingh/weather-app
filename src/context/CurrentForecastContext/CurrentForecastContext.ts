import { createContext } from "react";
import { TWeatherData } from "../../constants/weather-interfaces";

interface IInitialValue{
    currentForecast: TWeatherData | null,
    loading: boolean,
    updateCurrentForecast: (currentForecast: TWeatherData | null) => void,
    updateLoading: (value: boolean) => void
}

const initialValue: IInitialValue = {
    currentForecast: null,
    loading: true,
    updateCurrentForecast: (currentForecast: TWeatherData | null) => {},
    updateLoading: (value: boolean) => {}
}

const CurrentForecastContext = createContext(initialValue);

export default CurrentForecastContext;