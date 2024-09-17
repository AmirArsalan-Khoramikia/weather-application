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

    // --------------------GETWEATHER----------------------
    useEffect(() => {
        getWeather();
    }, []);

    const getWeather = async () => {
        try {
            const response = await axios.get(
                "http://api.weatherapi.com/v1/forecast.json?key=746cacc8eef5448c9bc124132240909&q=mashhad&days=7&aqi=no&alerts=no"
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
                    width: "100vw",
                    height: "100vh",
                    bgcolor: "primary.dark",
                }}>
                <Box
                    sx={{
                        width: "50vw",
                        m: "0 auto",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100vh",
                    }}>
                    <Box>
                        <weatherContext.Provider
                            value={{
                                setWeather,
                                setSetWeather,
                                loading,
                            }}>
                            <Title handelChangeTheme={handelChangeTheme} />
                            <Search />
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
