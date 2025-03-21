import './weather-data.css'
import {
    AvailableCity,
    AvailableWeathers,
    WEATHER_ADVICES,
    WEATHER_ICONS,
    WEATHER_TRANSLATION
} from "../../constants/constants.tsx";

export interface WeatherDataProps {
    city: AvailableCity;
    country: string;
    temperature: number;
    weather_description: AvailableWeathers;
}

const WeatherData = ({city, country, temperature, weather_description}: WeatherDataProps) => {
    return (
        <div className={"weather-data-container"}>
            <div className={"location"}>
                <span className={"city"}>{city.toUpperCase()}</span>
                <span className={"city-country-separator"}>•</span>
                <span className={"country"}>{country.toUpperCase()}</span>
            </div>
            <div className={"weather-data"}>
                <div className={"weather-data-text"}>
                    <span className={"temperature"}>{temperature}°C</span>
                    <span className={"weather"}>{WEATHER_TRANSLATION[weather_description]}</span>
                </div>
                <div className={"weather-icon"}>
                    {WEATHER_ICONS[weather_description]}
                </div>
            </div>
            <div className={"weather-tips"}>
                {WEATHER_ADVICES[weather_description]}
            </div>
        </div>
    );
};

export default WeatherData;