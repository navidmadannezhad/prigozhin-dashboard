import { FC } from "react";
import { Grid, Typography, useTheme } from "@mui/material";
import { ArrowDownIcon, ArrowUpIcon } from "./Icons";
import { RatioMode } from "@models/models";
import { enToFaNum } from "@utils/commonUtils";

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
                px: 1,
                maxWidth: 80,
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: props.ratioMode === RatioMode.ASC ? theme.palette.success.ultraLight : theme.palette.warning.ultraLight,
                borderWidth: "3px",
                borderStyle: "solid",
                border: theme => `3px solid ${props.ratioMode === RatioMode.ASC ? theme.palette.success.light : theme.palette.warning.light}`,
                borderRadius: "40px"
            }}
        >
            <Typography
                sx={{
                    color: props.ratioMode === RatioMode.ASC ? theme.palette.success.dark : theme.palette.warning.dark
                }}
            >
                {enToFaNum(props.ratioValue)}%
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
