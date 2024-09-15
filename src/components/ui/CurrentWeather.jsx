import React from "react";


import SearchIcon from "@mui/icons-material/Search";

import NorthIcon from "@mui/icons-material/North";
import SouthIcon from "@mui/icons-material/South";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import AirIcon from "@mui/icons-material/Air";
import CompressIcon from "@mui/icons-material/Compress";
import { Box, Typography } from "@mui/material";


const CurrentWeather = () => {
    return (
        <Box
            sx={{
                bgcolor: "primary.main",
                p: 4,
                mt: 4,
                borderRadius: 3
            }}
        >
            <Typography variant="h4" color="secondary">
                Current Weather
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-around",
                }}
            >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography
                        variant="p"
                        color="secondary"
                        sx={{ mb: 2, mt: 2 }}
                    >
                        Paris
                    </Typography>
                    <Box sx={{ display: "flex" }}>
                        <SearchIcon sx={{ fontSize: 80 }} color="secondary" />
                        <Typography
                            variant="p"
                            color="secondary"
                            sx={{ fontSize: 80 }}
                        >
                            24°
                        </Typography>
                    </Box>
                    <Typography variant="p" color="secondary">
                        Loading
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 5,
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 1,
                        }}
                    >
                        <Typography variant="h6" color="secondary">
                            Feels Like24°
                        </Typography>
                        <Box>
                            <Typography
                                variant="p"
                                color="secondary"
                                sx={{ fontWeight: "bold" }}
                            >
                                <NorthIcon />
                                26°
                            </Typography>
                            <Typography
                                variant="p"
                                color="secondary"
                                sx={{ fontWeight: "bold" }}
                            >
                                <SouthIcon />
                                23°
                            </Typography>
                        </Box>
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
                            color="secondary"
                            sx={{ display: "flex" }}
                        >
                            <WaterDropIcon />
                            Humidity: 73%
                        </Typography>
                        <Typography
                            variant="p"
                            color="secondary"
                            sx={{ display: "flex" }}
                        >
                            <AirIcon />
                            18 kph
                        </Typography>
                        <Typography
                            variant="p"
                            color="secondary"
                            sx={{ display: "flex" }}
                        >
                            <CompressIcon />
                            1014 hpa
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default CurrentWeather;
