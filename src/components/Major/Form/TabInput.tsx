import { Grid, Typography } from "@mui/material";
import { Field } from "formik";
import { InputErrorWrapper, StyledTabs, StyledTab } from "../AidingElements";

interface TabInputProps{
    label?: string;
    name: string;
    disabled?: boolean | string;
    options: { value: any, label: any }[];
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const TabInput = ({ label, name, disabled, options }: TabInputProps) => {
    return(
        <Grid container flexDirection="column" gap={1}>
            <Field name={name}>
                {({
                    field,
                    form
                }: any) => {
                    
                    return (
                        <Grid container gap={2} alignItems="center">
                            <Typography sx={{ fontSize: "0.9rem", fontVariationSettings: "'wght' 600" }}>
                                {label}
                            </Typography>
                            <StyledTabs 
                                value={field.value} 
                                onChange={(_e: React.SyntheticEvent, value: string) => {
                                    form.setFieldValue(field.name, value);
                                }} 
                                aria-label={`select ${name} tabs`}
                            >
                                {options.map((option, i) => (
                                    <StyledTab 
                                        key={i} 
                                        label={option.label} 
                                        {...a11yProps(option.value)}
                                    />
                                ))}
                            </StyledTabs>
                        </Grid>
                    )
                }}
            </Field>
        </Grid>
    )
}

export default TabInput;