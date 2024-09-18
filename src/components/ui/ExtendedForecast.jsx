import React, { useContext } from "react";

import { Box, Typography } from "@mui/material";
import { weatherContext } from "../../App";
import Day from "./Day";

const ExtendedForecast = () => {
    const { setWeather, loading } = useContext(weatherContext);
    if (!loading) {
        console.log(setWeather);
        console.log(setWeather.forecast.forecastday);
        // console.log(setWeather.forecast.forecastday[0]);
        // console.log(setWeather.forecast.forecastday[0].date);
        // console.log(setWeather.forecast.forecastday[0].day.maxtemp_c);
        // console.log(setWeather.forecast.forecastday[0].day.mintemp_c);
        // console.log(setWeather.forecast.forecastday[0].day.condition.text);
        // console.log(setWeather.forecast.forecastday[0].day.condition.icon);
    }

    return !loading ? (
        <Box
            sx={{
                bgcolor: "secondary.main",
                p: 3,
                mt: 3,
                borderRadius: 3,
            }}>
            <Typography variant='h4' color='title.main'>
                extended forecast
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-around",overflowY: "auto"  }}>
                {setWeather.forecast.forecastday.map((data , index) => (
                    <Day
                        key={index

                        }
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
        <Box>sdsf</Box>
    );
};

export default ExtendedForecast;






//     console.log(data);
//     console.log(data.date);
//     console.log(data.day.maxtemp_c);
//     console.log(data.day.mintemp_c);
//     console.log(data.day.condition.text);
//     console.log(data.day.condition.icon);
