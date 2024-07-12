import { FC } from "react";
import { headerOptions } from "@configs/settings";
import Logo from "@public/images/logo.png";
import type { HeaderOption } from "@models/models";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Box, styled, Typography, Button } from "@mui/material";
import { HeaderOptionWrapper } from "@components/Major/AidingElements";
import { ExternalLinkIcon, EarthIcon, LogoutIcon } from "@components/Major/Icons";
import { useDispatch } from "react-redux";
import { resetAuthState } from "@redux/slices/authSlice";

const DesktopNav: FC = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <DesktopNavWrapper>
            <LogoContainer>
                <img
                    src={Logo}
                    alt="logo"
                    style={{ width: "150px" }}
                />
            </LogoContainer>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "10px",
                    width: "100%",
                    height: { lg: "60vh", xs: "90vh" },
                    overflow: "auto",
                }}
            >
                {headerOptions.map((option: HeaderOption, i: number) => (
                    <>
                        {option.activeRoute && option.presentInMenu && (
                            <>
                                {option.subOptions ? (
                                    <Accordion
                                        key={i}
                                        sx={{ width: "100%", borderRadius: "8px" }}
                                        disableGutters
                                    >
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                            sx={{ py: 0, px: "10px" }}
                                        >
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "10px",
                                                    "& p": {
                                                        fontVariationSettings: "'wght' 600",
                                                        fontSize: "1.1rem",
                                                        color: "secondary.dark",
                                                    },
                                                }}
                                            >
                                                {option.icon}
                                                <Typography>
                                                    {option.name}
                                                </Typography>
                                            </Box>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            {option.subOptions.map((subOption, j: number) => (
                                                subOption.activeRoute &&
                                                subOption.presentInMenu && (
                                                    <Link
                                                        to={subOption.link}
                                                        key={j}
                                                        style={{ width: "100%" }}
                                                    >
                                                        <HeaderOptionWrapper active={location.pathname === subOption.link}>
                                                            <Typography>
                                                                {subOption.name}
                                                            </Typography>
                                                        </HeaderOptionWrapper>
                                                    </Link>
                                                )
                                            ))}
                                        </AccordionDetails>
                                    </Accordion>
                                ) : (
                                    <Link
                                        to={option.link}
                                        key={i}
                                        style={{ width: "100%" }}
                                    >
                                        <HeaderOptionWrapper active={location.pathname === option.link}>
                                            {option.icon}
                                            <Typography>
                                                {option.name}
                                            </Typography>
                                        </HeaderOptionWrapper>
                                    </Link>
                                )}
                            </>
                        )}
                    </>
                ))}
            </Box>
            <Box
                sx={{
                    position: "absolute",
                    bottom: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    gap: "10px",
                    width: "92%",
                }}
            >
                <Button
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                    }}
                >
                    <EarthIcon />
                    <a href={import.meta.env.VITE_MAIN_SITE_URL} target="_blank">
                        <Typography sx={{ fontVariationSettings: "'wght' 600" }}>
                            مشاهده سایت
                        </Typography>
                    </a>
                    <ExternalLinkIcon />
                </Button>
                <ProfileWrapper>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                        }}
                    >
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                            <Typography
                                sx={{
                                    fontVariationSettings: "'wght' 500",
                                    fontSize: "0.9rem",
                                    color: "secondary.contrastText",
                                }}
                            >
                                مدیر سایت
                            </Typography>
                            <Typography
                                sx={{
                                    fontVariationSettings: "'wght' 500",
                                    fontSize: "0.8rem",
                                    color: "secondary.dark",
                                }}
                            >
                                سطح دسترسی: ادمین
                            </Typography>
                        </Box>
                    </Box>
                    <LogoutButton
                        onClick={() => {
                            dispatch(resetAuthState());
                            navigate("/login");
                        }}
                    >
                        <LogoutIcon />
                    </LogoutButton>
                </ProfileWrapper>
            </Box>
        </DesktopNavWrapper>
    );
};

const DesktopNavWrapper = styled(Box)(({ theme }) => ({
    padding: theme.spacing(3),
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing(3),
    position: "relative",
    borderRight: `2px solid ${theme.palette.secondary.light}`,
}));

const LogoContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: theme.spacing(3),
    width: "100%",
    borderBottom: `2px solid ${theme.palette.secondary.light}`,
}));

const ProfileWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(3, 0),
    width: "100%",
    borderTop: `2px solid ${theme.palette.secondary.light}`,
}));

const LogoutButton = styled(Button)(({ theme }) => ({
    borderRadius: "50%",
    minWidth: "unset",
    width: "40px",
    height: "40px",
    "&:hover": {
        backgroundColor: theme.palette.warning.light,
    },
}));

export default DesktopNav;
