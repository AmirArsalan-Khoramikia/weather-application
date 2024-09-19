import React from "react";
import { Box, Button, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const Title = (handelChangeTheme) => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <Typography variant="h4" sx={{ color: "secondary.main" }}>
                Weather App
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center" }}>
                <FormControlLabel
                    onChange={handelChangeTheme.handelChangeTheme}
                    sx={{ mr: 1 }}
                    labelPlacement="start"
                    control={<Switch defaultChecked color="secondary" />}
                />

                <Button
                    component="a"
                    href="https://github.com/AmirArsalan-Khoramikia/weather-application"
                    target="_blank"
                >
                    <GitHubIcon
                        sx={{ fontSize: 45, color: "secondary.main" }}
                    />
                </Button>
            </Box>
        </Box>
    );
};

export default Title;
