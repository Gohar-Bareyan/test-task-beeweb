import * as yup from "yup";

export const schema = yup.object().shape({
    email: yup
        .string()
        .email("Invalid email format")
        .required(),
    password: yup
        .string()
        .required()
        .min(8)
        .max(16),
});

