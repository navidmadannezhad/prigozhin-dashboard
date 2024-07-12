import { FC, useRef, useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import { Field } from "formik";
import { SimpleInputStyled, InputErrorWrapper } from "../AidingElements";
import ImagePlaceholder from "@public/images/image-placeholder.svg";
import { TrashcanIcon, PlusIcon } from "../Icons";
import { blobFrom } from "@utils/commonUtils";

interface ImageInputProps{
    label?: string;
    name: string;
    disabled?: boolean | string;
}

const ImageInput: FC<ImageInputProps> = ({ label, name, disabled }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    useEffect(() => {
        // Cleanup function
        return () => URL.revokeObjectURL(previewUrl);
      }, [previewUrl]);

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
                }: any) => {
                    useEffect(() => {
                        if(field.value){
                            setPreviewUrl(field.value);
                        }
                    }, [field.value]);

                    return (
                        <>
    
                            <Grid 
                                container 
                                justifyContent="center" 
                                alignItems="center" 
                                sx={{ 
                                    border: (theme) => `1.5px solid ${previewUrl ? theme.palette.secondary.dark : theme.palette.secondary.light}`,
                                    transition: "all 0.3s",
                                    width: "100%",
                                    height: "200px",
                                    position: "relative",
                                    borderRadius: (theme) => theme.spacing(2)
                                }}
                            >
                                <img 
                                    src={previewUrl ?? ImagePlaceholder} 
                                    alt="placeholder" 
                                    style={{
                                        width: previewUrl ? "100px" : "50px",
                                        cursor: "pointer"
                                    }}
                                    onClick={() => {
                                        inputRef?.current?.click();
                                    }}
                                />
                                <input 
                                    type="file" 
                                    ref={inputRef} 
                                    style={{ display: "none" }}
                                    accept="image/*" 
                                    onChange={e => {
                                        const file = e?.target?.files?.[0];
                                        if (!file) return;
                                        const reader = new FileReader();
                                        reader.onload = (e) => setPreviewUrl(e?.target?.result);
                                        reader.readAsDataURL(file);

                                        form.setFieldValue(field.name, file);
                                    }}
                                />
                                <TrashcanIcon
                                    sx={{ 
                                        stroke: (theme) => theme.palette.secondary.light,
                                        position: "absolute",
                                        bottom: "10px",
                                        right: "10px",
                                        cursor: "pointer"
                                    }}
                                    onClick={() => {
                                        setPreviewUrl(null);
                                        form.setFieldValue(field.name, null);
                                    }}
                                />
                            </Grid>
    
    
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
                    )
                }}
            </Field>
        </Grid>
    )
}

export default ImageInput;