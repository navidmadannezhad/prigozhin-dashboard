import { createTheme } from "@mui/material";
import commonTheme from "./commonTheme";
import { lightPalette } from "./palette";

declare module '@mui/material/styles' {
    interface SimplePaletteColorOptions {
        ultraLight?: string;
        light?: string;
        main: string;
        dark?: string;
        contrastText?: string;

        shadow?: string;
    }

    interface PaletteColor {
        ultraLight: string;
        light: string;
        main: string;
        dark: string;
        contrastText: string;

        shadow: string;
    }

    interface PaletteOptions {
        neutral: any;
    }
}

const lightTheme = createTheme({
    palette: {
        primary: {
            ultraLight: lightPalette.primary.ultraLight,
            light: lightPalette.primary.light,
            main: lightPalette.primary.main,
            dark: lightPalette.primary.dark,
            contrastText: lightPalette.primary.contrastText,
        },
        secondary: {
            ultraLight: lightPalette.secondary.ultraLight,
            light: lightPalette.secondary.light,
            main: lightPalette.secondary.main,
            dark: lightPalette.secondary.dark,
            shadow: lightPalette.secondary.shadow,
            contrastText: lightPalette.secondary.contrastText,
        },
        warning: {
            ultraLight: lightPalette.warning.ultraLight,
            light: lightPalette.warning.light,
            main: lightPalette.warning.main,
            dark: lightPalette.warning.dark,
        },
        success: {
            light: lightPalette.success.light,
            main: lightPalette.success.main,
            dark: lightPalette.success.dark,
        },
        neutral: {
            ultraLight: lightPalette.neutral.ultraLight,
            light: lightPalette.neutral.light,
            main: lightPalette.neutral.main,
            dark: lightPalette.neutral.dark,
        },
    },
}, commonTheme)

export default lightTheme;