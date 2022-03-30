import * as yup from 'yup';

const formSchema = yup.object.shape({
    username: yup
        .string()
        .trim()
        .required("Please enter your username")
        .min(3,"Username must be at least 3 characters long"),
    email: yup
        .string()
        .email("Please enter a valid email address")
        .required("Please enter your email address"),
    password: yup
        .string()
        .required("Password is required")
        .min(5, "Password must be at least 5 characters long"), 
    tos: yup
        .boolean()
        .oneOf([true], "Must sign away your private data and bow before my awesome power")
})

export default formSchema