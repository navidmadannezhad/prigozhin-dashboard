import { FC } from "react";
import { PageWrapper } from "@components/Major/AidingElements";
import { Box, Button, Typography, Grid } from "@mui/material";
import { EditIcon, FilterIcon } from "@components/Major/Icons";
import { TrashcanIcon } from "@components/Major/Icons/TrashcanIcon";
import { Formik, Form } from "formik";
import { toast } from "react-hot-toast";
import { useTheme } from "@mui/material/styles"
import SimpleInput from "@components/Major/Form/SimpleInput";
import SelectInput from "@components/Major/Form/SelectInput";
import TextareaInput from "@components/Major/Form/TextareaInput";
import ImageInput from "@components/Major/Form/ImageInput";
import { useSearchParams } from "react-router-dom";

interface NewBookPageProps{}

const NewBookPage: FC<NewBookPageProps> = () => {
    const theme = useTheme();
    const params: any = useSearchParams();
    const editMode = params.book_id;

    const initialValues: any = {
        title: "",
        content: "",
        slug: "",
        thumbnail: "",
        thumbnail_alt: "",
        status: 0,
        category: "",
        meta_title: "",
        meta_description: "",
        short_description: ""
    };

    const onSubmit = async (values: FormData) => {
        if(editMode){
            console.log("BOOK EDITED: ", values);
            toast.success("کتاب با موفقیت ویرایش شد");
        }else{
            console.log("BOOK CREATED: ", values);
            toast.success("کتاب با موفقیت اضافه شد");
        }
    }

    return (
        <PageWrapper>

            <Formik onSubmit={onSubmit} initialValues={initialValues}>
                <Form style={{ display: "flex", flexDirection: "column", gap: theme.spacing(2) }}>

                    <Grid container alignItems="center" justifyContent="space-between">
                        <Typography
                            sx={{
                                fontSize: "1.2rem",
                                fontVariationSettings: "'wght' 600"
                            }}
                        >
                            اضافه کردن کتاب
                        </Typography> 

                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 3 }}>
                            <Button
                                color="primary"
                                variant="contained"
                                sx={{ borderRadius: (theme) => theme.spacing(1) }}
                                type="submit"
                            >
                                <FilterIcon
                                    sx={{ 
                                        margin: (theme) => `0px ${theme.spacing(0.5)}`,
                                        width: "20px", 
                                        height: "20px",
                                        stroke: (theme) => theme.palette.primary.contrastText
                                    }}
                                />
                                ذخیره
                            </Button>
                            <Button
                                color="primary"
                                variant="contained"
                                sx={{ borderRadius: (theme) => theme.spacing(1) }}
                            >
                                <EditIcon
                                    sx={{ 
                                        margin: (theme) => `0px ${theme.spacing(0.5)}`,
                                        width: "20px", 
                                        height: "20px",
                                        stroke: (theme) => theme.palette.primary.contrastText
                                    }}
                                />
                                ذخیره و ایجاد یکی دیگر
                            </Button>
                            <Button
                                color="warning"
                                variant="contained"
                                sx={{ borderRadius: (theme) => theme.spacing(1), width: "40px", minWidth: "unset" }}
                            >
                                <TrashcanIcon 
                                    sx={{ 
                                        width: "20px", 
                                        height: "20px",
                                        stroke: (theme) => theme.palette.primary.contrastText
                                    }}
                                />
                            </Button>
                        </Box>
                    </Grid>
                    
                    <Grid container spacing={4} alignItems="flex-start">
                        <Grid item xs={6} container gap={2}>
                            <Grid item xs={12}>
                                <SimpleInput name="title" label="عنوان" type="text" placeholder="عنوان کتاب" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextareaInput name="short_description" label="توضیحات کوتاه" placeholder="توضیحات" />
                            </Grid>
                            <Grid item xs={12}>
                                <SimpleInput name="slug" label="پیوند یکتا" type="text" placeholder="پیوند یکتای کتاب" />
                            </Grid>
                            <Grid item xs={12}>
                                <ImageInput
                                    label="تصویر شاخص"
                                    name="images"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <SimpleInput name="thumbnail_alt" label="متن ALT" type="text" placeholder="ALT" />
                            </Grid>
                            <Grid item xs={6}>
                                <SelectInput 
                                    name="category" 
                                    label="دسته‌بندی کتاب"
                                    options={[
                                        { label: "دسته بندی اول", value: "1" }
                                    ]}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <SelectInput 
                                    name="status" 
                                    label="وضعیت"
                                    options={[
                                        { label: "منتشر شده", value: 0 },
                                        { label: "آرشیو شده", value: 1 },
                                        { label: "پیش‌نویس‌ها", value: 2 }
                                    ]}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <SimpleInput name="meta_title" label="عنوان متا" type="text" placeholder="عنوان متای کتاب" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextareaInput name="meta_description" label="توضیحات متا" placeholder="توضیحات متای کتاب" />
                            </Grid>
                        </Grid>
                    </Grid>

                </Form>
            </Formik>

        </PageWrapper>
    )
}

export default NewBookPage;