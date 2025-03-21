import React from "react";
import WeatherData from "../weather-data/weather-data.tsx";
import './weather-card.css'

const WeatherCard = () => {
    const [city, setCity] = React.useState<string>('');


    return (
        <div className={"weather-card"}>
            <input className={"search-city"} placeholder={"Rechercher"}/>
            <WeatherData city={"Nantes"} country={"FRANCE"} temperature={16} weather={"Pluvieux"}/>
        </div>
    );
};

export default WeatherCard;