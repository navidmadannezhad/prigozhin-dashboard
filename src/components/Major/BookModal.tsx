import { FC } from "react";
import ModalWrapper from "./ModalWrapper";
import { PlusIcon, CrossIcon } from "./Icons";
import { Grid, Typography, Button, useTheme } from "@mui/material";
import { Book } from "@models/models";
import { Formik, Form } from "formik";
import SimpleInput from "./Form/SimpleInput";
import { toast } from "react-hot-toast";
import { IconWrapper } from "./AidingElements";

interface BookModalProps{
    open: boolean;
    setOpen: (v: boolean) => void;
    book?: Book;
};

type FormProps = Book;

const BookModal: FC<BookModalProps> = (props) => {
    const theme = useTheme();
    const editMode = !!props.book;
    
    const initialValues: FormProps = {
        title: props?.book?.title ?? "",
        price: props?.book?.price ?? "",
        inventory: props?.book?.inventory ?? false
    };

    const onSubmit = async (values: FormProps) => {
        if(editMode){
            await updateBranch(values);
        }else{
            await createBranch(values);
        }
    }

    const createBranch = async (values: FormProps) => {
        try{
            console.log("BOOK EDITED: ", values)
            toast.success("کتاب با موفقیت ایجاد شد")
        }catch(e){
            toast.error("مشکل در ایجاد کتاب")
            console.log(e)
        }finally{
            props.setOpen(false);
        }
    }

    const updateBranch = async (values: FormProps) => {
        try{
            console.log("BOOK EDITED: ", values)
            toast.success("کتاب با موفقیت ویرایش شد")
        }catch(e){
            toast.error("مشکل در ویرایش کتاب")
            console.log(e)
        }finally{
            props.setOpen(false);
        }
    }

    return(
        <ModalWrapper open={props.open} setOpen={props.setOpen} width={600}>
            <Grid container flexDirection="column" gap={2}>
                <Grid container justifyContent="space-between" flexWrap="nowrap" alignItems="center">
                    <Grid container gap={2} alignItems="center">
                        <IconWrapper>
                            <PlusIcon stroke={theme.palette.primary.main} sx={{ width: "16px", height: "16px" }} />
                        </IconWrapper>
                        <Typography>
                            {
                                editMode ? "ویرایش کتاب" : "اضافه کردن کتاب"
                            }
                        </Typography>
                    </Grid>
                    <CrossIcon stroke={theme.palette.primary.dark} sx={{ cursor: "pointer" }} onClick={() => { props.setOpen(false) }} />
                </Grid>
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    enableReinitialize
                >
                    <Form>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <SimpleInput
                                    name="title"
                                    label="عنوان کتاب"
                                    type="text"
                                />
                            </Grid>
                        </Grid> 
                        <Grid container gap={1} justifyContent="space-between" flexWrap="nowrap" mt={2}>
                            <Grid item xs={12}>
                                <Button
                                    fullWidth
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    sx={{ 
                                        borderRadius: theme => theme.spacing(4),
                                        py: theme => theme.spacing(2)
                                    }}
                                >
                                    {
                                        editMode ? "ویرایش" : "اضافه کردن"
                                    }
                                </Button>
                            </Grid>
                        </Grid>   
                    </Form>
                </Formik>       
            </Grid>
        </ModalWrapper>
    )
}

export default BookModal;