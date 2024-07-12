import { SvgIconProps, SvgIcon } from "@mui/material";
import { FC } from "react";

export const PencilIcon: FC<SvgIconProps> = (props) => {
    return(
        <SvgIcon viewBox="0 0 19 19" { ...props }>
            <path fill="transparent" d="M2.39735 15.0964C2.43564 14.7518 2.45478 14.5795 2.50691 14.4185C2.55316 14.2756 2.61851 14.1396 2.70118 14.0142C2.79436 13.8729 2.91694 13.7504 3.16209 13.5052L14.1673 2.49999C15.0878 1.57951 16.5802 1.57951 17.5007 2.49999C18.4211 3.42046 18.4211 4.91285 17.5007 5.83332L6.49542 16.8386C6.25027 17.0837 6.1277 17.2063 5.98639 17.2995C5.86102 17.3821 5.72506 17.4475 5.58219 17.4937C5.42115 17.5459 5.24887 17.565 4.90429 17.6033L2.08398 17.9167L2.39735 15.0964Z" stroke="#475467" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
        </SvgIcon>
    )
}