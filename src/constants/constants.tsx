// Fake Weather API available cities
import {ReactElement} from "react";

export const AVAILABLE_CITIES = [
    "New York", "London", "Los Angeles", "Tokyo", "Mumbai",
    "Chicago", "Toronto", "Sydney", "Paris", "Moscow",
    "Mexico City", "Rio de Janeiro", "Cairo", "Shanghai",
    "São Paulo", "Istanbul", "Kolkata", "Berlin", "Dubai",
    "Seoul", "Auckland", "Barcelona", "Cape Town", "Havana",
    "Montreal", "Kyoto", "Lima", "Nairobi", "Oslo", "Zurich",
    "Osaka", "Riyadh", "Bogotá", "Jakarta", "Buenos Aires",
    "Johannesburg", "Singapore", "Taipei", "Tehran", "Vancouver",
    "Melbourne", "Brisbane", "Perth", "Adelaide", "Canberra",
    "Wellington", "Christchurch", "Queenstown", "Edinburgh",
    "Dublin", "Lahore"
];

export type AvailableCity = typeof AVAILABLE_CITIES[number];

export const COUNTRY_OF_CITY: Record<AvailableCity, string> = {
    "New York": "États-Unis",
    "London": "Royaume-Uni",
    "Los Angeles": "États-Unis",
    "Tokyo": "Japon",
    "Mumbai": "Inde",
    "Chicago": "États-Unis",
    "Toronto": "Canada",
    "Sydney": "Australie",
    "Paris": "France",
    "Moscow": "Russie",
    "Mexico City": "Mexique",
    "Rio de Janeiro": "Brésil",
    "Cairo": "Égypte",
    "Shanghai": "Chine",
    "São Paulo": "Brésil",
    "Istanbul": "Turquie",
    "Kolkata": "Inde",
    "Berlin": "Allemagne",
    "Dubai": "Émirats Arabes Unis",
    "Seoul": "Corée du Sud",
    "Auckland": "Nouvelle-Zélande",
    "Barcelona": "Espagne",
    "Cape Town": "Afrique du Sud",
    "Havana": "Cuba",
    "Montreal": "Canada",
    "Kyoto": "Japon",
    "Lima": "Pérou",
    "Nairobi": "Kenya",
    "Oslo": "Norvège",
    "Zurich": "Suisse",
    "Osaka": "Japon",
    "Riyadh": "Arabie Saoudite",
    "Bogotá": "Colombie",
    "Jakarta": "Indonésie",
    "Buenos Aires": "Argentine",
    "Johannesburg": "Afrique du Sud",
    "Singapore": "Singapour",
    "Taipei": "Taïwan",
    "Tehran": "Iran",
    "Vancouver": "Canada",
    "Melbourne": "Australie",
    "Brisbane": "Australie",
    "Perth": "Australie",
    "Adelaide": "Australie",
    "Canberra": "Australie",
    "Wellington": "Nouvelle-Zélande",
    "Christchurch": "Nouvelle-Zélande",
    "Queenstown": "Nouvelle-Zélande",
    "Edinburgh": "Royaume-Uni",
    "Dublin": "Irlande",
    "Lahore": "Pakistan"
};

