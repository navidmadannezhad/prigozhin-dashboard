import { Grid, Typography } from "@mui/material";
import { Field } from "formik";
import { InputErrorWrapper, StyledSelect } from "../AidingElements";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

interface SelectInputProps{
    label?: string;
    name: string;
    disabled?: boolean | string;
    options: { value: any, label: any }[];
}

// WIP -- SOME BUGS

const SelectInput = ({ label, name, disabled, options }: SelectInputProps) => {
    return(
        <Grid container flexDirection="column" gap={1}>
            <Field name={name}>
                {({
                    field,
                    form,
                    meta,
                }: any) => {
                    
                    return (
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                                <Typography>
                                    {label}
                                </Typography>
                            </InputLabel>
                            <StyledSelect
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                disabled={disabled}




                                // WIP -- ERROR HERE - ONLY WORKS IF WE DELETE IT
                                value={field.value}
                                // WIP -- ERROR HERE - ONLY WORKS IF WE DELETE IT




                                label={label}
                                onChange={(e: any) => {
                                    form.setFieldValue(field.name, e.target.value)
                                }}
                            >   
                                {options.map((option: any, i: number) => (
                                    <MenuItem 
                                        value={option.value}
                                        key={i}
                                    >
                                        <Typography>
                                            {option.label}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </StyledSelect>
                            {meta.touched && meta.error && (
                                <InputErrorWrapper>{meta.error}</InputErrorWrapper>
                            )} 
                        </FormControl>
                    )
                }}
            </Field>
        </Grid>
    )
}

export default SelectInput;