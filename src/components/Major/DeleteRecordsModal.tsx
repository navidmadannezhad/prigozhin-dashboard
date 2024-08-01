import { FC } from "react";
import ModalWrapper from "./ModalWrapper";
import { TrashcanIcon, CrossIcon } from "./Icons";
import { Grid, styled, Typography, Button, useTheme } from "@mui/material";
import { IconWrapper } from "./AidingElements";
import { useSelector } from "react-redux";

interface DeleteRecordsModalProps{
    open:boolean;
    setOpen: (v: boolean) => void;
};

const DeleteRecordsModal: FC<DeleteRecordsModalProps> = (props) => {
    const theme = useTheme();
    const mode = useSelector((state: any) => state.common.themeState);

    return(
        <ModalWrapper open={props.open} setOpen={props.setOpen}>
            <Grid container flexDirection="column" gap={2} className="delete-records-modal">
                <Grid container justifyContent="space-between">
                    <IconWrapper>
                        <TrashcanIcon 
                            stroke={mode === 'light' ? theme.palette.warning.dark : theme.palette.secondary.main}  
                            sx={{ width: "20px", height: "20px" }} 
                        />
                    </IconWrapper>
                    <CrossIcon 
                        stroke={mode === 'light' ? theme.palette.primary.dark : theme.palette.secondary.main} 
                        sx={{ cursor: "pointer" }} 
                        onClick={() => { props.setOpen(false) }} 
                    />
                </Grid>
                <Typography sx={{ fontSize: "1.2rem", fontVariationSettings: "'wght' 600" }}>
                    حذف موارد انتخاب شده
                </Typography>
                <Typography sx={{ fontSize: "1rem", fontVariationSettings: "'wght' 500" }}>
                    آیا از حذف موارد انتخابی (35 مورد) اطمینان دارید؟
                </Typography>
                <Grid container gap={1} justifyContent="space-between" flexWrap="nowrap">
                    <Grid item xs={6}>
                        <Button
                            fullWidth
                            variant="outlined"
                            color="error"
                            onClick={() => { props.setOpen(false) }}
                        >
                            بازگشت
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            fullWidth
                            variant="contained"
                            color="error"
                        >
                            حذف
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </ModalWrapper>
    )
}

export default DeleteRecordsModal;