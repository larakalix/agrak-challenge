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
    avatar: yup
        .string()
        .matches(
            /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
            "Enter correct url!"
        )
        .required("Avatar link is required")
        .min(10, "Too Short!"),
    email: yup.string().email().required("Email is required"),
});
