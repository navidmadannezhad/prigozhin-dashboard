import { FC, useState } from "react";
import { headerOptions } from "@configs/settings";
import { Link } from "react-router-dom";
import type { HeaderOption } from "@models/models";
import { Accordion, Box, Grid, AccordionSummary, AccordionDetails, Drawer, Button, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LogoutIcon from '@mui/icons-material/Logout';
import Logo from "@public/images/logo.png";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { HeaderOptionWrapper } from "@components/Major/AidingElements";

const MobileNav: FC = () => {
    const [menuOpened, setMenuOpened] = useState(false);

    return(
        <Box sx={{ width: "100%" }}>
            <Grid container alignItems="center" justifyContent="space-between" p={3}>
                <Button onClick={() => {setMenuOpened(true)}}>
                    <MenuOutlinedIcon />
                </Button>
                <img
                    src={Logo}
                    alt="logo"
                    style={{ width: "80px" }}
                />
            </Grid>
            <Drawer
                anchor='left'
                open={menuOpened}
                onClose={() => {setMenuOpened(false)}}
                PaperProps={{
                    sx: {
                      width: "100%",
                      maxWidth: "400px"
                    },
                  }}
            >
                <Grid container gap={2} justifyContent="center" mt={8} sx={{ height: "80vh", alignContent:"flex-start", position: "relative" }}>
                    {headerOptions.map((option: HeaderOption, i: number) => (
                        <>
                            {
                                option.activeRoute && 
                                option.presentInMenu && (
                                    <Grid item xs={8} key={i}>
                                        {option.subOptions ? (
                                            <Accordion
                                                disableGutters={true}
                                                sx={{ 
                                                    width: "100%", 
                                                    borderRadius: theme => theme.spacing(2) 
                                                }}
                                            >
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon/>}
                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header"
                                                    sx={{ padding: "10px" }}
                                                >
                                                    <Box
                                                        sx={{
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: "10px",
                                                            "& p":{
                                                                fontVariationSettings: "'wght' 600",
                                                                fontSize: "1.1rem",
                                                                color: (theme) => theme.palette.secondary.dark,
                                                            }
                                                        }}
                                                    >
                                                        {option.icon}
                                                        <Typography sx={{ fontSize: "0.8rem" }}>
                                                            {option.name}
                                                        </Typography>
                                                    </Box>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    {option.subOptions.map((subOption: Partial<HeaderOption>, i: number) => (
                                                        <>
                                                            {
                                                                subOption.activeRoute && 
                                                                subOption.presentInMenu &&
                                                            (
                                                                <Link
                                                                    to={subOption.link}
                                                                    key={i}
                                                                    style={{ width: "100%" }}
                                                                >
                                                                    <HeaderOptionWrapper active={location.pathname === subOption.link}>
                                                                        <Typography sx={{ fontSize: "0.8rem" }}>
                                                                            {subOption.name}
                                                                        </Typography>
                                                                    </HeaderOptionWrapper>
                                                                </Link>
                                                            )}
                                                        </>
                                                    ))}
                                                </AccordionDetails>
                                            </Accordion>
                                        ) : (
                                            <Link
                                                to={option.link}
                                                key={i}
                                            >
                                                <HeaderOptionWrapper active={location.pathname === option.link}>
                                                    {option.icon}
                                                    <Typography sx={{ fontSize: "0.8rem" }}>
                                                        {option.name}
                                                    </Typography>
                                                </HeaderOptionWrapper>
                                            </Link>
                                        )}
                                    </Grid>
                                )
                            }
                        </>
                    ))}

                    <Grid item xs={8} sx={{ position: "absolute", bottom: "0", width: "100%" }}>
                        <Button
                            sx={{ display: "flex", justifyContent: "center", gap: theme => theme.spacing(1), width: "100%", maxWidth: "250px" }}
                            variant="outlined"
                            color="error"
                        >
                            <LogoutIcon sx={{ fill: theme => theme.palette.error.main }} />
                            <Typography color="error" sx={{ fontSize: "0.8rem" }}>خروج</Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Drawer>
        </Box>
    )
}

export default MobileNav;