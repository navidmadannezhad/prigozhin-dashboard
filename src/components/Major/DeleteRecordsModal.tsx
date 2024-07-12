import { FC } from "react";
import ModalWrapper from "./ModalWrapper";
import { TrashcanIcon, CrossIcon } from "./Icons";
import { Grid, styled, Typography, Button, useTheme } from "@mui/material";
import { IconWrapper } from "./AidingElements";

interface DeleteRecordsModalProps{
    open:boolean;
    setOpen: (v: boolean) => void;
};

const DeleteRecordsModal: FC<DeleteRecordsModalProps> = (props) => {
    const theme = useTheme();

    return(
        <ModalWrapper open={props.open} setOpen={props.setOpen}>
            <Grid container flexDirection="column" gap={2}>
                <Grid container justifyContent="space-between">
                    <IconWrapper>
                        <TrashcanIcon stroke={theme.palette.warning.dark} sx={{ width: "20px", height: "20px" }} />
                    </IconWrapper>
                    <CrossIcon stroke={theme.palette.primary.dark} sx={{ cursor: "pointer" }} onClick={() => { props.setOpen(false) }} />
                </Grid>
                <Typography sx={{ fontSize: "1.2rem", fontVariationSettings: "'wght' 600" }}>
                    حذف موارد انتخاب شده
                </Typography>
                <Typography sx={{ fontSize: "1rem", fontVariationSettings: "'wght' 500", color: theme.palette.primary.dark }}>
                    آیا از حذف موارد انتخابی (35 مورد) اطمینان دارید؟
                </Typography>
                <Grid container gap={1} justifyContent="space-between" flexWrap="nowrap">
                    <Grid item xs={6}>
                        <Button
                            fullWidth
                            sx={{
                                border: (theme) => `2px solid ${theme.palette.secondary.light}`,
                                color: (theme) => theme.palette.secondary.dark,
                                borderRadius: theme => theme.spacing(2),
                                py: theme => theme.spacing(2)
                            }}
                            onClick={() => { props.setOpen(false) }}
                        >
                            بازگشت
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            fullWidth
                            sx={{
                                backgroundColor: (theme) => theme.palette.warning.main,
                                color: "#fff",
                                "&:hover":{
                                    backgroundColor: (theme) => theme.palette.warning.main,
                                },
                                borderRadius: theme => theme.spacing(2),
                                py: theme => theme.spacing(2)
                            }}
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