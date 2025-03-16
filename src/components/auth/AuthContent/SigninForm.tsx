"use client";

import { InputField } from "@/components/inputs";
import { ISigninFields, signinSchema } from "@/schemas";
import { Link as MuiLink, Typography } from "@mui/material";
import { Form, Formik, FormikHelpers } from "formik";
import Link from "next/link";

export function SigninForm() {
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (
    values: ISigninFields,
    formikHelpers: FormikHelpers<ISigninFields>
  ) => {
    console.log(values);

    formikHelpers.resetForm();
  };

  return (
    <Formik<ISigninFields>
      validationSchema={signinSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form>
        <InputField<ISigninFields>
          type="text"
          name="email"
          label="Email"
          sx={{ mb: 2 }}
        />

        <InputField<ISigninFields>
          type="password"
          name="password"
          label="Password"
          sx={{ mb: 2 }}
        />

        <InputField disabled type="button" name="Sign in" sx={{ mb: 2 }} />

        <Typography sx={{ textAlign: "center" }}>
          Don&apos;t have an account?{" "}
          <MuiLink component={Link} href="/auth?signup">
            Sign up
          </MuiLink>
        </Typography>
      </Form>
    </Formik>
  );
}
