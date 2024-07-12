import { FC } from "react";
import { Grid, Typography } from "@mui/material";
import { PlusIcon, EditIcon } from "../Icons";
import { useTheme } from "@mui/material/styles";
import { Field } from "formik";
import { SimpleInputStyled, InputErrorWrapper } from "../AidingElements";

interface UserInformationInputProps{
    name: string;
    placeholder: string;
    disabled?: boolean | string;
};

const Badge = (props: { confirmed: boolean }) => {
    const theme = useTheme();

    const getHolderDesign = (confirmed: boolean) => {
        switch(confirmed){
            case true:
                return {
                    text: "تایید شده",
                    palette: theme.palette.success
                }
            case false:
                return {
                    text: "عدم تایید",
                    palette: theme.palette.warning
                }
        }
    }

    return(
        <Grid
            container
            borderRadius={5}
            sx={{
                backgroundColor: getHolderDesign(props.confirmed).palette.ultraLight,
                borderColor: getHolderDesign(props.confirmed).palette.light,
                borderWidth: "3px",
                padding: "2px 5px",
                width: "auto"
            }}
        >
            <Typography
                sx={{ 
                    color: getHolderDesign(props.confirmed).palette.main,
                    fontSize: "0.8rem",
                    fontVariationSettings: "'wght' 600"
                }}
            >
                {getHolderDesign(props.confirmed).text}
            </Typography>
        </Grid>
    )
}


const UserInformationInput: FC<UserInformationInputProps> = (props) => {
    return(
        <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            flexWrap="nowrap"
            sx={{
                border: theme => `1.5px solid ${theme.palette.secondary.light}`,
                borderRadius: "15px",
                cursor: "pointer"
            }}
        >
            <Grid container flexDirection="column" gap={1}>

                <Field name={props.name}>
                    {({
                        field,
                        form,
                        meta,
                    }: any) => (
                        <>
                            <Grid container alignItems="center" gap={1}>
                                <Typography sx={{ fontVariationSettings: "'wght' 400" }}>
                                    {props.placeholder}
                                </Typography>
                                <Badge confirmed={!!field.value} />
                            </Grid>
        
                            <SimpleInputStyled
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    form.setFieldValue(field.name, e.target.value)
                                }}
                                filled={field.value}
                                defaultValue={field.value}
                                disabled={props.disabled}
                                type="text"
                                placeholder={props.placeholder}
                            />
                            {meta.touched && meta.error && (
                                <InputErrorWrapper>{meta.error}</InputErrorWrapper>
                            )} 
                            {/* {!!field.value ? (
                                <EditIcon 
                                    sx={{ 
                                        width: "24px", 
                                        stroke: theme => theme.palette.secondary.light 
                                    }} 
                                />
                            ) : (
                                <PlusIcon 
                                    sx={{ 
                                        width: "24px", 
                                        stroke: theme => theme.palette.secondary.light 
                                    }} 
                                />
                            )} */}
                        </>
                    )}
                </Field>



            </Grid>
        </Grid>
    )
}

export default UserInformationInput;