import NavBar from "./NavBar";
import React, {useEffect, useState} from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import Typography from "@mui/material/Typography";

export default function WeatherInfo(props) {

    return (
        <div className="WeatherInfo">
            <Box
                sx={{
                    marginTop: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h5" color="#2565AE" gutterBottom component="div">
                    Search for a city to get weather data
                </Typography>
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Enter city name"
                        inputProps={{ 'aria-label': 'search google maps' }}
                        onChange={(event) => {
                            props.setCityChange(event.target.value)
                        }}
                        title="City text must be written without spaces"
                    />
                    <IconButton sx={{ p: '10px' }}
                                //aria-label="search"
                                onClick={() => {
                                    props.setCityText(props.cityChange)
                                }}
                    >
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </Box>
        </div>
    );
}