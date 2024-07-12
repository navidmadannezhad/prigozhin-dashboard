import * as React from "react";
import { Grid, Typography } from "@mui/material";
import { Field } from "formik";
import { InputErrorWrapper } from "../AidingElements";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

interface RadioGroupInputProps{
    label?: string;
    name: string;
    options: { value: any, label: any, disabled?: boolean, }[];
}

const RadioGroupInput = ({ label, name, options }: RadioGroupInputProps) => {
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
                        <FormControl>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    form.setFieldValue(field.name, e.target.value)
                                }}
                                value={field.value}
                            >
                                {options.map((option, i) => (
                                    <FormControlLabel 
                                        disabled={option.disabled === undefined ? false : option.disabled}
                                        value={option.value} 
                                        control={<Radio />} 
                                        label={option.label} 
                                    />
                                ))}
                            </RadioGroup>
                        </FormControl>
                        {meta.touched && meta.error && (
                            <InputErrorWrapper>{meta.error}</InputErrorWrapper>
                        )} 
                    </>
                )}
            </Field>
        </Grid>
    )
}

export default RadioGroupInput;