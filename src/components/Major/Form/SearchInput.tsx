import { FC } from "react";
import { SearchIcon } from "../Icons";
import { Box, styled } from "@mui/material";
import { RoundedButton } from "../AidingElements";

interface SearchInput{};

const SearchInput: FC<SearchInput> = (_props) => {
    return(
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: theme => theme.spacing(1.5),
                border: theme => `2px solid ${theme.palette.secondary.light}`,
                p: theme => theme.spacing(1),
                width: "100%"
            }}
        >
            <CustomInput
                placeholder="جستجو..."
            />
            <RoundedButton>
                <SearchIcon />
            </RoundedButton>
        </Box>
    )
}

const CustomInput = styled('input')(({ theme }) => ({
    border: "none",
    backgroundColor: "unset",
    color: theme.palette.secondary.contrastText,
    "&:focus":{
        outline: "none"
    },
}))

export default SearchInput;