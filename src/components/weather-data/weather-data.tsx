import './weather-data.css'

interface WeatherDataProps {
    city: string;
    country: string;
    temperature: number;
    weather: string;
}

const WeatherData = ({city, country, temperature, weather}: WeatherDataProps) => {
    return (
        <div className={"weather-data-container"}>
            <div className={"location"}>
                <span className={"city"}>{city}</span>
                <span className={"city-country-separator"}>•</span>
                <span className={"country"}>{country}</span>
            </div>
            <div className={"weather-data"}>
                <div className={"weather-data-text"}>
                    <span className={"temperature"}>{temperature}°C</span>
                    <span className={"weather"}>{weather}</span>
                </div>
                <div className={"weather-icon"}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"/>
                    </svg>
                </div>
            </div>
            <div className={"weather-tips"}>
                Prenez votre parapluie # TODO
            </div>
        </div>
    );
};

export default WeatherData;