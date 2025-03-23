"use client";

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
    values: ISignupFields,
    formikHelpers: FormikHelpers<ISignupFields>
  ) => {
    console.log(values);

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
          sx={{ mb: 2 }}
        />

        <InputField<ISignupFields>
          type="text"
          name="username"
          label="Username"
          sx={{ mb: 2 }}
        />

        <InputField<ISignupFields>
          type="password"
          name="password"
          label="Password"
          sx={{ mb: 2 }}
        />

        <InputField disabled type="button" name="Sign up" sx={{ mb: 2 }} />

        <Typography sx={{ textAlign: "center" }}>
          Already have an account?{" "}
          <MuiLink component={Link} href="/auth?signin">
            Sign in
          </MuiLink>
        </Typography>
      </Form>
    </Formik>
  );
}
