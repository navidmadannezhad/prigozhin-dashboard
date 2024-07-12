import * as React from "react";
import { Grid, InputProps, Typography } from "@mui/material";
import { Field } from "formik";
import { TextareaStyled, InputErrorWrapper } from "../AidingElements";

interface TextareaInputProps extends InputProps{
    label?: string;
    name: string;
    disabled?: boolean;
}

// WIP - SPECIFY THE TYPE OF PROPS
const TextareaInput = ({ label, name, disabled, ...props }: TextareaInputProps) => {
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
                        <TextareaStyled
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                form.setFieldValue(field.name, e.target.value)
                            }}
                            filled={field.value}
                            defaultValue={field.value}
                            disabled={disabled}
                            { ...props }
                        />
                        {meta.touched && meta.error && (
                            <InputErrorWrapper>{meta.error}</InputErrorWrapper>
                        )} 
                    </>
                )}
            </Field>
        </Grid>
    )
}

export default TextareaInput;