export const FR_CITY_NAME: Record<AvailableCity, string> = {
    "New York": "New York",
    "London": "Londres",
    "Los Angeles": "Los Angeles",
    "Tokyo": "Tokyo",
    "Mumbai": "Bombay",
    "Chicago": "Chicago",
    "Toronto": "Toronto",
    "Sydney": "Sydney",
    "Paris": "Paris",
    "Moscow": "Moscou",
    "Mexico City": "Mexico",
    "Rio de Janeiro": "Rio de Janeiro",
    "Cairo": "Le Caire",
    "Shanghai": "Shanghai",
    "São Paulo": "São Paulo",
    "Istanbul": "Istanbul",
    "Kolkata": "Calcutta",
    "Berlin": "Berlin",
    "Dubai": "Dubaï",
    "Seoul": "Séoul",
    "Auckland": "Auckland",
    "Barcelona": "Barcelone",
    "Cape Town": "Le Cap",
    "Havana": "La Havane",
    "Montreal": "Montréal",
    "Kyoto": "Kyoto",
    "Lima": "Lima",
    "Nairobi": "Nairobi",
    "Oslo": "Oslo",
    "Zurich": "Zurich",
    "Osaka": "Osaka",
    "Riyadh": "Riyad",
    "Bogotá": "Bogota",
    "Jakarta": "Jakarta",
    "Buenos Aires": "Buenos Aires",
    "Johannesburg": "Johannesburg",
    "Singapore": "Singapour",
    "Taipei": "Taipei",
    "Tehran": "Téhéran",
    "Vancouver": "Vancouver",
    "Melbourne": "Melbourne",
    "Brisbane": "Brisbane",
    "Perth": "Perth",
    "Adelaide": "Adélaïde",
    "Canberra": "Canberra",
    "Wellington": "Wellington",
    "Christchurch": "Christchurch",
    "Queenstown": "Queenstown",
    "Edinburgh": "Édimbourg",
    "Dublin": "Dublin",
    "Lahore": "Lahore"
};

export const AVAILABLE_WEATHERS = [
    "Clear sky",
    "Partly cloudy",
    "Partly Cloudy",
    "Cloudy",
    "Rain showers",
    "Sunny",
    "Rainy",
    "Scattered clouds"
];

export type AvailableWeathers = typeof AVAILABLE_WEATHERS[number];

export const WEATHER_TRANSLATION: Record<AvailableWeathers, string> = {
    "Clear sky": "Ciel clair",
    "Partly Cloudy": "Partiellement nuageux",
    "Partly cloudy": "Partiellement nuageux",
    "Cloudy": "Nuageux",
    "Rain showers": "Averses de pluie",
    "Sunny": "Ensoleillé",
    "Rainy": "Pluvieux",
    "Scattered clouds": "Nuages épars"
}

export const WEATHER_ADVICES: Record<AvailableWeathers, string> = {
    "Clear sky": "Lunettes de soleil",
    "Partly cloudy": "Vêtements légers",
    "Partly Cloudy": "Vêtements légers",
    "Cloudy": "Prévoir un parapluie, juste au cas où",
    "Rain showers": "Prenez un parapluie (ou restez chez vous et faites un FIFA)",
    "Sunny": "Tenue légère",
    "Rainy": "Prenez un parapluie",
    "Scattered clouds": "Vêtements légers"
}

