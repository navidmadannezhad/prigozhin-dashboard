import { FC } from "react";
import { Grid, Typography, useTheme } from "@mui/material";
import { ArrowDownIcon, ArrowUpIcon } from "./Icons";
import { RatioMode } from "@models/models";

interface RatioHolderProps {
    ratioMode: RatioMode;
    ratioValue: string;
}

const RatioHolder: FC<RatioHolderProps> = (props) => {
    const theme = useTheme();

    return (
        <Grid
            container
            sx={{
                px: 2,
                maxWidth: 100,
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: props.ratioMode === RatioMode.ASC ? theme.palette.success.light : theme.palette.warning.light,
                borderWidth: "3px",
                borderStyle: "solid",
                border: theme => `3px solid ${props.ratioMode === RatioMode.ASC ? theme.palette.success.main : theme.palette.warning.main}`,
                borderRadius: "40px"
            }}
        >
            <Typography
                sx={{
                    color: props.ratioMode === RatioMode.ASC ? theme.palette.success.dark : theme.palette.warning.dark
                }}
            >
                {props.ratioValue}%
            </Typography>
            {props.ratioMode === RatioMode.ASC ? (
                <ArrowUpIcon
                    stroke={theme.palette.success.dark}
                    sx={{
                        width: "15px",
                        height: "15px",
                    }}
                />
            ) : (
                <ArrowDownIcon
                    stroke={theme.palette.warning.dark}
                    sx={{
                        width: "15px",
                        height: "15px",
                    }}
                />
            )}
        </Grid>
    );
}

export default RatioHolder;
