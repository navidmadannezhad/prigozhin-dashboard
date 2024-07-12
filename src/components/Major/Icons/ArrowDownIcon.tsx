import { SvgIconProps, SvgIcon } from "@mui/material";
import { FC } from "react";

export const ArrowDownIcon: FC<SvgIconProps> = (props) => {
    return(
        <SvgIcon viewBox="0 0 10 10" { ...props }>
            <path d="M5 1.5V8.5M5 8.5L8.5 5M5 8.5L1.5 5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </SvgIcon>
    )
}