import * as yup from "yup";

export const userValidationSchema = yup.object().shape({
    first_name: yup
        .string()
        .required("First name is required")
        .min(2, "Too Short!"),
    second_name: yup
        .string()
        .required("Second name is required")
        .min(2, "Too Short!"),
    email: yup.string().email().required("Email is required"),
});
