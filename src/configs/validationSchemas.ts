import * as Yup from "yup";

export const testFormSchema = Yup.object({
    name: Yup.string().required("لطفا مقدار را وارد کنید"),
    content: Yup.string().required("لطفا مقدار را وارد کنید"),
    phone_number: Yup.string().required("لطفا مقدار را وارد کنید"),
})

export const loginFormSchema = Yup.object({
    phone_number: Yup.string().required("لطفا مقدار را وارد کنید"),
    password: Yup.string().required("لطفا مقدار را وارد کنید"),
})