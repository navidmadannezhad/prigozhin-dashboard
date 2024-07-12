import { FC } from "react";
import { Grid, Typography } from "@mui/material";
import { Field } from "formik";
import { SimpleInputStyled, InputErrorWrapper } from "../AidingElements";
import ImagePlaceholder from "@public/images/image-placeholder.svg";
import { TrashcanIcon, PlusIcon } from "../Icons";

interface AlbumInputProps{
    label?: string;
    name: string;
    disabled?: boolean | string;
    placeholder?: string;
}

const AlbumInput: FC<AlbumInputProps> = ({ label, name, disabled, type, placeholder }) => {
    return(
        <Grid container flexDirection="column" gap={1}>
            {label && (
                <Typography sx={{ fontSize: "0.8rem", fontVariationSettings: "'wght' 400" }}>
                    {label}
                </Typography>
            )}
            <Field name={name}>
                {({
                    field,
                    form,
                    meta,
                }: any) => (
                    <>

                        <Grid 
                            container 
                            justifyContent="center" 
                            alignItems="center" 
                            sx={{ 
                                border: (theme) => `1.5px solid ${theme.palette.secondary.light}`,
                                width: "100%",
                                height: "200px",
                                position: "relative",
                                borderRadius: (theme) => theme.spacing(2)
                            }}
                        >
                            <img src={ImagePlaceholder} alt="placeholder" width="50px" />
                            <TrashcanIcon
                                sx={{ 
                                    stroke: (theme) => theme.palette.secondary.light,
                                    position: "absolute",
                                    bottom: "10px",
                                    right: "10px",
                                    cursor: "pointer"
                                }}
                            />
                        </Grid>

                        <Grid 
                            container 
                            justifyContent="space-between" 
                            alignItems="center" 
                            sx={{ 
                                border: (theme) => `1.5px solid ${theme.palette.secondary.light}`,
                                width: "100%",
                                borderRadius: (theme) => theme.spacing(1),
                                padding: (theme) => theme.spacing(1)
                            }}
                        >
                            <img src={ImagePlaceholder} alt="placeholder" width="30px" />
                            <TrashcanIcon
                                sx={{ 
                                    stroke: (theme) => theme.palette.secondary.light,
                                    bottom: "10px",
                                    right: "10px",
                                    cursor: "pointer"
                                }}
                            />
                        </Grid>

                        <Typography 
                            sx={{ 
                                display: "flex", 
                                alignItems: "center", 
                                gap: (theme) => theme.spacing(0.5), 
                                fontSize: "0.9rem",
                                justifyContent: "flex-end",
                                cursor: "pointer"
                            }}
                        >
                            <PlusIcon 
                                sx={{ 
                                    stroke: (theme) => theme.palette.secondary.dark,
                                    width: "15px",
                                    cursor: "pointer"
                                }} 
                            />
                            اضافه کردن تصویر
                        </Typography>












                        {/* <SimpleInputStyled
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                form.setFieldValue(field.name, e.target.value)
                            }}
                            filled={field.value}
                            defaultValue={field.value}
                            disabled={disabled}
                            type={type}
                            placeholder={placeholder}
                        />
                        {meta.touched && meta.error && (
                            <InputErrorWrapper>{meta.error}</InputErrorWrapper>
                        )}  */}
                    </>
                )}
            </Field>
        </Grid>
    )
}

export default AlbumInput;