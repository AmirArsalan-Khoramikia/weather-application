import React, { useContext } from "react";

import { Box, Typography } from "@mui/material";
import { weatherContext } from "../../App";
import Day from "./Day";

const ExtendedForecast = () => {
    const { setWeather, loading } = useContext(weatherContext);

    return !loading ? (
        <Box
            sx={{
                bgcolor: "secondary.dark",
                p: 3,
                mt: 3,
                borderRadius: 3,
            }}>
            <Typography variant='h4' color='secondary.main'>
                extended forecast
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-around",overflowY: "auto"  }}>
                {setWeather.forecast.forecastday.map((data , index) => (
                    <Day
                        key={index}
                        Title={data.date}
                        WetherCondition={data.day.condition.text}
                        MinTemp={data.day.mintemp_c}
                        MaxTemp={data.day.maxtemp_c}
                        WetherImage={data.day.condition.icon}
                    />
                ))}
            </Box>
        </Box>
    ) : (
        <Box></Box>
    );
};

export default ExtendedForecast;