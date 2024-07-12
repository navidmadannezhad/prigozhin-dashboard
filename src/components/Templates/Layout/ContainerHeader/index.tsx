import { FC } from "react";
import { Box, Typography } from "@mui/material";

interface ContainerHeaderProps {}

const ContainerHeader: FC<ContainerHeaderProps> = () => {
    return (
        <Box sx={{ width: "100%" }}>
            <Box sx={{ p: { xs: 3, lg: 6 } }}>
                <Typography
                    sx={{
                        fontSize: { xs: "1.25rem", lg: "2rem" },
                        fontWeight: "bold",
                    }}
                >
                    خوش اومدی یوگنی! 👋
                </Typography>
            </Box>
        </Box>
    );
}

export default ContainerHeader;