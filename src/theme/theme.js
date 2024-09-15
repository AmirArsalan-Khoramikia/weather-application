import { createTheme } from "@mui/material";

const lightTheme = createTheme({
    palette: {
        // mode: "light",
        primary: { main: "#5fae7777" },
        secondary: { main: "#abc564" },
    },
});

const darkTheme = createTheme({
    palette: {
        // mode: "dark",
        primary: { main: "#16325B" },
        secondary: { main: "#227B94" },
    },
});

export { darkTheme, lightTheme };
