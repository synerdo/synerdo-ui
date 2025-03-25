"use client";

import { SxStyle } from "@/classes";
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
    _values: ISigninFields,
    formikHelpers: FormikHelpers<ISigninFields>
  ) => {
    // console.log(values);

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
          sx={sxStyle.itemSpacing}
        />

        <InputField<ISigninFields>
          type="password"
          name="password"
          label="Password"
          sx={sxStyle.itemSpacing}
        />

        <InputField
          disabled
          type="button"
          name="Sign in"
          sx={sxStyle.itemSpacing}
        />

        <Typography sx={sxStyle.textCenter}>
          Don&apos;t have an account?{" "}
          <MuiLink component={Link} href="/auth?signup">
            Sign up
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
