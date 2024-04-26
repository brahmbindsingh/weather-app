export type TCurrentObservationType = "humidity" | "visibility" | "pressure";

export type TForecastData = {
    day: string,
    date: number,
    high: number,
    low: number,
    text: string,
    code: number
}

export type TWeatherData = {
    location: TLocationData,
    current_observation: TCurrentObservation,
    forecasts: TForecastData[]
}

export type TLocationData = {
    city: string,
    woeid: number,
    country: string,
    lat: number,
    long: number,
    timezone_id: string
}

export type TCurrentObservation = {
    pubDate: number,
    wind: TWindData,
    atmosphere: TAtmosphereData,
    astronomy: TAstronomyData,
    condition: TConditionData
}

export type TWindData = {
    chill: number,
    direction: string,
    speed: number
}

export type TAtmosphereData = {
    humidity: number,
    visibility: number,
    pressure: number
}

export type TAstronomyData = {
    sunrise: string,
    sunset: string
}

export type TConditionData = {
    temperature: number,
    text: string
}

export type TSearchLocationData = {
    type: string,
    subType: string,
    name: string,
    iataCode: string,
    address: {
        countryCode: string,
        stateCode: string
    },
    geoCode: {
        latitude: number,
        longitude: number
    }
}