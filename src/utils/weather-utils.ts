import { TCurrentObservationType } from "../constants/weather-interfaces";

export const getConvertedDate: (timestamp: number) => string = (timestamp: number) => {
    const date: Date = new Date(timestamp * 1000);

    // Format the date to a readable string
    // Example format: "Monday, April 25, 2024 1:00 PM"
    const day: number = date.getDate(); // Day of the month (1-31)
    const month: number = date.getMonth() + 1; // Month of the year (0-11), so add 1 to adjust to human-readable format

    const formattedDate: string = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}`;

    return formattedDate

}

export const getImageForWeather = (weatherType: string) => {
    switch(weatherType.toLocaleLowerCase()){
        case "fair":
            return "../../assets/sun.png";
        case "mostly cloudy":
            return "/images/mostly-clouded.png";
        case "rain":
            return "../../assets/rainy.png";
        case "cloudy":
            return "../../assets/cloudy.png";
        case "partly cloudy":
            return "../../assets/partialCloudy.png";
        case "showers":
            return "/images/cloudy.png";
        case "scattered showers":
            return "/images/cloudy.png";
        default:
            return "../../assets/sun.png";
    }
}

export const weatherDataTransformer = (data: any) => {
    
}