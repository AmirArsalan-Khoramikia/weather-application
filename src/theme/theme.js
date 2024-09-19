import { createTheme } from "@mui/material";

const lightTheme = createTheme({
    palette: {
        primary: { main: "#fff" },
        secondary: {
            dark: "#BBE1FA",
            main: "#03346E",
            light: "#6EACDA",
            contrastText: "#021526",
        },
    },
});

const darkTheme = createTheme({
    palette: {
        primary: { main: "#021526" },
        secondary: {
            dark: "#03346E",
            main: "#6EACDA",
            light: "#BBE1FA",
            contrastText: "#E2E2B6",
        },
    },
});

export { darkTheme, lightTheme };
