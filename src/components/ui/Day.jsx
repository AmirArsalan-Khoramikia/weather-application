import { Box, Typography } from "@mui/material";
import React from "react";

const Day = ({ Title, WetherCondition, MinTemp , MaxTemp ,  WetherImage }) => {
    console.log(WetherImage);
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                p: 2,
                mt: 2,
                gap: 0.5,
            }}>
            <Typography
                variant='hp'
                color='secondary'
                sx={{ fontWeight: "bold" }}>
                {Title}
            </Typography>
            <Box
                component='img'
                src={WetherImage}
                alt='weather-icon'
                sx={{
                    width: "100px",
                    height: "100px",
                    p: "10px",
                }}
            />
            <Typography
                variant='hp'
                color='secondary'
                sx={{ fontWeight: "bold" }}>
                {WetherCondition}
            </Typography>
            <Typography
                variant='hp'
                color='secondary'
                sx={{ fontWeight: "bold" }}>
                {MinTemp + " | " + MaxTemp}
            </Typography>
        </Box>
    );
};

export default Day;
