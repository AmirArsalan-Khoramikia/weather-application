import React, { useContext } from "react";

import WaterDropIcon from "@mui/icons-material/WaterDrop";
import AirIcon from "@mui/icons-material/Air";
import CompressIcon from "@mui/icons-material/Compress";
import { Box, Typography } from "@mui/material";

import { weatherContext } from "../../App";
import { BeatLoader } from "react-spinners";

const CurrentWeather = () => {
    const { setWeather, loading } = useContext(weatherContext);

    return (
        <Box
            sx={{
                bgcolor: "secondary.dark",
                p: 3,
                mt: 3,
                borderRadius: 3,
            }}
        >
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="h4" color="secondary.main">
                    Current Weather
                </Typography>
            </Box>
            {!loading ? (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-around",
                    }}
                >
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography
                            variant="p"
                            color="secondary.contrastText"
                            sx={{ mb: 2, mt: 2 }}
                        >
                            {setWeather.location.name +
                                " - " +
                                setWeather.location.region +
                                " - " +
                                setWeather.location.country}
                        </Typography>
                        <Box sx={{ display: "flex" }}>
                            <Box
                                component="img"
                                src={setWeather.current.condition.icon}
                                alt="weather-icon"
                                sx={{
                                    width: "100px",
                                    height: "100px",
                                    p: "10px",
                                }}
                            />
                            <Typography
                                variant="p"
                                color="secondary.main"
                                sx={{ fontSize: 80 }}
                            >
                                {setWeather.current.temp_c}°
                            </Typography>
                        </Box>
                        <Typography variant="p" color="secondary.contrastText">
                            {setWeather.current.condition.text}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            display: { xs: "none", sm: "block" },
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 1,
                                mb: 5,
                            }}
                        >
                            <Typography
                                variant="h6"
                                color="secondary.contrastText"
                            >
                                Feels Like {setWeather.current.feelslike_c}°
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 1,
                            }}
                        >
                            <Typography
                                variant="p"
                                color="secondary.contrastText"
                                sx={{ display: "flex" }}
                            >
                                <WaterDropIcon
                                    sx={{ color: "secondary.main", mr: 2 }}
                                />
                                Humidity: {setWeather.current.humidity}%
                            </Typography>
                            <Typography
                                variant="p"
                                color="secondary.contrastText"
                                sx={{ display: "flex" }}
                            >
                                <AirIcon
                                    sx={{ color: "secondary.main", mr: 2 }}
                                />
                                {setWeather.current.gust_kph} kph
                            </Typography>
                            <Typography
                                variant="p"
                                color="secondary.contrastText"
                                sx={{ display: "flex" }}
                            >
                                <CompressIcon
                                    sx={{ color: "secondary.main", mr: 2 }}
                                />
                                {setWeather.current.pressure_mb} hpa
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            ) : (
                <Box sx={{textAlign:"center" }}>
                    <BeatLoader 
                    color="#6EACDA"
                    size="20"
                    />
                </Box>
            )}
        </Box>
    );
};

export default CurrentWeather;