export const WEATHER_ICONS: Record<AvailableWeathers, ReactElement> = {
    "Clear sky": <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                      stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"/>
    </svg>,
    "Partly cloudy": <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                          stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"/>
    </svg>,
    "Partly Cloudy": <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                          stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"/>
    </svg>,
    "Cloudy": <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                   stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"/>
    </svg>,
    "Rain showers": <svg version="1.1" stroke="currentColor" fill="currentColor" id="Layer_1"
                         xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 476 476">
        <g transform="translate(0 -540.36)">
            <g>
                <g>
                    <path d="M302.2,839.66L302.2,839.66c39.7,0,77.1-15.7,105.4-44.1c28.5-28.5,44.1-66.2,44.1-106.1c0-82.2-67.1-149.1-149.6-149.1
c-29.4,0-57.8,8.4-82.2,24.2c-21.7,14.1-39.3,33.6-51.2,56.6c-10.2-3.1-20.7-4.6-32.6-4.6c-29.9,0-57.9,11.4-79,32.3
c-21.2,21-32.9,49.1-32.9,79.2c0,61.6,50.2,111.6,111.9,111.6H302.2z M44.2,728.16c0-50.5,41.2-91.6,91.9-91.6v0
c12.7,0,23.5,2,33.9,6.4c5,2.1,10.8-0.2,13-5.2c20.7-47,67.5-77.3,119.2-77.3c71.5,0,129.6,57.9,129.6,129.1
c0,71.8-58.1,130.2-129.6,130.2H136.1C85.4,819.76,44.2,778.66,44.2,728.16z"/>
                    <path d="M141.2,885.66l-24.5,25.4c-3.8,3.9-3.7,10.3,0.3,14.1c1.9,1.9,4.4,2.8,6.9,2.8c2.6,0,5.2-1,7.2-3.1l24.5-25.4
c3.8-3.9,3.7-10.3-0.3-14.1C151.4,881.56,145,881.66,141.2,885.66z"/>
                    <path d="M243.1,885.66l-24.5,25.4c-3.8,3.9-3.7,10.3,0.3,14.1c1.9,1.9,4.4,2.8,6.9,2.8c2.6,0,5.2-1,7.2-3.1l24.5-25.4
c3.8-3.9,3.7-10.3-0.3-14.1C253.3,881.56,246.9,881.66,243.1,885.66z"/>
                    <path d="M345,885.66l-24.5,25.4c-3.8,3.9-3.7,10.3,0.3,14.1c1.9,1.9,4.4,2.8,6.9,2.8c2.6,0,5.2-1,7.2-3.1l24.5-25.4
c3.8-3.9,3.7-10.3-0.3-14.1C355.2,881.56,348.8,881.66,345,885.66z"/>
                    <path d="M460.9,885.36c-3.9-3.8-10.3-3.7-14.1,0.3l-24.5,25.4c-3.8,3.9-3.7,10.3,0.3,14.1c1.9,1.9,4.4,2.8,6.9,2.8
c2.7,0,5.3-1,7.2-3.1l24.5-25.4C465,895.56,464.9,889.16,460.9,885.36z"/>
                    <path d="M39.3,885.66l-24.5,25.4c-3.8,3.9-3.7,10.3,0.3,14.1c1.9,1.9,4.4,2.8,6.9,2.8c2.6,0,5.2-1,7.2-3.1l24.5-25.4
c3.8-3.9,3.7-10.3-0.3-14.1C49.5,881.56,43.1,881.66,39.3,885.66z"/>
                    <path d="M192.2,974.96l-24.5,24.4c-3.9,3.9-3.9,10.2,0,14.1c2,1.9,4.5,2.9,7.1,2.9c2.6,0,5.1-1,7-2.9l24.5-24.4
c3.9-3.9,3.9-10.2,0-14.1C202.4,971.06,196.1,971.06,192.2,974.96z"/>
                    <path d="M294.1,974.96l-24.5,24.4c-3.9,3.9-3.9,10.2,0,14.1c2,1.9,4.5,2.9,7.1,2.9c2.6,0,5.1-1,7-2.9l24.5-24.4
c3.9-3.9,3.9-10.2,0-14.1C304.3,971.06,298,971.06,294.1,974.96z"/>
                    <path d="M396,974.96l-24.5,24.4c-3.9,3.9-3.9,10.2,0,14.1c2,1.9,4.5,2.9,7.1,2.9c2.6,0,5.1-1,7-2.9l24.5-24.4
c3.9-3.9,3.9-10.2,0-14.1C406.2,971.06,399.9,971.06,396,974.96z"/>
                    <path d="M90.3,974.96l-24.5,24.4c-3.9,3.9-3.9,10.2,0,14.1c2,1.9,4.5,2.9,7.1,2.9c2.6,0,5.2-1,7-2.9l24.5-24.4
c3.9-3.9,3.9-10.2,0-14.1C100.5,971.06,94.2,971.06,90.3,974.96z"/>
                </g>
            </g>
        </g>
    </svg>,
    "Sunny": <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                  stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"/>
    </svg>,
    "Rainy": <svg version="1.1" stroke="currentColor" fill="currentColor" id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 476 476">
        <g transform="translate(0 -540.36)">
            <g>
                <g>
                    <path d="M302.2,839.66L302.2,839.66c39.7,0,77.1-15.7,105.4-44.1c28.5-28.5,44.1-66.2,44.1-106.1c0-82.2-67.1-149.1-149.6-149.1
c-29.4,0-57.8,8.4-82.2,24.2c-21.7,14.1-39.3,33.6-51.2,56.6c-10.2-3.1-20.7-4.6-32.6-4.6c-29.9,0-57.9,11.4-79,32.3
c-21.2,21-32.9,49.1-32.9,79.2c0,61.6,50.2,111.6,111.9,111.6H302.2z M44.2,728.16c0-50.5,41.2-91.6,91.9-91.6v0
c12.7,0,23.5,2,33.9,6.4c5,2.1,10.8-0.2,13-5.2c20.7-47,67.5-77.3,119.2-77.3c71.5,0,129.6,57.9,129.6,129.1
c0,71.8-58.1,130.2-129.6,130.2H136.1C85.4,819.76,44.2,778.66,44.2,728.16z"/>
                    <path d="M141.2,885.66l-24.5,25.4c-3.8,3.9-3.7,10.3,0.3,14.1c1.9,1.9,4.4,2.8,6.9,2.8c2.6,0,5.2-1,7.2-3.1l24.5-25.4
c3.8-3.9,3.7-10.3-0.3-14.1C151.4,881.56,145,881.66,141.2,885.66z"/>
                    <path d="M243.1,885.66l-24.5,25.4c-3.8,3.9-3.7,10.3,0.3,14.1c1.9,1.9,4.4,2.8,6.9,2.8c2.6,0,5.2-1,7.2-3.1l24.5-25.4
c3.8-3.9,3.7-10.3-0.3-14.1C253.3,881.56,246.9,881.66,243.1,885.66z"/>
                    <path d="M345,885.66l-24.5,25.4c-3.8,3.9-3.7,10.3,0.3,14.1c1.9,1.9,4.4,2.8,6.9,2.8c2.6,0,5.2-1,7.2-3.1l24.5-25.4
c3.8-3.9,3.7-10.3-0.3-14.1C355.2,881.56,348.8,881.66,345,885.66z"/>
                    <path d="M460.9,885.36c-3.9-3.8-10.3-3.7-14.1,0.3l-24.5,25.4c-3.8,3.9-3.7,10.3,0.3,14.1c1.9,1.9,4.4,2.8,6.9,2.8
c2.7,0,5.3-1,7.2-3.1l24.5-25.4C465,895.56,464.9,889.16,460.9,885.36z"/>
                    <path d="M39.3,885.66l-24.5,25.4c-3.8,3.9-3.7,10.3,0.3,14.1c1.9,1.9,4.4,2.8,6.9,2.8c2.6,0,5.2-1,7.2-3.1l24.5-25.4
c3.8-3.9,3.7-10.3-0.3-14.1C49.5,881.56,43.1,881.66,39.3,885.66z"/>
                    <path d="M192.2,974.96l-24.5,24.4c-3.9,3.9-3.9,10.2,0,14.1c2,1.9,4.5,2.9,7.1,2.9c2.6,0,5.1-1,7-2.9l24.5-24.4
c3.9-3.9,3.9-10.2,0-14.1C202.4,971.06,196.1,971.06,192.2,974.96z"/>
                    <path d="M294.1,974.96l-24.5,24.4c-3.9,3.9-3.9,10.2,0,14.1c2,1.9,4.5,2.9,7.1,2.9c2.6,0,5.1-1,7-2.9l24.5-24.4
c3.9-3.9,3.9-10.2,0-14.1C304.3,971.06,298,971.06,294.1,974.96z"/>
                    <path d="M396,974.96l-24.5,24.4c-3.9,3.9-3.9,10.2,0,14.1c2,1.9,4.5,2.9,7.1,2.9c2.6,0,5.1-1,7-2.9l24.5-24.4
c3.9-3.9,3.9-10.2,0-14.1C406.2,971.06,399.9,971.06,396,974.96z"/>
                    <path d="M90.3,974.96l-24.5,24.4c-3.9,3.9-3.9,10.2,0,14.1c2,1.9,4.5,2.9,7.1,2.9c2.6,0,5.2-1,7-2.9l24.5-24.4
c3.9-3.9,3.9-10.2,0-14.1C100.5,971.06,94.2,971.06,90.3,974.96z"/>
                </g>
            </g>
        </g>
    </svg>,
    "Scattered clouds": <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"/>
    </svg>
}
