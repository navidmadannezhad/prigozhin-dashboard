import * as React from "react";
import { Grid, Typography } from "@mui/material";
import { Field } from "formik";
import { InputErrorWrapper, StyledAutocomplete } from "../AidingElements";
import { SelectOption } from "@models/models";
import TextField from '@mui/material/TextField';

interface AutocompleteInputProps{
    label?: string;
    name: string;
    disabled?: boolean | string;
    options: SelectOption[];
}

// WIP -- SOME BUGS

const AutocompleteInput = ({ label, name, options }: AutocompleteInputProps) => {
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
                        <StyledAutocomplete
                            fullWidth
                            disablePortal
                            id="combo-box-demo"
                            options={options}
                            renderInput={(params: any) => <TextField {...params} placeholder={label} />}
                            getOptionLabel={(option: SelectOption) => option.label}
                            value={field.value}
                            // renderOption={(option: any) => <span>{option.title}</span>}
                            onChange={(_e: React.SyntheticEvent<SelectOption>, value: SelectOption) => {
                                form.setFieldValue(field.name, value)
                            }}
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

export default AutocompleteInput;