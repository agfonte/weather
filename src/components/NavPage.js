import { Helmet } from 'react-helmet';
import React, {useEffect, useState} from "react";
import NavBar from "./NavBar";
import WeatherInfo from "./WeatherInfo";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {Image} from "@mui/icons-material";

function NavPage() {
    const key = "NQ6gDQ8Tb5v7rkrFyUH7yUunW5R2VRWh";
    const [cityKey, setCityKey] = React.useState("");
    const [weather, setWeather] = React.useState("");
    const [temperature, setTemperature] = React.useState("");
    const [cityText, setCityText] = useState("");
    const [cityChange, setCityChange] = useState("");
    //const [flag, setFlag] = useState(false);

    //getting weather details
    const gettingWeather = () => {
        const baseUrl = "http://dataservice.accuweather.com/currentconditions/v1/"+cityKey;
        const query = `?apikey=${key}`;
        const res = [];

        fetch(baseUrl + query).then((response => {
            const resp = response.clone();

            resp.json().then((data) => {
                setWeather(data[0].WeatherText)
                setTemperature(data[0].Temperature.Metric.Value)
            })
        }))

        //res.push(data[0].WeatherText);
        //res.push(data[0].Temperature.Metric.Value)
    }

    //getting city
    const getCity = (city) => {
        const baseUrl = "http://dataservice.accuweather.com/locations/v1/cities/search";
        const query = `?apikey=${key}&q=${city}`;

        fetch(baseUrl + query).then((response => {
            const resp = response.clone();

            resp.json().then((data) => {
                setCityKey(data[0].Key)
            })
        }))
    }


    //getting city of user
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

    useEffect(() => {
        console.log("weather", weather);
        console.log("temperature", temperature)
    }, [weather, temperature])

    return (
        <div className="NavPage">
            <NavBar />
            <WeatherInfo
                cityChange={cityChange}
                setCityChange={setCityChange}
                setCityText={setCityText}
            />
            <Box
                sx={{
                    marginTop: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h3" color="#2565AE">
                    Weather:
                </Typography>
                <Typography variant="h6" >
                    {weather}
                </Typography>
                <Typography variant="h3" color="#2565AE">
                    Temperature:
                </Typography>
                <Typography variant="h6">
                    {temperature}
                </Typography>
            </Box>
        </div>
    );
}

export default NavPage;