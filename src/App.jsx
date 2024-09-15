import React, { useState } from "react";
import { ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "./theme/theme.js";

import { Box } from "@mui/material";

import Title from "./components/ui/Title.jsx";
import Search from "./components/ui/Search.jsx";
import CurrentWeather from "./components/ui/CurrentWeather.jsx";
import ExtendedForecast from "./components/ui/ExtendedForecast.jsx";

import { useEffect } from "react";
import axios from "axios";

function App() {
    // useEffect(() => {
    //     getWeather();
    // }, []);

    // const getWeather = async () => {
    //     try {
    //         const response = await axios.get(
    //             "https://api.openweathermap.org/data/2.5/weather?q=Mashhad&appid=bfbd00855c827575966350bb7777edc6"
    //         );
    //         console.log(response.data);
    //     } catch (error) {
    //         console.error(
    //             "Error fetching weather data:",
    //             error.response ? error.response.data : error.message
    //         );
    //     }
    // };

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
                }}
            >
                <Box
                    sx={{
                        width: "50vw",
                        m: "0 auto",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100vh",
                    }}
                >
                    <Box>
                        <Title handelChangeTheme={handelChangeTheme} />
                        <Search />
                        <CurrentWeather />
                        <ExtendedForecast />
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default App;
