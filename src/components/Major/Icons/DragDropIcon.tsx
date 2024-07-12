import { SvgIconProps, SvgIcon } from "@mui/material";
import { FC } from "react";

export const DragDropIcon: FC<SvgIconProps> = (props) => {
    return(
        <SvgIcon viewBox="0 0 12 19" { ...props }>
            <circle cx="2.5" cy="2.5" r="2.5" fill="#0D2F46"/>
            <circle cx="9.5" cy="2.5" r="2.5" fill="#0D2F46"/>
            <circle cx="2.5" cy="9.5" r="2.5" fill="#0D2F46"/>
            <circle cx="9.5" cy="9.5" r="2.5" fill="#0D2F46"/>
            <circle cx="2.5" cy="16.5" r="2.5" fill="#0D2F46"/>
            <circle cx="9.5" cy="16.5" r="2.5" fill="#0D2F46"/>
        </SvgIcon>
    )
}
