"use client";

import { SxStyle } from "@/classes";
import { Box, BoxProps } from "@mui/material";

export function Header({ children, ...props }: BoxProps) {
  return (
    <Box {...props} sx={sxStyle.header}>
      <Box sx={sxStyle.container}>{children}</Box>
    </Box>
  );
}

const sxStyle = SxStyle.create({
  header: (theme) => ({
    width: "100%",
    borderBottom: "1px solid",
    borderColor: "grey.300",
    ...theme.applyStyles("dark", {
      borderColor: "grey.800",
    }),
  }),
  container: (theme) => ({
    maxWidth: `${+theme.general.containerWidth + 2 * 32}px`,
    width: "100%",
    minHeight: "80px",
    mx: "auto",
    px: {
      xs: `${20}px`,
      md: `${32}px`,
    },
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  }),
});
