import { FC } from "react";
import { Box } from "@mui/material";

const SearchBar: FC = () => {
    return(
        <Box
            sx={{
                border: theme => `2px solid ${theme.palette.secondary.light}`,
                borderRadius: 1,
                backgroundColor: "black",
                color: "white",
                display: "flex",
                alignItems: "center",
                p: 1
            }}
        >
            <input type="text" placeholder="بگرد..." />
        </Box>
    )
}

export default SearchBar;