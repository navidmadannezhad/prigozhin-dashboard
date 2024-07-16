import { FC, useState } from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { useSelector, useDispatch } from "react-redux";
import { setThemeState } from "@redux/slices/commonSlice";

interface ThemeTogglerButtonProps {}

const ThemeTogglerButton: FC<ThemeTogglerButtonProps> = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const themeState = useSelector((state: any) => state.common.themeState);

    const toggleThemeMode = () => {
        themeState === "light" ? dispatch(setThemeState("dark")) : dispatch(setThemeState("light"));
    }

    return (
        <Box
            sx={{
                position: { lg: "static", xs: "absolute" },
                bottom: "20px",
                right: "20px",
                borderRadius: "50%",
                border: theme.palette.mode === 'dark' ? `2px solid ${theme.palette.primary.main}` : `2px solid ${theme.palette.secondary.light}`,
                bgcolor: theme.palette.mode === 'dark' ? theme.palette.background.paper : theme.palette.background.default,
                "& .MuiIconButton-root": {
                    width: "40px",
                    height: "40px",
                    padding: 0,
                },
            }}
        >
            <IconButton
                onClick={toggleThemeMode}
                aria-label="Toggle dark mode"
                sx={{
                    "&:hover": {
                        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.secondary.light,
                    },
                }}
            >
                {theme.palette.mode === 'dark' ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
            </IconButton>
        </Box>
    );
}

export default ThemeTogglerButton;
