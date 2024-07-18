import { SvgIconProps, SvgIcon } from "@mui/material";
import { FC } from "react";

export const ArrowDownIcon: FC<SvgIconProps> = (props) => {
    return(
        <SvgIcon viewBox="0 0 12 12" { ...props }>
            <path d="M6 2.5L6 9.5M6 9.5L9.5 6M6 9.5L2.5 6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </SvgIcon>
    )
}