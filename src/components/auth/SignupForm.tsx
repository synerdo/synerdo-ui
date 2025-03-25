"use client";

import { SxStyle } from "@/classes";
import { InputField } from "@/components/inputs";
import { ISignupFields, signupSchema } from "@/schemas";
import { Link as MuiLink, Typography } from "@mui/material";
import { Form, Formik, FormikHelpers } from "formik";
import Link from "next/link";

export function SignupForm() {
  const initialValues = {
    email: "",
    username: "",
    password: "",
  };

  const handleSubmit = (
    _values: ISignupFields,
    formikHelpers: FormikHelpers<ISignupFields>
  ) => {
    // console.log(values);

    formikHelpers.resetForm();
  };

  return (
    <Formik<ISignupFields>
      validationSchema={signupSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form>
        <InputField<ISignupFields>
          type="text"
          name="email"
          label="Email"
          sx={sxStyle.itemSpacing}
        />

        <InputField<ISignupFields>
          type="text"
          name="username"
          label="Username"
          sx={sxStyle.itemSpacing}
        />

        <InputField<ISignupFields>
          type="password"
          name="password"
          label="Password"
          sx={sxStyle.itemSpacing}
        />

        <InputField
          disabled
          type="button"
          name="Sign up"
          sx={sxStyle.itemSpacing}
        />

        <Typography sx={sxStyle.textCenter}>
          Already have an account?{" "}
          <MuiLink component={Link} href="/auth?signin">
            Sign in
          </MuiLink>
        </Typography>
      </Form>
    </Formik>
  );
}

const sxStyle = SxStyle.create({
  itemSpacing: {
    mb: 2,
  },
  textCenter: {
    textAlign: "center",
  },
});
