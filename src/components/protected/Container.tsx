"use client";

import { SxStyle } from "@/classes";
import { Box, BoxProps } from "@mui/material";

export function Container({ children, ...props }: BoxProps) {
  return (
    <Box {...props} sx={sxStyle.container}>
      {children}
    </Box>
  );
}

const sxStyle = SxStyle.create({
  container: (theme) => ({
    maxWidth: `${+theme.general.containerWidth + 2 * 32}px`,
    width: "100%",
    mx: "auto",
    px: {
      xs: `${20}px`,
      md: `${32}px`,
    },
    py: 4,
  }),
});
