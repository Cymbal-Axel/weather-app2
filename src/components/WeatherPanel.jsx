import React, {useState} from 'react';

const WeatherPanel = () => {
 
    let urlWeather = "https://api.openweathermap.org/data/2.5/weather?appid=2388c2c8d7a7dfad1732511f225a207c&lang=es";
    let cityUrl = "&q=";

    let urlForecast = "https://api.openweathermap.org/data/2.5/forecast?appid=2388c2c8d7a7dfad1732511f225a207c&lang=es";

    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [location, setLocation] = useState("");

    const getLocation = async(loc) => {
        setLoading(true);
        setLocation(loc);

           //weather
            urlWeather = urlWeather + cityUrl + loc;

            await fetch(urlWeather).then((response) => {
                if(!response.ok) throw {response}
                return response.json();
            }).then((weatherData) => {
                setWeather(weatherData);
            }).catch(error => {
                console.log(error);
                setLoading(false); 
                setShow(false)
            });

            //forecast
            urlForecast = urlForecast + cityUrl + loc;
            await fetch(urlForecast).then((response)=> {
                if(!response.ok) throw{response}
                return response.json();
            }).then((forecastData)=> {
                console.log(forecastData);
                setForecast(forecastData);

                setLoading(false);
                setShow(true);

            }).catch(error =>{
                console.log(error);
                setLoading(false);
                setShow(false);
            })
        }

        return(
            
        )
}