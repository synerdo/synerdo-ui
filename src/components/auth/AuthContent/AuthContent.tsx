import { SigninForm } from "./SigninForm";
import { SignupForm } from "./SignupForm";
import { SearchParams } from "@/types";
import { Box, Typography } from "@mui/material";

interface AuthContentProps {
  searchParams: SearchParams;
}

export function AuthContent({ searchParams }: AuthContentProps) {
  const isSignupForm = searchParams["signup"] !== undefined;

  return (
    <Box>
      <Typography variant="h1" sx={{ mb: 4 }}>
        {isSignupForm ? "Sign up" : "Sign in"}
      </Typography>

      {isSignupForm ? <SignupForm /> : <SigninForm />}
    </Box>
  );
}
