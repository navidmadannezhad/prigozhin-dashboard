import { FC } from "react";
import ModalWrapper from "./ModalWrapper";
import { TrashcanIcon, CrossIcon } from "./Icons";
import { Grid, styled, Typography, Button, useTheme } from "@mui/material";
import { toast } from "react-hot-toast";
import { IconWrapper } from "./AidingElements";

interface DeleteRecordModalProps{
    open:boolean;
    setOpen: (v: boolean) => void;
    record: any;
};

const DeleteRecordModal: FC<DeleteRecordModalProps> = (props) => {
    const theme = useTheme();

    const deleteRecord = async () => {
        try{
            console.log("RECORD DELETED: ", props.record);
            toast.success("عملیات حذف موفق")
        }catch(e){
            toast.error("عملیات حذف ناموفق")
        }finally{
            props.setOpen(false);
        }
    }

    return(
        <ModalWrapper open={props.open} setOpen={props.setOpen}>
            <Grid container flexDirection="column" gap={2}>
                <Grid container justifyContent="space-between">
                    <IconWrapper>
                        <TrashcanIcon stroke={theme.palette.warning.dark} sx={{ width: "20px", height: "20px" }} />
                    </IconWrapper>
                    <CrossIcon stroke={theme.palette.primary.dark} sx={{ cursor: "pointer" }} onClick={() => { props.setOpen(false) }} />
                </Grid>
                <Typography sx={{ fontSize: "1rem", fontVariationSettings: "'wght' 500", color: theme.palette.primary.dark }}>
                    آیا از حذف مورد انتخاب شده اطمینان دارید؟
                </Typography>
                <Grid container gap={1} justifyContent="space-between" flexWrap="nowrap">
                    <Grid item xs={6}>
                        <Button
                            fullWidth
                            variant="outlined"
                            color="primary"
                            sx={{
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
                            variant="contained"
                            color="warning"
                            sx={{
                                borderRadius: theme => theme.spacing(2),
                                py: theme => theme.spacing(2)
                            }}
                            onClick={deleteRecord}
                        >
                            حذف
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </ModalWrapper>
    )
}

export default DeleteRecordModal;