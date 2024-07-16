import { FC, ReactNode, useMemo } from "react";
import { Theme, ThemeProvider, createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { PaletteMode } from "@mui/material";
import { lightPalette, darkPalette, getCommonTheme } from "@styles/themes";
import type {} from '@mui/x-data-grid/themeAugmentation';

interface ThemeResolverProps{
    children?: ReactNode;
}

const ThemeResolver: FC<ThemeResolverProps> = (props) => {
    const mode = useSelector<PaletteMode>((state: any) => state.common.themeState);

    const theme: any = useMemo(() => {
        const selectedPalette = mode === "light" ? lightPalette : darkPalette;

        let themeInstance: Theme = createTheme({
            palette: {
                mode,
                ...selectedPalette,
            },
            ...getCommonTheme(selectedPalette)
        });
        
        return themeInstance;
    }, [mode])

    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    );
}

export default ThemeResolver;