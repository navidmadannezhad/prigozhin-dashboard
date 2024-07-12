import * as React from "react";
import { Grid, Typography } from "@mui/material";
import { Field } from "formik";
import { SimpleInputStyled, InputErrorWrapper } from "../AidingElements";

interface SimpleInputProps{
    label?: string;
    name: string;
    disabled?: boolean | string;
    type: string;
    placeholder?: string;
}

const SimpleInput = ({ label, name, disabled, type, placeholder }: SimpleInputProps) => {
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
                        <SimpleInputStyled
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
                        )} 
                    </>
                )}
            </Field>
        </Grid>
    )
}

export default SimpleInput;