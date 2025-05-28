import { Box, BoxProps } from "@mui/material";

export function MenuButtonContainer({ children, ...props }: BoxProps) {
  return <Box {...props}>{children}</Box>;
}
