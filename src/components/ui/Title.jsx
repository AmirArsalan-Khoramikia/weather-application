import React from "react";
import { Box, Typography } from "@mui/material";
import MaterialUISwitch from "../switch-button/switch-button";
import GitHubIcon from "@mui/icons-material/GitHub";

const Title = () => {
    return (
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h4" sx={{ color: "secondary.main" }}>
                Wether App
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <MaterialUISwitch />
                <GitHubIcon sx={{ fontSize: 45, color: "secondary.main" }} />
            </Box>
        </Box>
    );
};

export default Title;
