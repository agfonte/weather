import React, {useEffect, useState} from "react";
import WeatherPage from "./WeatherPage";

export default function WeatherController() {
    const apiKey = process.env.REACT_APP_API_KEY;
    const [cityKey, setCityKey] = React.useState("");
    const [weather, setWeather] = React.useState("");
    const [temperature, setTemperature] = React.useState("");
    const [cityText, setCityText] = useState("");
    const [cityChange, setCityChange] = useState("");

    //getting weather details
    const gettingWeather = () => {
        const baseUrl = "http://dataservice.accuweather.com/currentconditions/v1/"+cityKey;
        const query = `?apikey=${apiKey}`;

        fetch(baseUrl + query).then((response => {
            const resp = response.clone();

            resp.json().then((data) => {
                setWeather(data[0].WeatherText)
                setTemperature(data[0].Temperature.Metric.Value + " °C")
            })
        }))

    }

    //getting city
    const getCity = (city) => {
        const baseUrl = "http://dataservice.accuweather.com/locations/v1/cities/search";
        const query = `?apikey=${apiKey}&q=${city}`;

        fetch(baseUrl + query).then((response => {
            const resp = response.clone();

            resp.json().then((data) => {
                setCityKey(data[0].Key)
            })
        }))
    }

    //getting city and weather from user
    useEffect(() => {
        if (cityText !== "") {
            getCity(cityText);
        }
    }, [cityText])

    useEffect(() => {
        if (cityKey !== "") {
            gettingWeather();
        }
    }, [cityKey])

    return (
        <div className="NavPage">
            <WeatherPage
                cityChange={cityChange}
                setCityChange={setCityChange}
                setCityText={setCityText}
                weather={weather}
                temperature={temperature}
            />
        </div>
    );
}