import { FC } from "react";
import { styled, Grid, Typography } from "@mui/material";
import { ArrowAscendingIcon } from "./Icons";
import RatioHolder from "./RatioHolder";
import { RatioMode } from "@models/models";

interface MiniReportProps {
    title: string;
    icon: string;
    change_ratio: string | number;
    value: string;
}

const MiniReport: FC<Partial<MiniReportProps>> = (_props) => {
    return (
        <MiniReportWrapper container sx={{ gap: 3, flexDirection: "column", borderRadius: 2, p: 3, width: "100%" }}>
            <Grid container sx={{ width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                <Typography
                    sx={{ fontVariationSettings: "'wght' 500", fontSize: "1.1rem" }}
                >
                    درآمد این ماه
                </Typography>
                <IconWrapper container sx={{ borderRadius: "50%", width: 40, height: 40, alignItems: "center", justifyContent: "center" }}>
                    <ArrowAscendingIcon />
                </IconWrapper>
            </Grid>
            <Grid container sx={{ width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                <RatioHolder
                    ratioMode={RatioMode.ASC}
                    ratioValue="67"
                />
                <Typography
                    sx={{ fontVariationSettings: "'wght' 700", fontSize: "1.3rem" }}
                >
                    286000 تومان
                </Typography>
            </Grid>
        </MiniReportWrapper>
    );
}

const MiniReportWrapper = styled(Grid)(({ theme }) => ({
    border: `2px solid ${theme.palette.secondary.light}`,
    boxShadow: theme.palette.secondary.shadow
}));

const IconWrapper = styled(Grid)(({ theme }) => ({
    boxShadow: `0px 0px 0px 0px ${theme.palette.success.light}, 0px 0px 0px 5px ${theme.palette.success.ultraLight}`,
    backgroundColor: theme.palette.success.light
}));

export default MiniReport;
