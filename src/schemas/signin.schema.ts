import * as Yup from "yup";

export interface ISigninFields {
  username: string;
  password: string;
}

export const signinSchema: Yup.ObjectSchema<ISigninFields> =
  Yup.object().shape({
    username: Yup.string()
      .min(2, "Username should be 2-20 characters")
      .max(20, "Username should be 2-20 characters")
      .required("Username is required"),
    password: Yup.string()
      .min(8, "Password should be 8-20 characters")
      .max(20, "Password should be 8-20 characters")
      .required("Password is required"),
  });
