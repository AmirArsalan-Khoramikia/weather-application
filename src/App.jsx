import { Box, Typography } from "@mui/material";
import Title from "./components/ui/Title.jsx";
import Search from "./components/ui/Search.jsx";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect } from "react";
import axios from "axios";

function App() {
    // useEffect(() => {
    //     getWeather();
    // }, []);
    // const getWeather = async () => {
    //     const wether = await axios.get(
    //         "https://api.weatherapi.com/v1/forecast.json?key=746cacc8eef5448c9bc124132240909&q=Mashhad&days=7&aqi=no&alerts=no"
    //     );
    //     console.log(wether);
    // };
    return (
        <Box sx={{ width: "100vw", height: "100vh", bgcolor: "primary.dark" }}>
            <Box sx={{ width: "60vw", m: "0 auto" }}>
                <Title />
                <Search />
                <Box sx={{ bgcolor: "primary.main", p: 3 }}>
                    <Typography variant="h6" color="secondary">
                        Current Weather
                    </Typography>
                    <Box>
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                            <Typography variant="p" color="secondary">
                                Paris
                            </Typography>
                            <Box sx={{ display: "flex" }}>
                                <SearchIcon
                                    sx={{ fontSize: 80 }}
                                    color="secondary"
                                />
                                <Typography
                                    variant="p"
                                    color="secondary"
                                    sx={{ fontSize: 80 }}
                                >
                                    24
                                </Typography>
                            </Box>
                            <Typography variant="p" color="secondary">
                                Loading
                            </Typography>
                        </Box>
                        <Box></Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default App;
