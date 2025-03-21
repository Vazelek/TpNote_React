import React, {useEffect, useState} from "react";
import WeatherData, {WeatherDataProps} from "../weather-data/weather-data.tsx";
import './weather-card.css'
import {AVAILABLE_CITIES, AvailableCity, COUNTRY_OF_CITY, FR_CITY_NAME} from "../../constants/constants.tsx";
import Select from "react-select";

interface ApiError {
    message: string;
    status?: number;
    code?: string;
}

interface LocationData {
    city: string;
    country: string;
}

const WeatherCard = () => {
    const [city, setCity] = React.useState<AvailableCity | string>(''); //(localStorage.getItem("city") || '');
    const [country, setCountry] = React.useState<string | null>(null); //(localStorage.getItem("country") || null);
    const [weatherData, setWeatherData] = useState<WeatherDataProps | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<ApiError | null>(null);

    useEffect(() => {
        if (!city) {
            return;
        }
        const fetchData = async (): Promise<void> => {
            try {
                setLoading(true);
                setError(null);

                const url: string = "https://www.freetestapi.com/api/v1/weathers";
                const trueUrl: string = `${url}?search=${city}`;

                let response = await fetch(trueUrl);
                let results: WeatherDataProps[] = [];

                if (response.ok) {
                    results = await response.json();
                }

                if (!response.ok || results.length === 0) {
                    // The city might not exist, so retrieve a random country weather
                    response = await fetch(url);

                    if (!response.ok) {
                        throw {
                            message: `Erreur HTTP! statut: ${response.status}`,
                            status: response.status,
                        } as ApiError;
                    }

                    results = await response.json();
                }

                const result = results[Math.floor(Math.random() * results.length)];
                setWeatherData(result);

                // Save retrieved data in local storage
                // localStorage.setItem("city", city);
                // localStorage.setItem("country", country || '');
                // localStorage.setItem("weatherData", JSON.stringify(result));
            } catch (e) {
                const error = e as ApiError;
                setError({
                    message: error.message || 'Une erreur est survenue',
                    status: error.status,
                    code: error.code,
                });
            } finally {
                setLoading(false);
            }
        };


        fetchData().then();
    }, [city]);

    useEffect(() => {
        if (!navigator.geolocation) {
            return;
        }

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const {latitude, longitude} = position.coords;

                try {
                    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
                    const data: LocationData = (await response.json()).address;
                    setCity(data.city);
                    setCountry(data.country);
                } catch (err) {
                    setCountry(null);
                    console.error("Erreur lors de la récupération des données de localisation", err)
                }
            },
            (err) => {
                setCountry(null);
                console.error("Erreur lors de la récupération des données de localisation", err)
            }
        );
    }, []);

    if (loading) {
        return <div className={"weather-card"}>Chargement en cours...</div>;
    }

    if (error || !weatherData) {
        return (
            <div className={"weather-card"}>
                <h3>Erreur</h3>
                <p>{error?.message}</p>
                {error?.status && <p>Statut: {error?.status}</p>}
            </div>
        );
    }

    return (
        <div className={"weather-card"}>
            <Select options={Object.entries(FR_CITY_NAME).map(([key, value]) => ({value: key, label: value}))}
                    isSearchable={true}
                    isClearable={false}
                    placeholder={"Rechercher"}
                    onChange={(selectedOption) => {
                        setCity(selectedOption?.value ?? '');
                        setCountry(null);
                    }}/>
            <WeatherData city={AVAILABLE_CITIES.some(a => a === city) ? FR_CITY_NAME[city as AvailableCity] : city}
                         country={AVAILABLE_CITIES.some(a => a === city) ? COUNTRY_OF_CITY[city as AvailableCity] : (country ?? '')}
                         temperature={weatherData.temperature}
                         weather_description={weatherData.weather_description}/>
        </div>
    );
};

export default WeatherCard;