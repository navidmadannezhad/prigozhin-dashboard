import { SvgIconProps, SvgIcon } from "@mui/material";
import { FC } from "react";

export const CrossIcon: FC<SvgIconProps> = (props) => {
    return(
        <SvgIcon viewBox="0 0 14 14" { ...props }>
            <path d="M8.5 3.5L3.5 8.5M3.5 3.5L8.5 8.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </SvgIcon>
    )
}
