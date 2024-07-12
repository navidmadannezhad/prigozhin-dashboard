import { FC } from "react";
import {
    Grid,
    Button,
    Typography,
} from "@mui/material";
import { Formik, Form } from 'formik';
import SimpleInput from "@components/Major/Form/SimpleInput";
import { loginFormSchema } from "@configs/validationSchemas";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface LoginPageProps{};

interface FormValues{
    phone_number: string;
    password: string;
}

const LoginPage: FC<LoginPageProps> = (props) => {
    const initialValue = { 
        phone_number: "",
        password: ""    
    };
    const navigate = useNavigate();

    const onSubmit = async (values: FormValues) => {
        try{
            // -- login mechanism here -- //
            toast.success("ورود با موفقیت انجام شد")
            setTimeout(() => {
                navigate("/books");
            }, 1000)
        }catch(e){
            console.log(e)
            toast.error("مشکل در ورود")
        }
    }

    return(
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{
                minHeight: "100vh",
                width: "100%"
            }}
        >
            <Formik
                initialValues={initialValue}
                onSubmit={onSubmit}
                validationSchema={loginFormSchema}
            >
                <Form>
                    <Grid
                        container
                        flexDirection="column"
                        alignItems="center"
                        gap={2}
                        sx={{
                            padding: "20px",
                            borderRadius: "10px",
                            boxShadow: (theme) => `0px 0px 5px ${theme.palette.secondary.shadow}`
                        }}
                    >
                        <Typography fontSize={14} mb={1} textAlign="right">
                            شماره تلفن همراه یا ایمیل
                        </Typography>     
                        <SimpleInput 
                            name="phone_number"
                            label="شماره همراه"
                            type="text"
                        />
                        <SimpleInput 
                            name="password"
                            label="رمز عبور"
                            type="password"
                        />
                        <Button
                            sx={{ borderRadius: "8px", py: 1 }}
                            fullWidth
                            variant="contained"
                            type="submit"
                        >
                            <Typography
                                sx={{
                                    fontSize: "1rem",
                                    fontVariationSettings: "'wght' 600",
                                    color: theme => theme.palette.primary.contrastText
                                }}
                            >
                                ورود به حساب
                            </Typography>
                        </Button>
                    </Grid>
                </Form>
            </Formik>
        </Grid>
    )
}

export default LoginPage;