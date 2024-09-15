import React from "react";
import { Box, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const Title = (handelChangeTheme) => {
    return (
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h4" sx={{ color: "secondary.main" }}>
                Weather App
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <FormControlLabel
                    onChange={handelChangeTheme.handelChangeTheme}
                    sx={{ mr: 1 }}
                    labelPlacement="start"
                    control={<Switch defaultChecked />}
                    label="Theme:"
                />
                <GitHubIcon sx={{ fontSize: 45, color: "secondary.main" }} />
            </Box>
        </Box>
    );
};

export default Title;
