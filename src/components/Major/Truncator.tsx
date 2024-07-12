import { FC } from "react";
import Tooltip from '@mui/material/Tooltip';
import _ from "lodash";
import { Typography } from "@mui/material";

interface TruncatorProps{
    content: string;
    length: number;
}

const Truncator: FC<TruncatorProps> = (props) => {
    return(
        <Tooltip
            title={
                <Typography sx={{ color: (theme) => theme.palette.primary.contrastText, fontSize: "0.7rem" }}>
                    {props.content}
                </Typography>
            }
        >
            {_.truncate(props.content, { length: props.length })}
        </Tooltip>
    )
}

export default Truncator;