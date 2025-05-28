import { Box, BoxProps } from "@mui/material";

export function Layout({ children, ...props }: BoxProps) {
  return (
    <Box {...props} pt="80px">
      {children}
    </Box>
  );
}
