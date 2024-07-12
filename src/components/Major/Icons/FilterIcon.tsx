import { SvgIconProps, SvgIcon } from "@mui/material";
import { FC } from "react";

export const FilterIcon: FC<SvgIconProps> = (props) => {
    return(
        <SvgIcon viewBox="0 0 20 18" { ...props }>
            <path fill="transparent" d="M1.66602 3.83333C1.66602 3.36662 1.66602 3.13327 1.75684 2.95501C1.83674 2.79821 1.96422 2.67072 2.12102 2.59083C2.29928 2.5 2.53264 2.5 2.99935 2.5H16.9993C17.4661 2.5 17.6994 2.5 17.8777 2.59083C18.0345 2.67072 18.162 2.79821 18.2419 2.95501C18.3327 3.13327 18.3327 3.36662 18.3327 3.83333V4.39116C18.3327 4.61516 18.3327 4.72716 18.3053 4.8313C18.2811 4.92359 18.2411 5.01103 18.1873 5.0898C18.1265 5.17869 18.0419 5.25204 17.8726 5.39875L12.5428 10.0179C12.3735 10.1646 12.2889 10.238 12.2281 10.3269C12.1742 10.4056 12.1343 10.4931 12.1101 10.5854C12.0827 10.6895 12.0827 10.8015 12.0827 11.0255V15.382C12.0827 15.5449 12.0827 15.6264 12.0564 15.6969C12.0332 15.7591 11.9954 15.8149 11.9462 15.8596C11.8906 15.9102 11.8149 15.9404 11.6636 16.001L8.83028 17.1343C8.52399 17.2568 8.37085 17.3181 8.24791 17.2925C8.1404 17.2702 8.04606 17.2063 7.98539 17.1148C7.91602 17.0101 7.91602 16.8452 7.91602 16.5153V11.0255C7.91602 10.8015 7.91602 10.6895 7.88864 10.5854C7.86439 10.4931 7.82446 10.4056 7.77061 10.3269C7.70983 10.238 7.6252 10.1646 7.45592 10.0179L2.12611 5.39875C1.95684 5.25204 1.8722 5.17869 1.81143 5.0898C1.75757 5.01103 1.71764 4.92359 1.69339 4.8313C1.66602 4.72716 1.66602 4.61516 1.66602 4.39116V3.83333Z" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
        </SvgIcon>
    )
}