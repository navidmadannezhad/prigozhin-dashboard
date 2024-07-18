import { styled, Button, Box, Autocomplete, Select, Tab, Tabs, Grid } from "@mui/material";

export const HeaderOptionWrapper = styled(Button)<any>(({ theme, active }: any) => ({
    display: "flex",
    alignItems: "right",
    justifyContent: "flex-start",
    columnGap: "10px",
    width: "100%",
    transition: "all 0.15s",
    padding: "10px",
    borderRadius: "8px",
    backgroundColor: active ? theme.palette.secondary.light : "unset",

    "&:hover":{
        backgroundColor: theme.palette.secondary.light
    },

    "& p":{
        fontVariationSettings: "'wght' 600",
        fontSize: "1.1rem",
    }
}))

export const PageWrapper = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    rowGap: "20px",
    padding: "30px"
}))

export const RoundedButton = styled(Button)(() => ({
    "& , & span":{
        minWidth: "unset",
        width: "30px",
        height: "30px",
        borderRadius: "50%"
    }
}))

export const SimpleInputStyled = styled('input')<any>(({ theme, filled, disabled }: any) => ({
    padding: "8px",
    borderRadius: "8px",
    border: "none",
    transition: "all 0.25s",
    width: "100%",
    opacity: disabled ? "0.8" : "1",
    outline: `2px solid ${filled ? theme.palette.secondary.dark : theme.palette.secondary.light}`,
    backgroundColor: `${disabled ? theme.palette.secondary.light : "unset"}`,
    "&:focus":{
        outline: `2px solid ${theme.palette.secondary.dark}`
    },
    color: theme.palette.secondary.contrastText,
} as any))

export const ColorInputStyled = styled('input')<any>(({ theme, filled, disabled }: any) => ({
    padding: "8px",
    borderRadius: "8px",
    transition: "all 0.25s",
    width: "100%",
    border:"none",
    outline: `2px solid ${filled ? theme.palette.secondary.dark : theme.palette.secondary.light}`,
    backgroundColor: theme.palette.secondary.light,
    "&:focus":{
        outline: `2px solid ${theme.palette.secondary.dark}`
    },
} as any))

export const TextareaStyled = styled('textarea')<any>(({ theme, filled, disabled }: any) => ({
    padding: "8px",
    borderRadius: "8px",
    border: "none",
    transition: "all 0.25s",
    width: "100%",
    opacity: disabled ? "0.8" : "1",
    outline: `2px solid ${filled ? theme.palette.secondary.dark : theme.palette.secondary.light}`,
    backgroundColor: `${disabled ? theme.palette.secondary.light : "unset"}`,
    "&:focus":{
        outline: `2px solid ${theme.palette.secondary.dark}`
    },
    resize: "none",
    color: theme.palette.secondary.contrastText,
} as any))

export const InputErrorWrapper = styled(Box)(({ theme }) => ({
    fontSize: "0.7rem",
    backgroundColor: theme.palette.warning.main,
    color: theme.palette.warning.contrastText,
    padding: "4px",
    borderRadius: "5px",
    transition: "all 0.25s",
    width: "100%"
}))

export const StyledAutocomplete = styled(Autocomplete)<any>(({ theme, filled, disabled }: any) => ({
    // transition: "all 0.25s",
    width: "100%",
    opacity: disabled ? "0.8" : "1",
    "& fieldset":{
        border: `2px solid ${filled ? theme.palette.secondary.dark : theme.palette.secondary.light}`,
        borderRadius: "8px",
    },
    "&:hover fieldset":{
        border: `2px solid ${theme.palette.secondary.dark}`,
    },
    backgroundColor: `${disabled ? theme.palette.secondary.light : "unset"}`,
} as any))

export const StyledSelect = styled(Select)<any>(({ theme, filled, disabled }: any) => ({
    width: "100%",
    opacity: disabled ? "0.8" : "1",
    "& fieldset":{
        border: `2px solid ${filled ? theme.palette.secondary.dark : theme.palette.secondary.light}`,
        borderRadius: "8px",
    },
    "&:hover fieldset":{
        border: `2px solid ${theme.palette.secondary.dark}`,
    },
    backgroundColor: `${disabled ? theme.palette.secondary.light : "unset"}`,
} as any))

export const StyledTabs = styled(Tabs)<any>(({ theme, disabled }: any) => ({
    backgroundColor: theme.palette.secondary.light,
    border: `1.5px solid ${ theme.palette.secondary.light }`,
    borderRadius: "10px",
    minHeight: "unset",
    height: "45px",
    
    // for positioning indicator
    "& .MuiTabs-scroller":{
        display: "flex",
        alignItems: "center",
        position: "relative",
    },

    "& .MuiTabs-indicator":{
        height: "35px",
        bottom: "unset",
        backgroundColor: "white",
        borderRadius: "8px",
        boxShadow: `0px 2px 5px rgba(0,0,0,0.1)`,
        zIndex: "89",
    }
} as any))

export const StyledTab = styled(Tab)<any>(({ theme, filled, disabled }: any) => ({
    padding: "10px",
    minWidth: "unset",
    margin: "5px",
    fontFamily: "IRANYekanXVF",
    color: theme.palette.secondary.constrastText,
    zIndex: "90",
    position: "relative",
    fontSize: "0.8rem",
    "& span": { display: "none" }
} as any))

export const IconWrapper = styled(Grid)(({ theme }) => ({
    boxShadow: `0px 0px 0px 0px ${theme.palette.warning.light}, 0px 0px 0px 10px ${theme.palette.warning.ultraLight}`,
    backgroundColor: theme.palette.warning.light,
    display: "flex",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    alignItems: "center",
    justifyContent: "center"
}))