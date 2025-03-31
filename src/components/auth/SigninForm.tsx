"use client";

import { Api } from "@/api";
import { SxStyle } from "@/classes";
import { InputField } from "@/components/inputs";
import { ISigninFields, signinSchema } from "@/schemas";
import { Link as MuiLink, Typography } from "@mui/material";
import { Form, Formik, FormikHelpers } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function SigninForm() {
  const router = useRouter();

  const initialValues = {
    username: "",
    password: "",
  };

  const handleSubmit = async (
    values: ISigninFields,
    formikHelpers: FormikHelpers<ISigninFields>
  ) => {
    const { resetForm } = formikHelpers;

    try {
      const response = await Api.post("/auth/token/", values);
      const tokens = response.data;

      localStorage.setItem("accessToken", tokens.access);
      localStorage.setItem("refreshToken", tokens.refresh);

      router.push("/rooms");
    } catch (err) {
      console.error(err);

      resetForm();
    }
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
          name="username"
          label="Username"
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
