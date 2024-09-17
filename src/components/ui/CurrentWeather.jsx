import React, { useContext } from "react";

import WaterDropIcon from "@mui/icons-material/WaterDrop";
import AirIcon from "@mui/icons-material/Air";
import CompressIcon from "@mui/icons-material/Compress";
import { Box, Typography } from "@mui/material";

import { weatherContext } from "../../App";

const CurrentWeather = () => {
    const { setWeather, loading } = useContext(weatherContext);

    return (
        <Box
            sx={{
                bgcolor: "primary.main",
                p: 4,
                mt: 4,
                borderRadius: 3,
            }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant='h4' color='secondary'>
                    Current Weather
                </Typography>
            </Box>
            {!loading ? (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-around",
                    }}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography
                            variant='p'
                            color='secondary'
                            sx={{ mb: 2, mt: 2 }}>
                            {setWeather.location.name +
                                " - " +
                                setWeather.location.region +
                                " - " +
                                setWeather.location.country}
                        </Typography>
                        <Box sx={{ display: "flex" }}>
                            <Box
                                component='img'
                                src={setWeather.current.condition.icon}
                                alt='weather-icon'
                                sx={{
                                    width: "100px",
                                    height: "100px",
                                    p: "10px",
                                }}
                            />
                            <Typography
                                variant='p'
                                color='secondary'
                                sx={{ fontSize: 80 }}>
                                {setWeather.current.temp_c}°
                            </Typography>
                        </Box>
                        <Typography variant='p' color='secondary'>
                            {setWeather.current.condition.text}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 5,
                        }}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 1,
                            }}>
                            <Typography variant='h6' color='secondary'>
                                Feels Like {setWeather.current.feelslike_c}°
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 1,
                            }}>
                            <Typography
                                variant='p'
                                color='secondary'
                                sx={{ display: "flex" }}>
                                <WaterDropIcon />
                                Humidity: {setWeather.current.humidity}%
                            </Typography>
                            <Typography
                                variant='p'
                                color='secondary'
                                sx={{ display: "flex" }}>
                                <AirIcon />
                                {setWeather.current.gust_kph} kph
                            </Typography>
                            <Typography
                                variant='p'
                                color='secondary'
                                sx={{ display: "flex" }}>
                                <CompressIcon />
                                {setWeather.current.pressure_mb} hpa
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            ) : (
                <Box> Loading ... </Box>
            )}
        </Box>
    );
};

export default CurrentWeather;
