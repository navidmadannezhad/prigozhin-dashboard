import { FC } from "react";
import { Box, Typography, useTheme } from "@mui/material";

interface QuantityHolderProps{
    quantityTitle: string;
    quantityValue: string | number;
};

const QuantityHolder: FC<QuantityHolderProps> = (props) => {
    const theme = useTheme();

    return(
        <Box
            sx={{
                backgroundColor: theme.palette.primary.ultraLight,
                display: "flex",
                border: theme => `2px solid ${theme.palette.primary.light}`,
                alignItems: 'center',
                width: "fit-content",
                gap: theme => theme.spacing(1),
                px: theme => theme.spacing(2),
                borderRadius: theme => theme.spacing(6),
            }}
        >
            <Typography
                sx={{ 
                    color: theme.palette.primary.main,
                    fontVariationSettings: "'wght' 500",
                }}
            >
                {props.quantityValue?.toLocaleString("fa-IR")}
            </Typography>
            <Typography
                sx={{ 
                    color: theme.palette.primary.main,
                    fontVariationSettings: "'wght' 500"
                }}
            >
                {props.quantityTitle}
            </Typography>
        </Box>
    )
}

export default QuantityHolder;