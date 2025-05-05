"use client";

import { Box, BoxProps } from "@mui/material";

export function ButtonContainer({ children, ...props }: BoxProps) {
  return <Box {...props}>{children}</Box>;
}
