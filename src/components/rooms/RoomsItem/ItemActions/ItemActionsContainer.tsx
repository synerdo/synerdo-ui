import { Box, BoxProps } from "@mui/material";

export function ItemActionsContainer({ children, ...props }: BoxProps) {
  return <Box {...props}>{children}</Box>;
}
