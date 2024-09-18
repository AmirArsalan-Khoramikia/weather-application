import { createTheme } from "@mui/material";

const lightTheme = createTheme({
    palette: {
        primary: { main: "#5fae7777" },
        secondary: { main: "#abc564" },
    },
});

const darkTheme = createTheme({
    palette: {
        primary: { main: "#021526" , contrastText:"#E2E2B6" },
        secondary: { main: "#03346E" },
        title: { main: "#6EACDA" },
        text: { main: "#E2E2B6" },
        icon: { main: "#BBE1FA" },
    },
});

export { darkTheme, lightTheme };
