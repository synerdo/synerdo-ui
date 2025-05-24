"use client";

import { Api } from "@/api";
import { SxStyle } from "@/classes";
import { InputField } from "@/components/inputs";
import { ISignupFields, signupSchema } from "@/schemas";
import { Link as MuiLink, Typography } from "@mui/material";
import axios from "axios";
import { Form, Formik, FormikHelpers } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function SignupForm() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const initialValues = {
    email: "",
    username: "",
    password: "",
  };

  const handleSubmit = async (
    values: ISignupFields,
    formikHelpers: FormikHelpers<ISignupFields>
  ) => {
    const { resetForm } = formikHelpers;

    setIsLoading(true);

    try {
      await Api.post("/auth/register/", values);

      router.push("/auth?signin");
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        const fields = err.response.data;
        const errors: Record<string, string> = {};
        const touched: Record<string, boolean> = {};

        for (const field in fields) {
          errors[field] = fields[field][0];
          touched[field] = true;
        }

        resetForm({ errors, touched });
      } else {
        console.error(err);

        resetForm();
      }
    }

    setIsLoading(false);
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
          name={isLoading ? "Loading..." : "Sign up"}
          isLoading={isLoading}
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
