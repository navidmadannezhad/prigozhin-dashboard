import { SvgIconProps, SvgIcon } from "@mui/material";
import { FC } from "react";

export const LeftArrowIcon: FC<SvgIconProps> = (props) => {
    return(
        <SvgIcon viewBox="0 0 14 14" { ...props }>
            <path d="M12.8327 7.00008H1.16602M1.16602 7.00008L6.99935 12.8334M1.16602 7.00008L6.99935 1.16675" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
        </SvgIcon>
    )
}
