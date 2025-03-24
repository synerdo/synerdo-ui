import { Box, BoxProps } from "@mui/material";

interface AuthContainerProps extends BoxProps {}

export function AuthContainer({ children, ...props }: AuthContainerProps) {
  return <Box {...props}>{children}</Box>;
}
