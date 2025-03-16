import * as Yup from "yup";

export interface ISigninFields {
  email: string;
  password: string;
}

export const signinSchema: Yup.ObjectSchema<ISigninFields> =
  Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password should be 8-20 characters")
      .max(20, "Password should be 8-20 characters")
      .required("Password is required"),
  });
