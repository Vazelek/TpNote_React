import React, {useEffect, useState} from "react";
import WeatherData, {WeatherDataProps} from "../weather-data/weather-data.tsx";
import './weather-card.css'

interface ApiError {
    message: string;
    status?: number;
    code?: string;
}

const WeatherCard = () => {
    const [city, setCity] = React.useState<string>('');

    const [data, setData] = useState<WeatherDataProps | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<ApiError | null>(null);

    useEffect(() => {
        const fetchData = async (): Promise<void> => {
            try {
                setLoading(true);
                setError(null);

                const url: string = "https://www.freetestapi.com/api/v1/weathers";
                const trueUrl: string = `${url}?search=${city}`;

                let response = await fetch(trueUrl);
                let result: WeatherDataProps | null = null;

                if (!response.ok) {
                    // The city might not exist, so retrieve a random country weather
                    response = await fetch(url);

                    if (!response.ok) {
                        throw {
                            message: `Erreur HTTP! statut: ${response.status}`,
                            status: response.status,
                        } as ApiError;
                    }
                }
                
                const results: WeatherDataProps[] = await response.json();
                result = results[Math.floor(Math.random() * results.length)];

                console.log(result)
                setData(result);
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

    if (loading) {
        return <div className='loading'>Chargement en cours...</div>;
    }

    if (error || !data) {
        return (
            <div className='error'>
                <h3>Erreur</h3>
                <p>{error?.message}</p>
                {error?.status && <p>Statut: {error?.status}</p>}
            </div>
        );
    }

    return (
        <div className={"weather-card"}>
            <input className={"search-city"} placeholder={"Rechercher"}/>
            <WeatherData city={data.city} country={data.country} temperature={data.temperature}
                         weather_description={data.weather_description}/>
        </div>
    );
};

export default WeatherCard;