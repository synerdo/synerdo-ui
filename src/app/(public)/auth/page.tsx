import { SxStyle } from "@/classes";
import { Layout, SigninForm, SignupForm } from "@/components/auth";
import { SearchParams } from "@/types";
import { Typography } from "@mui/material";

export default async function AuthPage({
  searchParams,
}: {
  searchParams?: Promise<SearchParams>;
}) {
  const sp = (await searchParams) || {};

  const isSignupForm = sp["signup"] !== undefined;

  return (
    <Layout>
      <Typography variant="h1" sx={sxStyle.itemSpacing}>
        {isSignupForm ? "Sign up" : "Sign in"}
      </Typography>

      {isSignupForm ? <SignupForm /> : <SigninForm />}
    </Layout>
  );
}

const sxStyle = SxStyle.create({
  itemSpacing: {
    mb: 4,
  },
});
