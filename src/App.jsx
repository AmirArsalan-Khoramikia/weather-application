import React, { createContext, useState } from "react";
import { ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "./theme/theme.js";

import { Box } from "@mui/material";

import Title from "./components/ui/Title.jsx";
import CurrentWeather from "./components/ui/CurrentWeather.jsx";
import Search from "./components/ui/Search.jsx";
import ExtendedForecast from "./components/ui/ExtendedForecast.jsx";

import { useEffect } from "react";
import axios from "axios";

// --------------------CONTEXT----------------------
export const weatherContext = createContext();
// -----------------------------------------------

function App() {
    const [setWeather, setSetWeather] = useState();
    const [loading, setLoading] = useState(true);
    const [city, setCity] = useState("mashhad");

    const citySearcg =(data)=>{
        setCity(data)
    }

    // --------------------GETWEATHER----------------------
    useEffect(() => {
        getWeather();
    }, []);

    useEffect(() => {
        getWeather();
    }, [city]);

    const getWeather = async () => {
        try {
            const response = await axios.get(
                `http://api.weatherapi.com/v1/forecast.json?key=746cacc8eef5448c9bc124132240909&q=${city}&days=7&aqi=no&alerts=no`
            );
            setSetWeather(response.data);
            setLoading(false);
        } catch (error) {
            console.error(
                "Error fetching weather data:",
                error.response ? error.response.data : error.message
            );
        }
    };
    // -----------------------------------------------

    // --------------------THEME----------------------
    const [mode, setMode] = useState("dark");
    const handelChangeTheme = () => {
        setMode(mode === "dark" ? "light" : "dark");
    };
    const theme = mode === "dark" ? darkTheme : lightTheme;
    // -----------------------------------------------

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    bgcolor: "primary.dark",
                    overflowX:"auto"
                }}
                >
                <Box
                    sx={{
                        height: "100vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    >
                    <Box
                        sx={{
                            scale: { xs: "60%", sm: "70%", md: "80%", lg: "90%"  },
                            width: {
                                xs: "95vw",
                                sm: "80vw",
                                md: "70vw",
                                lg: "60vw",
                            },
                        }}
                    >
                        <weatherContext.Provider
                            value={{
                                setWeather,
                                setSetWeather,
                                loading,
                            }}
                        >
                            <Title handelChangeTheme={handelChangeTheme} />
                            <Search citySearcg={citySearcg}/>
                            <CurrentWeather />
                            <ExtendedForecast />
                        </weatherContext.Provider>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default App;
