import * as React from "react";
import { Grid, Typography, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { Field } from "formik";
import { InputErrorWrapper } from "../AidingElements";
import { SelectOption } from "@models/models";

interface CheckboxSelectorInputProps{
    label?: string;
    name: string;
    options: SelectOption[];
}

const CheckboxSelectorInput = ({ label, name, options }: CheckboxSelectorInputProps) => {
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
                            sx={{ 
                                padding: (theme) => theme.spacing(1),
                                border: (theme) => `1px solid ${theme.palette.secondary.light}`,
                                borderRadius: (theme) => theme.spacing(1),
                            }}
                        >
                            <FormGroup 
                                sx={{ 
                                    display: "flex", 
                                    flexDirection: "column",
                                    gap: 1,
                                    "& .MuiButtonBase-root":{
                                        padding: (theme) => `${theme.spacing(0.4)} ${theme.spacing(1)}`
                                    },

                                    height: (theme) => theme.spacing(20),
                                    overflowY: "auto",
                                    flexWrap: "nowrap"
                                }}
                            >
                                {options.map((option, i) => (
                                    <FormControlLabel
                                        key={i}
                                        control={
                                            <Checkbox
                                                onChange={(_e, value) => { 
                                                    if(value){
                                                        form.setFieldValue(
                                                            field.name, 
                                                            [
                                                                ...field.value,
                                                                option.value
                                                            ]
                                                        )
                                                    }else{
                                                        form.setFieldValue(
                                                            field.name, 
                                                            field.value.filter((v: any) => v !== option.value)
                                                        )
                                                    }
                                                }} 
                                            />
                                        } 
                                        label={<Typography sx={{ fontSize: "0.8rem" }}>{option.label}</Typography>}
                                    />
                                ))}
                            </FormGroup>
                        </Grid>
                        {meta.touched && meta.error && (
                            <InputErrorWrapper>{meta.error}</InputErrorWrapper>
                        )} 
                    </>
                )}
            </Field>
        </Grid>
    )
}

export default CheckboxSelectorInput;