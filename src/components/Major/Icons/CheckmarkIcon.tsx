import { SvgIconProps, SvgIcon } from "@mui/material";
import { FC } from "react";

export const CheckmarkIcon: FC<SvgIconProps> = (props) => {
    return(
        <SvgIcon viewBox="0 0 10 10" { ...props }>
            <path d="M9 1L3.5 6.5L1 4" fill="transparent" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </SvgIcon>
    )
}
