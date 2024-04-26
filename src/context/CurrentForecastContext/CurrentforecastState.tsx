import React, { useState } from 'react'
import { TWeatherData } from '../../constants/weather-interfaces'
import CurrentForecastContext from './CurrentForecastContext'

interface Props{
    children: any
}

const CurrentForecastState = (props: Props) => {

    const [currentForecast, setCurrentForecast] = useState<TWeatherData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const updateCurrentForecast = (currentForecast: TWeatherData | null) => {
        setCurrentForecast(currentForecast)
    }
    const updateLoading = (value: boolean) => {
        setLoading(value)
    }

  return (
    <CurrentForecastContext.Provider value = {{currentForecast: currentForecast, updateCurrentForecast: updateCurrentForecast, loading: loading, updateLoading: updateLoading}}>
        {props.children}
    </CurrentForecastContext.Provider>
  )
}

export default CurrentForecastState
