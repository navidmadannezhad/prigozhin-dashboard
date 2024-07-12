import { SvgIconProps } from "@mui/material";
import { FC } from "react";
import { SvgIconWrapper } from "./SvgIconWrapper";

export const ArrowAscendingIcon: FC<SvgIconProps> = (props) => {
    return(
        <SvgIconWrapper width="24" height="10" viewBox="0 0 24 10" { ...props }>
            <path d="M21 1L13.1314 8.86863C12.7354 9.26465 12.5373 9.46265 12.309 9.53684C12.1082 9.6021 11.8918 9.6021 11.691 9.53684C11.4627 9.46265 11.2646 9.26465 10.8686 8.86863L8.13137 6.13137C7.73535 5.73535 7.53735 5.53735 7.30902 5.46316C7.10817 5.3979 6.89183 5.3979 6.69098 5.46316C6.46265 5.53735 6.26465 5.73535 5.86863 6.13137L1 11M21 1H14M21 1V8" stroke="#079455" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </SvgIconWrapper>
    )
}