import { FC, ReactNode } from "react";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import ThemeTogglerButton from "./ThemeTogglerButton";

interface Props {
    children?: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
    const theme = useTheme();
    const belowLg = useMediaQuery(theme.breakpoints.down("lg"));

    return (
        <Grid
            container
            sx={{
                height: "100vh",
                alignItems: "start",
                justifyContent: {
                    lg: "space-between",
                },
            }}
        >
            {belowLg ? (
                <Grid item xs={12}>
                    <MobileNav />
                    <ThemeTogglerButton />
                </Grid>
            ) : (
                <Grid item lg={2}>
                    <DesktopNav />
                </Grid>
            )}

            <Grid
                item
                lg={10}
                xs={12}
                sx={{
                    height: "100vh",
                    overflow: "auto",
                }}
            >
                {children}
            </Grid>
        </Grid>
    );
};

export default Layout;