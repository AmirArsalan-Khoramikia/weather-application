import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { weatherContext } from "../../App";

const Title = (handelChangeTheme) => {
    const { setWeather } = useContext(weatherContext);

    // const time = () => {
    //     setInterval(() => {
    //         return setWeather.location.localtime;
    //     }, 1000);
    // };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <Typography variant="h4" sx={{ color: "title.main" }}>
                Weather App
            </Typography>

            {/* <Typography variant="p" color="secondary">
                {time}
            </Typography> */}

            <Box sx={{ display: "flex", alignItems: "center" }}>
                <FormControlLabel
                    onChange={handelChangeTheme.handelChangeTheme}
                    sx={{ mr: 1 }}
                    labelPlacement="start"
                    control={<Switch defaultChecked color="secondary"/>}
                />
                <GitHubIcon sx={{ fontSize: 45, color: "title.main" }} />
            </Box>
        </Box>
    );
};

export default Title;
