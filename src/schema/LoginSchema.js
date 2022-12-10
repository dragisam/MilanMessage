import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .required("username is a required field")
    .min(3, "username must be at least 3 characters"),
  // .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(3, "Password must be at least 3 characters"),
});

export default LoginSchema;
