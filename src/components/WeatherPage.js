import React from "react";
import NavBar from "./NavBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Grid from "@mui/material/Grid";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function WeatherPage(props) {

    return (
        <div className="NavPage">
            <NavBar />
            <Box
                sx={{
                    marginTop: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Card>
                    <CardContent>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Box>
                                <Grid container>
                                    <Grid item lg={2}
                                          sx={{mt: 1}}
                                    >
                                        <ThunderstormIcon />
                                    </Grid>
                                    <Grid item
                                        lg={10}
                                    >
                                        <Typography variant="h6" color="#2565AE" gutterBottom component="div">
                                            Search for a city to get weather data
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Paper
                                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                            >
                                <InputBase
                                    sx={{ m: 1, flex: 1 }}
                                    placeholder="Enter city name"
                                    onKeyDown={(e) => {
                                        if(e.key === "Enter"){
                                            props.setCityText(props.cityChange)
                                        }
                                    }}
                                    onChange={(event) => {
                                        props.setCityChange(event.target.value)
                                    }}
                                    title="City name must be written without spaces"
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
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    mt: 3
                                }}
                            >
                                <Typography variant="h3" color="#2565AE">
                                    Weather:
                                </Typography>
                                <Typography variant="h6" >
                                    {props.weather}
                                </Typography>
                                <Typography variant="h3" color="#2565AE">
                                    Temperature:
                                </Typography>
                                <Typography variant="h6">
                                    {props.temperature}
                                </Typography>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </div>
    );
}