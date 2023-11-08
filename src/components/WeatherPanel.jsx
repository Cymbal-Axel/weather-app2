import React, {useState} from 'react';

const WeatherPanel = () => {
 
    let urlWeather = "https://api.openweathermap.org/data/2.5/weather?appid=2388c2c8d7a7dfad1732511f225a207c&lang=es";
    let cityUrl = "&q=";

    let urlForecast = "https://api.openweathermap.org/data/2.5/forecast?appid=2388c2c8d7a7dfad1732511f225a207c&lang=es";

    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
}