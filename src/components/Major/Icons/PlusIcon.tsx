import { SvgIconProps, SvgIcon } from "@mui/material";
import { FC } from "react";

export const PlusIcon: FC<SvgIconProps> = (props) => {
    return(
        <SvgIcon viewBox="0 0 14 14" { ...props }>
            <path fill="transparent" d="M6.99935 1.16663V12.8333M1.16602 6.99996H12.8327" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
        </SvgIcon>
    )
}
