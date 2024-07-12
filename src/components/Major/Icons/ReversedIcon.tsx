import { SvgIconProps } from "@mui/material";
import { FC } from "react";
import { SvgIconWrapper } from "./SvgIconWrapper";

export const ReversedIcon: FC<SvgIconProps> = (props) => {
    return(
        <SvgIconWrapper width="12" height="12" viewBox="0 0 12 12" { ...props }>
            <path d="M2 3.5H7C8.65685 3.5 10 4.84315 10 6.5C10 8.15685 8.65685 9.5 7 9.5H2M2 3.5L4 1.5M2 3.5L4 5.5" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </SvgIconWrapper>
    )
}