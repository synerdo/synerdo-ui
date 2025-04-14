import { Box, BoxProps } from "@mui/material";

export function Layout({ children, ...props }: BoxProps) {
  return <Box {...props}>{children}</Box>;
}
