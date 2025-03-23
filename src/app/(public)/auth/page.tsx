import { SxStyle } from "@/classes";
import { AuthContainer, SigninForm, SignupForm } from "@/components/auth";
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
    <AuthContainer>
      <Typography variant="h1" sx={sxStyle.itemSpacing}>
        {isSignupForm ? "Sign up" : "Sign in"}
      </Typography>

      {isSignupForm ? <SignupForm /> : <SigninForm />}
    </AuthContainer>
  );
}

const sxStyle = SxStyle.create({
  itemSpacing: {
    mb: 4,
  },
});
